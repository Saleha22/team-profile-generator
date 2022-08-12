const path = require("path");
const fs = require("fs");
const generateHTML = ({ manager, engineer, intern }) => {
  const html = ``;
  fs.writeFileSync(path.join(__dirname, "../dist", "index.html"));
};
module.exports = generateHTML;
