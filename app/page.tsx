import Link from 'next/link';
import { lusitana } from "./ui/fonts";
import Image from "next/image";
import FileUploadForm from "@/components/FileUploadForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";


export default function Page() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          falcon-nextjs
        </h1>
        <ModeToggle />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="file">
            <p className="text-xl text-muted-foreground">
              Upload your slippi directory
            </p>
          </Label>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input id="file" type="file" multiple />
            {/* TODO: make button do something */}
            <Button type="submit" variant="default" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
