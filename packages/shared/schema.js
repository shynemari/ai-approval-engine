import { z } from "zod";

export const ApprovalSchema = z.object({
  title: z.string(),
  amount: z.number(),
  description: z.string()
});