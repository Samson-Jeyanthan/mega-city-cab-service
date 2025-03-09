export type TLocationParams = {
  _id?: string;
  name: string;
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
  path: string;
};
