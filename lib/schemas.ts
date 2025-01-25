import * as z from 'zod';
export type FormDataType = z.infer<typeof contactSchema>;

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, 'first name must be at least 2 characters')
    .max(50, 'too long first name'),
  lastName: z.string().optional(),
  email: z.string().email('invalid email'),
  phone: z.string().optional(),
  message: z
    .string()
    .min(5, 'message must be at least 5 characters')
    .max(500, 'too long Message'),
});
