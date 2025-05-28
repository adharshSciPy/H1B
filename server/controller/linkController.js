import { Links } from "../model/linksModel.js";
const linkPost = async (req, res) => {
  const { link, companyName, ranking } = req.body;

  if (!link) {
    return res.status(400).json({ message: "Link is required" });
  }

  try {
    const newLink = new Links({
      link,
      companyName,
      ranking,
    });

    const savedLink = await newLink.save();

    return res.status(201).json({
      message: "Link posted successfully",
      data: savedLink,
    });
  } catch (error) {
    console.error("Error saving link:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export { linkPost};