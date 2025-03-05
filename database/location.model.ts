import { Schema, models, model, Document } from "mongoose";

export interface ILocation extends Document {
  name: string;
  createdAt: Date;
}

const LocationSchema = new Schema({
  name: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Location = models.Location || model("Location", LocationSchema);

export default Location;
