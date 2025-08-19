"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function PitchForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    founderName: "",
    email: "",
    phone: "",
    website: "",
    category: "",
    pitchTitle: "",
    description: "",
    teamSize: "",
    fundingStage: "",
    videoUrl: "",
    pitchDeck: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, pitchDeck: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value as string | File)
        }
      })

      const response = await fetch("/api/pitch", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          companyName: "",
          founderName: "",
          email: "",
          phone: "",
          website: "",
          category: "",
          pitchTitle: "",
          description: "",
          teamSize: "",
          fundingStage: "",
          videoUrl: "",
          pitchDeck: null,
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Submit Your Pitch</h2>

      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800">
            Thank you! Your pitch has been submitted successfully. We'll review it and get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800">There was an error submitting your pitch. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="founderName">Founder/CEO Name *</Label>
            <Input
              id="founderName"
              name="founderName"
              value={formData.founderName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
          </div>
        </div>

        <div>
          <Label htmlFor="website">Company Website</Label>
          <Input id="website" name="website" type="url" value={formData.website} onChange={handleInputChange} />
        </div>

        <div>
          <Label htmlFor="category">Category *</Label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="ai-surgery">AI-powered Surgery & Diagnostics</option>
            <option value="xr-training">XR Training & Visualization</option>
            <option value="soft-robotics">Soft Robotics & Smart Implants</option>
            <option value="sustainable-medtech">Sustainable MedTech Solutions</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <Label htmlFor="pitchTitle">Pitch Title *</Label>
          <Input id="pitchTitle" name="pitchTitle" value={formData.pitchTitle} onChange={handleInputChange} required />
        </div>

        <div>
          <Label htmlFor="description">Company Description *</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            placeholder="Describe your company, product, and the problem you're solving..."
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="teamSize">Team Size</Label>
            <Input
              id="teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleInputChange}
              placeholder="e.g., 5 people"
            />
          </div>
          <div>
            <Label htmlFor="fundingStage">Funding Stage</Label>
            <select
              id="fundingStage"
              name="fundingStage"
              value={formData.fundingStage}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select funding stage</option>
              <option value="pre-seed">Pre-seed</option>
              <option value="seed">Seed</option>
              <option value="series-a">Series A</option>
              <option value="series-b">Series B+</option>
              <option value="bootstrapped">Bootstrapped</option>
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="videoUrl">Pitch Video URL (YouTube, Vimeo, etc.)</Label>
          <Input
            id="videoUrl"
            name="videoUrl"
            type="url"
            value={formData.videoUrl}
            onChange={handleInputChange}
            placeholder="https://youtube.com/watch?v=..."
          />
          <p className="text-sm text-gray-600 mt-1">
            Upload your 2-minute pitch video to YouTube or Vimeo and paste the link here
          </p>
        </div>

        <div>
          <Label htmlFor="pitchDeck">Pitch Deck (PDF)</Label>
          <input
            id="pitchDeck"
            name="pitchDeck"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-600 mt-1">Optional: Upload your pitch deck (PDF format, max 10MB)</p>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          {isSubmitting ? "Submitting..." : "Submit Pitch"}
        </Button>
      </form>
    </div>
  )
}
