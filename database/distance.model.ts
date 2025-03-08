import { Schema, models, model, Document } from "mongoose";

export interface IDistance extends Document {
  from: string;
  to: string;
  distance: number;
  createdAt: Date;
}

const DistanceSchema = new Schema({
  from: { type: String },
  to: { type: String },
  distance: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

const Distance = models.Distance || model("Distance", DistanceSchema);

export default Distance;
