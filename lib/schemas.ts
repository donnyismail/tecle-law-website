import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  caseType: z.string().optional(),
  practiceArea: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const expungementFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  county: z.string().min(2, 'Please enter your county'),
  chargeType: z.string().min(1, 'Please select charge type'),
});
