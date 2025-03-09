"use client";

import { ChangeEvent, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import Image from "next/image";
import { useMedia } from "@/lib/hooks/useMedia";
import { CameraIcon } from "@/public";

type Props = {
  fieldChange: (e: any) => void;
  mediaUrl?: string | null;
};

const PhotoInput = ({ fieldChange, mediaUrl }: Props) => {
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
      <div className="flex-center bg-light-750 relative w-full h-96 rounded-2xl">
        <input
          type="file"
          ref={photoRef}
          hidden
          onChange={handleInputChange}
          accept="image/jpeg,image/jpg,image/png,image/webp"
        />
        {media.preview && (
          <Image
            src={media.preview}
            alt="car_photo"
            width={1024}
            height={1024}
            className="w-full h-96 rounded-2xl object-contain bg-black"
          />
        )}
        <div
          className="absolute flex items-center gap-2 px-3 bottom-3 right-3 cursor-pointer rounded-lg bg-light-100 fill-white py-3 text-white text-sm"
          onClick={handleInputBtn}
        >
          {media.preview ? (
            <>
              <MdEdit fill="white text-3xl" />
              Edit Car Photo
            </>
          ) : (
            <>
              <CameraIcon fill="white" width="21px" height="21px" />
              Add Car Photo
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PhotoInput;
