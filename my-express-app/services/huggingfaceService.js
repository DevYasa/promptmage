const axios = require('axios');

const generateImageFromText = async (prompt) => {
  const apiKey = 'YOUR_HUGGING_FACE_API_KEY'; // Replace with your Hugging Face API key
  const modelId = 'CompVis/stable-diffusion-v1-4'; // Use the advanced model ID

  const response = await axios.post(
    `https://api-inference.huggingface.co/models/${modelId}`,
    {
      inputs: prompt,
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response.data;
};

module.exports = { generateImageFromText };
