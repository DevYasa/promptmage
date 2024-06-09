const { generateImageFromText } = require('../services/huggingfaceService');

exports.generateImage = async (req, res) => {
  const { prompt } = req.body;
  try {
    console.log('Received request to generate image with prompt:', prompt);
    const imageData = await generateImageFromText(prompt);
    console.log('Generated image data:', imageData);
    res.json({ image_url: imageData.images ? imageData.images[0].url : 'default_image_url' }); // Adjust based on the actual response structure
  } catch (error) {
    console.error('Error generating image:', error.message);
    res.status(500).json({ error: 'Error generating image' });
  }
};
