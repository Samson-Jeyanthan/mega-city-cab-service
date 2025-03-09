import { DeleteConfirmModal, DistanceModal } from "@/components/modals";
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
import { getAllDistancesAction } from "@/lib/actions/distance.action";
import { getAllLocationsAction } from "@/lib/actions/location.action";
import { getConvertedDate } from "@/lib/utils";

const DistancePage = async () => {
  const results = await getAllDistancesAction();
  const locations = await getAllLocationsAction();

  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Distances</h1>

      <div className="flex justify-between w-full gap-20">
        <LocalSearchbar
          placeholder="Search by distance between"
          iconPosition="left"
        />
        <DistanceModal
          type="create"
          locations={JSON.stringify(locations?.data)}
        />
      </div>

      <Table>
        <TableCaption className="text-light-500">
          A list of created distances
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">No</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Distance in KM</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="text-center w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results?.data?.map((data, index) => (
            <TableRow key={index} className="hover:bg-light-750">
              <TableCell>{index + 1}</TableCell>
              <TableCell className="capitalize">{data.from.name}</TableCell>
              <TableCell className="capitalize">{data.to.name}</TableCell>
              <TableCell className="capitalize">{data.distance}</TableCell>
              <TableCell className="capitalize">
                {Number(data.distance) * 100}
              </TableCell>

              <TableCell>{getConvertedDate(data.createdAt)}</TableCell>
              <TableCell className="flex-center gap-3">
                <DistanceModal
                  type="edit"
                  distanceDetails={JSON.stringify(data)}
                  locations={JSON.stringify(locations?.data)}
                />

                <DeleteConfirmModal
                  type="distance"
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

export default DistancePage;
