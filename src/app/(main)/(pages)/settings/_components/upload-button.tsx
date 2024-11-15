/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";

type Props = {
  onUpload?: any;
};

function UploadButton({ onUpload }: Props) {
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey={process.env.NEXT_PUBLIC_UPLOAD_CARE_PUB_KEY!}
        onFileUploadSuccess={onUpload}
      />
    </div>
  );
}

export default UploadButton;
