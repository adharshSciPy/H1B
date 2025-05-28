import { Links } from "../model/linksModel.js";
const linkPost = async (req, res) => {
  const { link, companyName, ranking,rating } = req.body;

  if (!link) {  
    return res.status(400).json({ message: "Link is required" });
  }

  try {
    const newLink = new Links({
      link,
      companyName,
      ranking,
      rating
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
const fetchSortedLinks = async (req, res) => {
  try {
    const sortedLinks = await Links.find().sort({
      ranking: 1,         // ascending
      rating: -1,         // descending
      companyName: 1      // ascending
    });

    return res.status(200).json({
      message: "Links fetched and sorted successfully",
      data: sortedLinks
    });
  } catch (error) {
    console.error("Error fetching sorted links:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export { linkPost,fetchSortedLinks};