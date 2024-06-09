const { generateImageFromText } = require('../services/huggingfaceService');

exports.generateImage = async (req, res) => {
  const { prompt } = req.body;
  try {
    const imageData = await generateImageFromText(prompt);
    res.json({ image_url: imageData.images[0] }); // Adjust based on the actual response structure
  } catch (error) {
    res.status(500).json({ error: 'Error generating image' });
  }
};
