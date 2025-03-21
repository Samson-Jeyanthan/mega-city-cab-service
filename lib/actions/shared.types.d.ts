export type TLocationParams = {
  _id?: string;
  name: string;
  path: string;
};

export type TDistanceParams = {
  _id?: string;
  from: string;
  to: string;
  distance: number;
  path: string;
};

export type TManagerParams = {
  _id?: string;
  managerName: string;
  nicNo: string;
  phoneNo: string;
  email?: string;
  carMade: string;
  carModel: string;
  carNo: string;
  carPhoto: string;
  path: string;
};

export type TDriverParams = {
  _id?: string;
  driverName: string;
  nicNo: string;
  phoneNo: string;
  email: string;
  address: string;
  driverPhoto: string;
  assignedCars: string[];
  path: string;
};

export type TDeleteParams = {
  _id: string;
  path: string;
};

export type TCustomerParams = {
  _id?: string;
  customerName: string;
  nicNo: string;
  phoneNo: string;
  email?: string;
  password?: string;
  address: string;
  path: string;
};
