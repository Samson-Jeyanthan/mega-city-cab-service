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
import { getConvertedDate } from "@/lib/utils";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const CarManagersPage = async () => {
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
            <TableHead>Location Name</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="text-center w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {results?.data?.map((data, index) => (
            <TableRow key={index} className="hover:bg-light-750">
              <TableCell>{index + 1}</TableCell>
              <TableCell className="capitalize">{data.name}</TableCell>
              <TableCell>{getConvertedDate(data.createdAt)}</TableCell>
              <TableCell className="flex-center gap-3">
                <LocationModal
                  type="edit"
                  districtDetails={JSON.stringify(data)}
                />
                <ConfirmDeleteModal
                  type="district"
                  itemId={JSON.stringify(data._id)}
                /> 
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </section>
  );
};

export default CarManagersPage;
