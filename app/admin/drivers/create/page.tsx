import { DriverForm } from "@/components/forms";
import { getAllManagersAction } from "@/lib/actions/manager.action";

const CreateDriver = async () => {
  const results = await getAllManagersAction();
  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Create Driver</h1>

      <DriverForm type="create" carDetails={JSON.stringify(results.data)} />
    </section>
  );
};

export default CreateDriver;
