import { LocalSearchbar } from "@/components/shared";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getConvertedDate } from "@/lib/utils";
import { getAllDriversAction } from "@/lib/actions/driver.action";
import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { DeleteConfirmModal } from "@/components/modals";

const DriversPage = async () => {
  const results = await getAllDriversAction();

  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Drivers</h1>

      <div className="flex justify-between w-full gap-20">
        <LocalSearchbar
          placeholder="Search by driver name"
          iconPosition="left"
        />
        <Link
          href="/admin/drivers/create"
          className="flex gap-2 items-center px-4 py-2.5 text-sm bg-primary-500 text-light-900 font-medium rounded-lg"
        >
          <FaPlus />
          Add Driver
        </Link>
      </div>

      <Table>
        <TableCaption className="text-light-500">
          A list of created drivers
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">No</TableHead>
            <TableHead>Driver Photo</TableHead>
            <TableHead>Driver Name</TableHead>
            <TableHead>Phone No</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="text-center w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results?.data?.map((data, index) => (
            <TableRow key={index} className="hover:bg-light-750">
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Image
                  src={data.driverPhoto}
                  alt={data.driverName}
                  width={50}
                  height={50}
                  className="rounded-full object-cover size-11"
                />
              </TableCell>
              <TableCell className="capitalize">{data.driverName}</TableCell>
              <TableCell>{data.phoneNo}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{getConvertedDate(data.createdAt)}</TableCell>
              <TableCell className="flex-center gap-3">
                <Link href={`/admin/drivers/edit/${data._id}`}>
                  <MdEdit className="text-lg" />
                </Link>
                <DeleteConfirmModal
                  type="driver"
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

export default DriversPage;
