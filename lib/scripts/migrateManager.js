import mongoose from "mongoose";
import { connectToDatabase, disconnectFromDatabase } from "./mongoose.js";

const { model, models, Schema } = mongoose;

// ------------------------ manager model ------------------------------

const ManagerSchema = new Schema({
  managerName: { type: String },
  nicNo: { type: String },
  phoneNo: { type: String },
  email: { type: String },
  carMade: { type: String },
  carModel: { type: String },
  carNo: { type: String },
  carPhoto: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Manager = models.Manager || model("Manager", ManagerSchema);

export default Manager;

// ---------------------- migration function -----------------------

const migrateManager = async () => {
  try {
    // Connect to the database
    connectToDatabase();

    // Find all
    const managers = await Manager.find({});

    // Update each
    for (const manager of managers) {
      console.log(manager.communityId);

      // if (post.postImage && typeof post.postImage === "string") {
      // post.media = [
      //   {
      //     mediaType: "image", // Assuming existing postImage fields are images
      //     mediaURL: post.postImage,
      //     thumbnailURL: "",
      //   },
      // ];

      // Remove the postImage field
      // post.postImage = undefined;
      // } else {
      //   post.media = [];
      // }

      await manager.save();
      // console.log(`Post with ID ${post._id} updated`);
    }

    console.log("Migration completed!");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    disconnectFromDatabase();
  }
};

migrateManager();
