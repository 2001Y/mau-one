import fs from "fs";
import path from "path";

export default function (req, res) {
  var min = 1;
  var max = 28;
  var ran = Math.floor(Math.random() * (max + 1 - min)) + min;

  const filePath = path.join(__dirname, "img/15/" + ran + ".JPG");
  const imageBuffer = fs.readFileSync(filePath, "utf8");

  // res.setHeader("Content-Type", "image/jpg");
  // res.send(imageBuffer);

  res.json({ user: { id, name: "Test User" } });
}
