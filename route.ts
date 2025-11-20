import { NextResponse } from "next/server";
import ZAI from 'z-ai-web-dev-sdk';

export async function GET() {
  return NextResponse.json({ 
    message: "MA Transform Lab API",
    status: "operational",
    version: "1.0.0"
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, type } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Process with AI if needed
    
    // For demo purposes, we'll just log and return success
    console.log("Contact form submission:", { name, email, message, type });

    // Optional: Use ZAI to process the inquiry
    if (type === 'consultation') {
      try {
        const zai = await ZAI.create();
        const response = await zai.chat.completions.create({
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant for MA Transform Lab. Analyze this consultation request and provide a brief summary.'
            },
            {
              role: 'user',
              content: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            }
          ],
        });
        
        console.log("AI Analysis:", response.choices[0]?.message?.content);
      } catch (error) {
        console.error("AI processing failed:", error);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry. We'll contact you within 24 hours.",
      consultationId: Math.random().toString(36).substr(2, 9)
    });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}