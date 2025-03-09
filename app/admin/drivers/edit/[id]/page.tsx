import { DriverForm } from "@/components/forms";

const EditDriver = () => {
  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Edit Driver Details</h1>

      <DriverForm type="edit" />
    </section>
  );
};

export default EditDriver;
