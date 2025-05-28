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
const updateLink = async (req, res) => {
  const { id } = req.params;
  const { link, companyName, ranking, rating } = req.body;

  // Create an object with only the fields that are provided
  const updateData = {};
  if (link !== undefined) updateData.link = link;
  if (companyName !== undefined) updateData.companyName = companyName;
  if (ranking !== undefined) updateData.ranking = ranking;
  if (rating !== undefined) updateData.rating = rating;

  // If no fields are provided
  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({ message: "At least one field must be provided for update" });
  }

  try {
    const updatedLink = await Links.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedLink) {
      return res.status(404).json({ message: "Link not found" });
    }

    return res.status(200).json({
      message: "Link updated successfully",
      data: updatedLink,
    });
  } catch (error) {
    console.error("Error updating link:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export { linkPost,fetchSortedLinks,updateLink};