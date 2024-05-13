import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Email is invalid'),
  password: z.string().min(6, 'Password at least must be 6 chars long'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
