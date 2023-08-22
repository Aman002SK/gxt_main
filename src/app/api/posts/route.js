import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async () => {
  try {
    await connect();

    const posts = await Post.find();

    const response = posts.map((post) => {
      if (post.img) {
        // Convert the array of integers to a Buffer
        const imageBuffer = Buffer.from(post.img);
        post.img = imageBuffer;
      }
      return post;
    });
    // console.log("response", response);
    return NextResponse.json({ status: 200, blogs: response });
  } catch (err) {
    // console.log("server err", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log("req.params", id);

    await connect();
    const posts = await Post.findByIdAndDelete(id);
    return NextResponse.json({ status: 200, posts });
  } catch (error) {
    console.log("error", error);
  }
};

export const POST = async (request) => {
  try {
    const formData = await request.formData();
    const img = formData.get("img");
    const title = formData.get("title");
    const desc = formData.get("desc");
    const content = formData.get("content");
    const username = formData.get("username");
    const slug = formData.get("slug");

    if (!img || !title || !desc || !content || !username || !slug) {
      return NextResponse.json(
        {
          error: "All fields are necessary",
        },
        { status: 400 }
      );
    }

    // Convert file to stream
    const stream = img.stream();

    // Convert stream to buffer
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const imgBuffer = Buffer.concat(chunks);

    const newPost = new Post({
      img: imgBuffer,
      title,
      desc,
      content,
      username,
      slug,
    });

    console.log(imgBuffer, img);
    await connect();
    await newPost.save();
    return NextResponse.json({
      status: 201,
      message: "Post has been created",
      newPost,
    });
  } catch (err) {
    console.log("error", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
