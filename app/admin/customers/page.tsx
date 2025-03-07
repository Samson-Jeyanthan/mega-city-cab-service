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

const CustomersPage = async () => {
  // const results = await getAllLocationsAction();

  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Customers</h1>

      <div className="flex justify-between w-full gap-20">
        <LocalSearchbar
          placeholder="Search by customer name"
          iconPosition="left"
        />
      </div>

      <Table>
        <TableCaption className="text-light-500">
          A list of registered customers
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">No</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Phone No</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="text-center w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        {/* <TableBody>
          {results?.data?.map((data, index) => (
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
          ))}
        </TableBody>  */}
      </Table>
    </section>
  );
};

export default CustomersPage;
