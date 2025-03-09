import { CarManagerForm } from "@/components/forms";

const EditManagerDetail = () => {
  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Edit Car Manager</h1>

      <CarManagerForm type="edit" />
    </section>
  );
};

export default EditManagerDetail;
