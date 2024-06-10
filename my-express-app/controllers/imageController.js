const { generateImageFromText } = require('../services/huggingfaceService');

exports.generateImage = async (req, res) => {
  const { prompt } = req.body;
  try {
    console.log('Received request to generate image with prompt:', prompt);
    const imageData = await generateImageFromText(prompt);
    console.log('Generated image data:', imageData);

    // Check if image URL is correctly formatted as a string
    if (imageData && typeof imageData === 'object' && 'image_url' in imageData) {
      res.json({ image_url: imageData.image_url });
    } else {
      console.error('Unexpected response structure:', imageData);
      throw new Error('No image generated');
    }
  } catch (error) {
    console.error('Error generating image:', error.message);
    res.status(500).json({ error: error.message });
  }
};
