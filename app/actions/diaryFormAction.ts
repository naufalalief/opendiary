"use server";
import { FormSchemaType } from "@/components/dashboard/diaryFormSchema";
import { redirect } from "next/navigation";

export const onSubmit = async (data: FormSchemaType) => {
  "use server";
  const content = data.content;
  console.log(content);
  redirect("/dashboard/my-diary");
};
