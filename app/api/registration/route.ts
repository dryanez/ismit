import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email", "registrationType"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    const supabase = createClient()

    const { data, error } = await supabase
      .from("registrations")
      .insert([
        {
          first_name: body.firstName,
          last_name: body.lastName,
          email: body.email,
          phone: body.phone || null,
          organization: body.organization || null,
          position: body.position || null,
          registration_type: body.registrationType,
          dietary_requirements: body.dietaryRequirements || null,
          accessibility_needs: body.accessibilityNeeds || null,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      if (error.code === "23505") {
        // Unique constraint violation
        return NextResponse.json({ error: "Email already registered" }, { status: 409 })
      }
      return NextResponse.json({ error: "Failed to save registration" }, { status: 500 })
    }

    return NextResponse.json(
      {
        message: "Registration submitted successfully",
        registrationId: data.id,
        data: data,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}
