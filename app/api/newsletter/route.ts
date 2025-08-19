import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const supabase = createClient()

    const { data, error } = await supabase
      .from("newsletter_subscriptions")
      .insert([
        {
          email: body.email,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      if (error.code === "23505") {
        // Unique constraint violation
        return NextResponse.json({ error: "Email already subscribed" }, { status: 409 })
      }
      return NextResponse.json({ error: "Failed to save newsletter subscription" }, { status: 500 })
    }

    return NextResponse.json(
      {
        message: "Successfully subscribed to newsletter",
        email: data.email,
        subscriptionId: data.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}
