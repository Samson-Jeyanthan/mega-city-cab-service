import LeftSidebar from "@/components/shared/LeftSidebar";
import { Toaster } from "@/components/ui/sonner";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex bg-light-850 min-h-screen w-full">
      <LeftSidebar />
      <section className="flex w-full flex-col p-12 items-center">
        <div className="flex items-center mx-auto w-full max-w-7xl">
          {children}
        </div>
      </section>
      <Toaster />
    </main>
  );
}
