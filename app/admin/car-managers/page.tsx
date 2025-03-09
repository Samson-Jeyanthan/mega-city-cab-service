import { DeleteConfirmModal } from "@/components/modals";
import { LocalSearchbar } from "@/components/shared";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllManagersAction } from "@/lib/actions/manager.action";
import { getConvertedDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

const CarManagersPage = async () => {
  const results = await getAllManagersAction();
  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Car Managers / Owners</h1>

      <div className="flex justify-between w-full gap-20">
        <LocalSearchbar
          placeholder="Search by manager name"
          iconPosition="left"
        />
        <Link
          href="/admin/car-managers/create"
          className="flex gap-2 items-center px-4 py-2.5 text-sm bg-primary-500 text-light-900 font-medium rounded-lg"
        >
          <FaPlus />
          Add Manager
        </Link>
      </div>

      <Table>
        <TableCaption className="text-light-500">
          A list of created managers
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">No</TableHead>
            <TableHead>Manager Name</TableHead>
            <TableHead>Phone No</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Car No</TableHead>
            <TableHead>Car Photo</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="text-center w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results?.data?.map((data, index) => (
            <TableRow key={index} className="hover:bg-light-750">
              <TableCell>{index + 1}</TableCell>
              <TableCell className="capitalize">{data.managerName}</TableCell>
              <TableCell className="capitalize">{data.phoneNo}</TableCell>
              <TableCell className="capitalize">{data.email}</TableCell>
              <TableCell className="capitalize">{data.carNo}</TableCell>
              <TableCell className="capitalize">
                <Image
                  src={data.carPhoto || "/car.png"}
                  alt="car photo"
                  width={200}
                  height={200}
                  className="w-20 h-20 object-cover rounded-md bg-light-700"
                />
              </TableCell>

              <TableCell>{getConvertedDate(data.createdAt)}</TableCell>
              <TableCell className="flex-center h-28 gap-4">
                <Link href={`/admin/car-managers/edit/${data._id}`}>
                  <MdEdit className="text-lg" />
                </Link>
                <DeleteConfirmModal
                  type="manager"
                  itemId={JSON.stringify(data._id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default CarManagersPage;
