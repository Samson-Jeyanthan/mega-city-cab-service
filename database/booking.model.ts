import { Schema, models, model, Document } from "mongoose";

interface IBooking extends Document {
  locationFrom: string;
  locationTo: string;
  customerId: string;
  managerId: string;
  driverId: string;
  distance: number;
  price: number;
  pickupDate: Date;
  pickupTime: string;
  createdAt: Date;
}

const BookingSchema = new Schema({
  locationFrom: { type: Schema.Types.ObjectId, ref: "Location" },
  locationTo: { type: Schema.Types.ObjectId, ref: "Location" },
  customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
  managerId: { type: Schema.Types.ObjectId, ref: "Manager" },
  driverId: { type: Schema.Types.ObjectId, ref: "Driver" },
  distance: { type: Number },
  price: { type: Number },
  pickupDate: { type: Date },
  pickupTime: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Booking = models.Booking || model("Booking", BookingSchema);

export default Booking;
