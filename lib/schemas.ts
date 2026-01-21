import { z } from 'zod';

// US phone regex - accepts various formats: (713) 282-5871, 713-282-5871, 7132825871, +1 713 282 5871
const phoneRegex = /^(\+1)?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .regex(phoneRegex, 'Please enter a valid US phone number'),
  email: z.string().email('Please enter a valid email address').max(254),
  caseType: z.string().optional(),
  practiceArea: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000).optional(),
});

export const expungementFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .regex(phoneRegex, 'Please enter a valid US phone number'),
  email: z.string().email('Please enter a valid email address').max(254),
  county: z.string().min(2, 'Please enter your county').max(50),
  chargeType: z.string().min(1, 'Please select charge type'),
});

// Combined schema for API validation (accepts both form types)
export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .regex(phoneRegex, 'Please enter a valid US phone number'),
  email: z.string().email('Please enter a valid email address').max(254),
  caseType: z.string().optional(),
  practiceArea: z.string().optional(),
  message: z.string().max(5000).optional(),
  county: z.string().max(50).optional(),
  chargeType: z.string().optional(),
});
