import { Schema, models, model, Document } from "mongoose";

export interface IManager extends Document {
  managerName: string;
  nicNo: string;
  phoneNo: string;
  email?: string;
  carMade: string;
  carModel: string;
  carNo: string;
  carPhoto: string;
  createdAt: Date;
}

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
