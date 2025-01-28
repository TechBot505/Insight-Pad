"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2Icon } from "lucide-react";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";

function UploadDialog({ children }) {

    const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
    const uploadFileToStorage = useMutation(api.storage.uploadFileToStorage);
    const { user } = useUser();
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);

    const onFileSelect = (event) => {
        setFile(event.target.files[0]);
    }

    const onUpload = async () => {
        setLoading(true);
        const postUrl = await generateUploadUrl();
        const result = await fetch(postUrl, {
            method: "POST",
            headers: { "Content-Type": file?.type },
            body: file,
        });
        const { storageId } = await result.json();
        console.log("Storage ID", storageId);
        const fileId = uuid4();
        const response = await uploadFileToStorage({
            fileId: fileId,
            fileName: fileName??'Untitled',
            storageId: storageId,
            createdBy: user?.primaryEmailAddress?.emailAddress,
        })
        console.log(response);
        setLoading(false);
    }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload PDF File</DialogTitle>
          <DialogDescription asChild>
            <div>
              <div className="mt-2">
                <label className="mt-4">File Name</label>
                <Input
                    className="mt-2 w-full" 
                    placeholder="Enter File Name" 
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <h2>Select a file to Upload</h2>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => onFileSelect(e)}
                  className="mt-2 border p-2 w-full rounded-lg"
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
                <Button type="button" variant="secondary">Close</Button>
            </DialogClose>
            <Button onClick={onUpload}>
                {loading && <Loader2Icon className="animate-spin" />}
                Upload
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadDialog;
