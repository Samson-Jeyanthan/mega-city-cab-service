import { Schema, model, models } from "mongoose";

export interface ICustomer extends Document {
  customerName: string;
  nicNo: string;
  phoneNo: string;
  email: string;
  password: string;
  address: string;
  createdAt: Date;
}

const CustomerSchema = new Schema({
  customerName: { type: String },
  nicNo: { type: String, unique: true },
  phoneNo: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  address: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Customer = models.Customer || model("Customer", CustomerSchema);

export default Customer;
