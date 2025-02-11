import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Use the environment variable
  dangerouslyAllowBrowser: true, // Only if you're using it in the browser
});

export default openai;