"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const DriverCard = ({ data }: any) => {
  return (
    <div className="w-full flex p-6 gap-4 rounded-xl bg-light-700">
      <Image
        src={data.driverPhoto || "/user-single-black.png"}
        alt={data.driverName}
        width={100}
        height={100}
        className="rounded-full object-cover min-w-36 size-36 bg-light-500"
      />
      <div>
        <h1 className="font-bold text-lg">{data.driverName}</h1>

        <div className="flex gap-4">
          <p>{data.phoneNo}</p>
          <p>{data.email}</p>
        </div>
      </div>
      <div className="flex items-end w-full justify-end">
        <Button className="bg-primary-500 text-white">Book a Ride</Button>
      </div>
    </div>
  );
};

export default DriverCard;
