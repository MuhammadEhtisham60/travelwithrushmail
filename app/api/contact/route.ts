import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, destination, message } = body;

    // Validate required fields
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { error: "Please provide a valid phone or WhatsApp number." },
        { status: 400 }
      );
    }

    // Optional email validation
    if (email && typeof email === "string" && email.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Please provide a valid email address." },
          { status: 400 }
        );
      }
    }

    // TODO: Connect external notification service here.
    // Examples:
    // 1. Send via Resend / SendGrid / NodeMailer:
    //    await sendEmail({ to: "info@travelwithRushmail .com", subject: `New Inquiry from ${fullName}`, body });
    // 2. Send automated WhatsApp / Twilio / Green API alert:
    //    await sendWhatsAppNotification(`New Lead: ${fullName} (${phone}) for ${destination}`);
    // 3. Save to database (Prisma / Supabase / MongoDB).

    console.log("New Journey Inquiry received:", {
      fullName,
      phone,
      email,
      destination,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again or message via WhatsApp." },
      { status: 500 }
    );
  }
}
