const { generateImageFromText } = require('../services/huggingfaceService');

exports.generateImage = async (req, res) => {
  const { prompt } = req.body;
  try {
    console.log('Received request to generate image with prompt:', prompt);
    const imageData = await generateImageFromText(prompt);
    console.log('Generated image data:', imageData);

    if (imageData && imageData.image_url) {
      res.json({ image_url: imageData.image_url });
    } else {
      throw new Error('No image generated');
    }
  } catch (error) {
    console.error('Error generating image:', error.message);
    res.status(500).json({ error: error.message });
  }
};
