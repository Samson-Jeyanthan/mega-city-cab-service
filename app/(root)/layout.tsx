import { Navbar } from "@/components/shared";
import { Toaster } from "@/components/ui/sonner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col bg-light-850 min-h-screen w-full">
      <Navbar />
      <section className="flex w-full flex-col items-center">
        <div className="flex items-center w-full">{children}</div>
      </section>
      <Toaster />
    </main>
  );
}
