import { Schema, models, model, Document } from "mongoose";

export interface IDriver extends Document {
  driverName: string;
  nicNo: string;
  phoneNo: string;
  email: string;
  address: string;
  driverPhoto: string;
  assignedCars: string[];
  createdAt: Date;
}

const DriverSchema = new Schema({
  driverName: { type: String },
  nicNo: { type: String, unique: true },
  phoneNo: { type: String, unique: true },
  email: { type: String, unique: true },
  address: { type: String },
  driverPhoto: { type: String },
  assignedCars: { type: Schema.Types.ObjectId, ref: "Manager" },
  createdAt: { type: Date, default: Date.now },
});

const Driver = models.Driver || model("Driver", DriverSchema);

export default Driver;
