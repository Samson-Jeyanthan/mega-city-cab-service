"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { MdDelete } from "react-icons/md";
import { usePathname } from "next/navigation";
import { deleteLocationAction } from "@/lib/actions/location.action";
import { deleteDistanceAction } from "@/lib/actions/distance.action";

type Props = {
  type: "location" | "distance" | "manager" | "driver" | "";
  itemId: string;
};

const DeleteConfirmModal = ({ type, itemId }: Props) => {
  const pathname = usePathname();

  const handleDelete = async () => {
    if (type === "location") {
      await deleteLocationAction({
        _id: JSON.parse(itemId),
        path: pathname,
      });
    } else if (type === "distance") {
      await deleteDistanceAction({
        _id: JSON.parse(itemId),
        path: pathname,
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-lg hover:text-light-100 text-red-600">
        <MdDelete />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-light-900">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 text-light-900"
            onClick={handleDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmModal;
