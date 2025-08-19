import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["name", "email", "subject", "message"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    const supabase = createClient()

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: body.name,
          email: body.email,
          subject: body.subject,
          message: body.message,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save contact submission" }, { status: 500 })
    }

    return NextResponse.json(
      {
        message: "Message sent successfully",
        contactId: data.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
