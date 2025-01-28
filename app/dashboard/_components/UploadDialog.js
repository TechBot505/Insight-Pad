import React from "react";
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

function UploadDialog({ children }) {
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
                <Input className="mt-2 w-full" placeholder="Enter File Name" />
              </div>
              <div className="mt-4">
                <h2>Select a file to Upload</h2>
                <input
                  type="file"
                  accept="application/pdf"
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
            <Button type="submit">Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadDialog;
