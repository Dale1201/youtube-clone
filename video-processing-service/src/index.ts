import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World Dale!");
// });

app.post("/process-video", (req, res) => {
  console.log(req.body)
  const inputFilePath = req.body.inputFilePath;
  const outputFilePath = req.body.outputFilePath;

  if (!inputFilePath || !outputFilePath) {
    res.status(400).send("Bad Request: Missing input or output file path");
  }

  ffmpeg(inputFilePath)
    .outputOptions("-vf", "scale=-1:360")
    .on("end", () => {
      return res.status(200).send("Processing finished successfully");
    })
    .on("error", (err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    })
    .save(outputFilePath);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
