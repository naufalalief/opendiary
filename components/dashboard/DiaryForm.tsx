"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { formSchema, FormSchemaType } from "./diaryFormSchema";
import { onSubmit } from "@/app/actions/diaryFormAction";

const DiaryForm = () => {
  const router = useRouter();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  // function onSubmit(data: FormSchemaType) {
  //   console.log(data);
  //   router.push("/dashboard/my-diary");
  // }

  // const onSubmit = async (data: FormData) => {
  //   "use server";
  //   const content = data.get("content");
  //   console.log(content);
  // };

  return (
    <Form {...form}>
      <form action={onSubmit} className="w-1/3 container">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription>
                Write your daily thoughts here. (10 - 500 characters)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default DiaryForm;
