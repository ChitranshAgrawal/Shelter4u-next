import models from "../db/connections.js"
const { HomeSecondSection } = models;

//GET Request
const getHomeSecondSection = async (req, res) => {
  try {
    const section = await HomeSecondSection.findOne();
    if (!section) return res.status(404).json({ message: "Not found" });

    res.json(section);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
    getHomeSecondSection
}
