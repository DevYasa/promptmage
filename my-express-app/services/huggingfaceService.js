const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const generateImageFromText = async (prompt) => {
  const apiKey = ''; // Replace with your Hugging Face API key
  const modelId = 'CompVis/stable-diffusion-v1-4'; // Use the advanced model ID

  try {
    console.log('Requesting image generation from Hugging Face API...');
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${modelId}`,
      { inputs: prompt },
      { headers: { Authorization: `Bearer ${apiKey}` }, responseType: 'arraybuffer' }
    );

    console.log('Response from Hugging Face API received as arraybuffer.');

    const buffer = Buffer.from(response.data, 'binary');
    const filename = `${uuidv4()}.png`;
    const filePath = path.join(__dirname, '..', 'public', 'images', filename);

    fs.writeFileSync(filePath, buffer);
    console.log('Image saved to', filePath);

    return { image_url: `/images/${filename}` }; // Return the URL as a string
  } catch (error) {
    console.error('Error from Hugging Face API:', error.response ? error.response.data : error.message);
    throw new Error('Error generating image');
  }
};

module.exports = { generateImageFromText };
