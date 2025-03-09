"use client";

import { ChangeEvent, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import Image from "next/image";
import { useMedia } from "@/lib/hooks/useMedia";
import { CameraIcon } from "@/public";

type Props = {
  fieldChange: (e: any) => void;
  mediaUrl?: string | null;
  defaultPic: string;
};

const DriverPhotoInput = ({ fieldChange, mediaUrl, defaultPic }: Props) => {
  const photoRef = useRef<HTMLInputElement>(null);
  const [isActionOpen, setIsActionOpen] = useState(false);
  const { handleImageInput, media } = useMedia();

  // handle the photo action modal open and input change
  const handleInputBtn = () => {
    if (media.preview) {
      setIsActionOpen(true);
    } else {
      photoRef.current?.click();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleImageInput({
      e,
      isMultiple: false,
      acceptFileType: ["image/png", "image/jpeg", "image/jpg", "image/webp"],
      filesLimit: 1,
    });
    fieldChange(e.target.files);
  };

  return (
    <>
      <div className="flex-center bg-light-750 relative min-w-36 size-36 rounded-full">
        <input
          type="file"
          ref={photoRef}
          hidden
          onChange={handleInputChange}
          accept="image/jpeg,image/jpg,image/png,image/webp"
        />
        <Image
          src={media.preview || defaultPic}
          alt="driver_photo"
          width={512}
          height={512}
          className={`${
            media.preview ? "size-36 rounded-full" : "size-24"
          } object-cover`}
        />

        <div
          className="absolute bottom-0 right-1 cursor-pointer rounded-full bg-light-100 fill-white p-2 text-white"
          onClick={handleInputBtn}
        >
          {media.preview ? (
            <MdEdit fill="white" />
          ) : (
            <CameraIcon fill="white" width="21px" height="21px" />
          )}
        </div>
      </div>
    </>
  );
};

export default DriverPhotoInput;
