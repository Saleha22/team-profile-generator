const path = require("path");
const fs = require("fs");
const generateHTML = ({ manager, engineer, intern }) => {
  const html = `<html>
  <body>Hello</body>
</html>`;
  fs.writeFileSync(path.join(__dirname, "../dist", "index.html"), html);
};
module.exports = generateHTML;
