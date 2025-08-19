import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const pitchData = {
      company_name: formData.get("companyName") as string,
      founder_name: formData.get("founderName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      website: formData.get("website") as string,
      category: formData.get("category") as string,
      pitch_title: formData.get("pitchTitle") as string,
      description: formData.get("description") as string,
      team_size: formData.get("teamSize") as string,
      funding_stage: formData.get("fundingStage") as string,
      video_url: formData.get("videoUrl") as string,
      created_at: new Date().toISOString(),
    }

    const supabase = createClient()
    const { data, error } = await supabase.from("pitch_submissions").insert([pitchData])

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to submit pitch" }, { status: 500 })
    }

    return NextResponse.json({ message: "Pitch submitted successfully", data }, { status: 200 })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
