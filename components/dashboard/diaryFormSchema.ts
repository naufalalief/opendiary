import { z } from "zod";

export const formSchema = z.object({
  content: z
    .string()
    .min(10, "Content is too short")
    .max(500, "Content is too long"),
});

export type FormSchemaType = z.infer<typeof formSchema>;
