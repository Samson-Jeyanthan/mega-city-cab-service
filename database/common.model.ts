import { Schema, model, models, Document } from "mongoose";

export interface ICommon extends Document {
  price?: string;
  createdAt: Date;
}

const CommonSchema = new Schema({
  price: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Common = models.Common || model("Common", CommonSchema);

export default Common;
