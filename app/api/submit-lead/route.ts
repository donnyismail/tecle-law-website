import { NextResponse } from 'next/server';
import { leadFormSchema } from '@/lib/schemas';

// Redact sensitive data for logging
function redactPII(data: Record<string, unknown>): Record<string, unknown> {
  return {
    ...data,
    email: data.email ? '***@***.***' : undefined,
    phone: data.phone ? '***-***-****' : undefined,
    name: data.name ? `${String(data.name).charAt(0)}***` : undefined,
  };
}

export async function POST(request: Request) {
  try {
    // Validate Content-Type
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { success: false, message: 'Invalid content type' },
        { status: 415 }
      );
    }

    const body = await request.json();

    // Validate with Zod schema
    const validationResult = leadFormSchema.safeParse(body);
    if (!validationResult.success) {
      console.warn('Form validation failed:', validationResult.error.flatten());
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Log with redacted PII (in production, send to email/CRM)
    console.log('Form submission received:', redactPII(validationResult.data));

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Form submission error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please call us at (713) 282-5871' },
      { status: 500 }
    );
  }
}
