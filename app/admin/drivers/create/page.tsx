import { DriverForm } from "@/components/forms";

const CreateDriver = () => {
  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Create Driver</h1>

      <DriverForm type="create" />
    </section>
  );
};

export default CreateDriver;
