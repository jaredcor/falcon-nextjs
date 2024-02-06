"use client"; // Make this component a client component
import React, { FormEvent, useState } from "react";
import CustomFileSelector from "./CustomFileSelector";
import ImagePreview from "./ImagePreview";
import axios from "axios";
import classNames from "classnames";
import SlpPreview from "./SlpPreview";

const FileUploadForm = () => {
//   const [images, setImages] = useState<File[]>([]);
  const [slps, setSlps] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //convert `FileList` to `File[]`
      const _files = Array.from(e.target.files);
      setSlps(_files);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    slps.forEach((slp, i) => {
      formData.append(slp.name, slp);
    });
    setUploading(true);
    await axios.post("/api/upload", formData);
    setUploading(false);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <CustomFileSelector
          accept="file/slp"
          onChange={handleFileSelected}
        />
        <button
          type="submit"
          className={classNames({
            "bg-violet-50 text-violet-500 hover:bg-violet-100 px-4 py-2 rounded-md":
              true,
            "disabled pointer-events-none opacity-40": uploading,
          })}
          disabled={uploading}
        >
          Upload
        </button>
      </div>
      {/* <ImagePreview images={images} /> */}
      <SlpPreview slp={slps} />
    </form>
  );
};

export default FileUploadForm;