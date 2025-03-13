import { BookingForm } from "@/components/forms";
import { getAllLocationsAction } from "@/lib/actions/location.action";
import Image from "next/image";

const BookingPage = async () => {
  const locations = await getAllLocationsAction();
  return (
    <section className="w-full flex items-center flex-col pb-20">
      <Image
        src={"/bg-2.jpg"}
        width={2000}
        height={2000}
        alt="bg-2"
        className="object-cover w-full h-[28rem]"
      />
      <BookingForm locations={JSON.stringify(locations?.data)} />
    </section>
  );
};

export default BookingPage;
