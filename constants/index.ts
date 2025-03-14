export const LEFT_SIDEBAR_LINKS = [
  {
    // icon: HomeIcon,
    name: "Car Managers",
    route: "/admin/car-managers",
  },
  {
    // icon: HomeIcon,
    name: "Drivers",
    route: "/admin/drivers",
  },
  {
    // icon: HomeIcon,
    name: "Customers",
    route: "/admin/customers",
  },
  {
    // icon: HomeIcon,
    name: "Bookings",
    route: "/admin/bookings",
  },
  {
    // icon: HomeIcon,
    name: "Locations",
    route: "/admin/locations",
  },
  {
    // icon: HomeIcon,
    name: "Distances",
    route: "/admin/distances",
  },
];
export const HOURS_OPTIONS = Array.from({ length: 24 }, (_, i) => ({
  _id: (i + 1).toString(),
  name: i + 1,
}));

export const MINUTES_OPTIONS = [
  {
    _id: "00",
    name: "00",
  },
  {
    _id: "15",
    name: "15",
  },
  {
    _id: "30",
    name: "30",
  },
  {
    _id: "45",
    name: "45",
  },
];
