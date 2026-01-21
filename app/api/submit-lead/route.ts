import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the submission (in production, send to email/CRM)
    console.log('Form submission received:', body);
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please call us at (713) 282-5871' },
      { status: 500 }
    );
  }
}
