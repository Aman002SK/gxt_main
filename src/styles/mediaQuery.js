const breakpoints = [576, 768, 992, 1200, 1400];
const MediaQuery = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default MediaQuery;
