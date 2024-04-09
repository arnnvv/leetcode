import { createClient } from "redis";

const client = createClient();

const processSubmission = async (submission: string) => {
  const { problemId, code, language } = JSON.parse(submission);

  console.log(`Processing submission for problemId ${problemId}...`);
  console.log(`Code: ${code}`);
  console.log(`Language: ${language}`);
  //processin g code logic
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Finished processing submission for problemId ${problemId}.`);
};
(async () => {
  try {
    await client.connect();
    console.log("Redis client connected to the server");
    while (true) {
      try {
        const submission = await client.brPop("problems", 0);
        if (!submission) return;
        await processSubmission(submission.element);
      } catch (err) {
        console.error("Error processing submission:", err);
        // Implement your error handling logic here. For example, you might want to push
        // the submission back onto the queue or log the error to a file.
      }
    }
  } catch (err) {
    console.error("Error connecting to Redis:", err);
  }
})();
