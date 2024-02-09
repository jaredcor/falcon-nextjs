"use client"

import { lusitana } from "./ui/fonts";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  file: z
    .instanceof(FileList)
    .refine((file) => file?.length >= 1, "Upload at least one .slp file")
});

export default function Page() {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const fileRef = form.register("file");

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen flex-col p-6">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          falcon-nextjs
        </h1>
        <ModeToggle />
      </div>
      <div id="main" role="main" className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl text-muted-foreground">
                      Upload your slippi directory
                    </FormLabel>
                    <FormControl>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input 
                          type="file" 
                          multiple 
                          {...fileRef}
                        />
                        {/* TODO: make button do something */}
                        <Button type="submit" variant="default" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
