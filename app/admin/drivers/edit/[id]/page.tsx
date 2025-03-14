import { DriverForm } from "@/components/forms";
import { getDriverByIdAction } from "@/lib/actions/driver.action";
import { IParamsProps } from "@/types/utils.type";

const EditDriver = async ({ params }: IParamsProps) => {
  const result = await getDriverByIdAction({ _id: params.id });

  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Edit Driver Details</h1>

      <DriverForm type="edit" driverDetails={JSON.stringify(result)} />
    </section>
  );
};

export default EditDriver;
