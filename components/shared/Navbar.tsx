import Link from "next/link";
import { DiAtom } from "react-icons/di";

const Navbar = () => {
  return (
    <nav className="top-0 sticky z-10 w-full h-20 items-center px-16 flex-between bg-light-100">
      <div className="flex-start w-max gap-2 text-2xl font-bold text-primary-500">
        <DiAtom className="text-4xl" />
        <h1>Mega City Cab</h1>
      </div>

      <div className="text-light-900 font-medium flex gap-8">
        <Link href="/profile">Profile</Link>
        <Link href="/bookings">My Bookings</Link>
        <p>Logout</p>
      </div>
    </nav>
  );
};

export default Navbar;
