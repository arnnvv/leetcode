import express, { type Request, type Response } from "express";
import { createClient } from "redis";

const client = createClient();
const app = express();

app.use(express.json());

client.on("error", (err) => console.log("Redis Client Error", err));

(async () => {
  try {
    await client.connect();
    console.log(`Reddis connected`);
    app.listen(3000, () => {
      console.log(`Server listening on port 3000`);
    });
  } catch (err) {
    console.log(`failed to connect to reddis ${err}`);
  }
})();

app.post("/submit", async (req: Request, res: Response) => {
  const problemId = req.body.problemId;
  const code = req.body.code;
  const language = req.body.language;
  try {
    await client.lPush(
      "problems",
      JSON.stringify({ code, language, problemId }),
    );
    res.status(200).send("Submission received and stored.");
  } catch (error) {
    console.error("Redis error:", error);
    res.status(500).send("Failed to store submission.");
  }
});
