import { CarManagerForm } from "@/components/forms";
import { getManagerByIdAction } from "@/lib/actions/manager.action";
import { IParamsProps } from "@/types/utils.type";

const EditManagerDetail = async ({ params }: IParamsProps) => {
  const result = await getManagerByIdAction({ _id: params.id });

  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Edit Car Manager</h1>

      <CarManagerForm type="edit" managerDetails={JSON.stringify(result)} />
    </section>
  );
};

export default EditManagerDetail;
