/**

Custom JavaScript for n8n to handle

YouTube Metadata updates from Notion */

const videoId = $node["Notion Trigger"].json["YouTube_ID"]; const newTitle = $node["Notion Trigger"].json["New_Title"]; const newDesc = $node["Notion Trigger"].json["New_Description"];

return { resource: "video", operation: "update", id: videoId, snippet: { title: newTitle, description: newDesc, categoryId: "22" // People & Blogs } };