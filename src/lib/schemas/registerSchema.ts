import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3, 'Name at least must be 3 chars long'),
  email: z.string().min(1, 'Email is required').email('Email is invalid'),
  password: z.string().min(6, 'Password at least must be 6 chars long'),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
