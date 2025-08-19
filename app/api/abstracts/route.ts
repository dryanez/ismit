import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["title", "authors", "institution", "email", "abstract", "category"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    const supabase = createClient()

    const { data, error } = await supabase
      .from("abstract_submissions")
      .insert([
        {
          title: body.title,
          author_name: body.authors,
          author_email: body.email,
          institution: body.institution,
          abstract_text: body.abstract,
          keywords: body.keywords || null,
          presentation_type: body.category === "oral" ? "oral" : "poster",
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save abstract submission" }, { status: 500 })
    }

    return NextResponse.json(
      {
        message: "Abstract submitted successfully",
        abstractId: data.id,
        submissionDate: data.created_at,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Abstract submission error:", error)
    return NextResponse.json({ error: "Failed to submit abstract" }, { status: 500 })
  }
}
