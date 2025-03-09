import { CarManagerForm } from "@/components/forms";

const CreateCarManager = () => {
  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Create Car Manager</h1>

      <CarManagerForm type="create" />
    </section>
  );
};

export default CreateCarManager;
