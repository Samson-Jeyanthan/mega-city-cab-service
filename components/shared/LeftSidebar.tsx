"use client";

import { Button } from "@/components/ui/button";
import { LEFT_SIDEBAR_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DiAtom } from "react-icons/di";
import { IoIosArrowForward } from "react-icons/io";

const LeftSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="xl:flex w-[16rem] min-w-[16rem] sticky top-0 left-0 max-h-screen min-h-screen bg-light-900 p-4 hidden flex-col justify-between">
      <div className="flex flex-col gap-10 pt-6">
        <header className="flex-start w-max gap-2 text-2xl font-bold text-primary-500">
          <DiAtom className="text-4xl" />
          <h1>Mega City Cab</h1>
        </header>

        <div className="flex gap-2 flex-col">
          {LEFT_SIDEBAR_LINKS.map((item, index) => {
            const isActive =
              (pathname.startsWith(item.route) && item.route.length > 1) ||
              pathname === item.route;
            return (
              <Link
                key={index}
                href={item.route}
                className={`${
                  isActive
                    ? "bg-primary-500/30 text-light-100 font-medium"
                    : "hover:bg-light-800 hover:font-medium"
                } flex-between w-full p-4 py-2.5 rounded-lg`}
              >
                <p className="text-sm">{item.name}</p>
                {isActive && <IoIosArrowForward />}
              </Link>
            );
          })}
        </div>
      </div>

      <Button className="bg-light-800 hover:bg-primary-500/30">Logout</Button>
    </aside>
  );
};

export default LeftSidebar;
