const axios = require('axios');
const fs = require('fs');
const path = require('path');

const generateImageFromText = async (prompt) => {
  const apiKey = ''; // Replace with your Hugging Face API key
  const modelId = 'CompVis/stable-diffusion-v1-4'; // Use the advanced model ID

  try {
    console.log('Requesting image generation from Hugging Face API...');
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${modelId}`,
      {
        inputs: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        responseType: 'arraybuffer',
      }
    );
    console.log('Response from Hugging Face API received as arraybuffer.');

    const imageBuffer = Buffer.from(response.data, 'binary');
    const imageName = `${uuidv4()}.png`;
    const imagePath = path.join(__dirname, '..', 'public', 'images', imageName);

    fs.writeFileSync(imagePath, imageBuffer);
    console.log(`Image saved to ${imagePath}`);

    return { image_url: `/images/${imageName}` };
  } catch (error) {
    console.error('Error from Hugging Face API:', error.response ? error.response.data : error.message);
    throw new Error('Error generating image');
  }
};

module.exports = { generateImageFromText };
