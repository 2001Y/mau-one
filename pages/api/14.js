import fs from "fs";
import path from "path";

export default function FF(req, res) {
  var min = 1;
  var max = 15;
  var ran = Math.floor(Math.random() * (max + 1 - min)) + min;

  const filePath = path.resolve(process.cwd(), "img/14/" + ran + ".JPG");
  const imageBuffer = fs.readFileSync(filePath);

  console.log(filePath);

  res.setHeader("Content-Type", "image/jpg");
  res.send(imageBuffer);
}
