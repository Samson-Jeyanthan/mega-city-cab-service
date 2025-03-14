import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen w-full flex-center bg-slate-900">
      <div className="w-1/2 flex">
        <div className="flex flex-col gap-4 w-3/4 p-12 text-white">
          <h1 className="text-4xl font-bold">
            Your Ride, Your Way – Book a Cab in Seconds!
          </h1>
          <p className="text-lg">
            🚖 Fast, Safe, and Affordable Rides – Anytime, Anywhere! Skip the
            wait and travel with ease. Whether it’s a daily commute or a long
            trip, we’ve got you covered with reliable drivers and seamless
            booking.
          </p>
          <div className="flex gap-4">
            <Link href="/login" className="bg-primary-500 p-3 rounded-lg">
              Book a Cab
            </Link>
            <Link href="/signup" className="border rounded-lg flex-center p-3">
              Create an account
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/hero.jpg"
        alt="hero"
        width={1000}
        height={1000}
        className="object-cover w-1/2 h-screen"
      />
    </section>
  );
}
