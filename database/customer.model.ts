import { Schema, model, models } from "mongoose";

export interface ICustomer extends Document {
  name: string;
  nicNo: string;
  phoneNo: string;
  email: string;
  address: string;
  createdAt: Date;
}

const CustomerSchema = new Schema({
  name: { type: String },
  nicNo: { type: String, unique: true },
  phoneNo: { type: String, unique: true },
  email: { type: String, unique: true },
  address: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Customer = models.Customer || model("Customer", CustomerSchema);

export default Customer;
