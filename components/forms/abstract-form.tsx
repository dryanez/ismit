"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface AbstractFormData {
  title: string
  authors: string
  institution: string
  email: string
  abstract: string
  category: string
  keywords: string
}

export default function AbstractForm() {
  const [formData, setFormData] = useState<AbstractFormData>({
    title: "",
    authors: "",
    institution: "",
    email: "",
    abstract: "",
    category: "",
    keywords: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (field: keyof AbstractFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/abstracts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          title: "",
          authors: "",
          institution: "",
          email: "",
          abstract: "",
          category: "",
          keywords: "",
        })
      } else {
        const errorData = await response.json()
        setSubmitStatus("error")
        setErrorMessage(errorData.error || "Failed to submit abstract")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-slate-900">Submit Your Abstract</CardTitle>
        <CardDescription>
          Submit your research abstract for consideration at iSMIT 2026. All submissions will be reviewed by our
          scientific committee.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === "success" && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Your abstract has been submitted successfully! You will receive a confirmation email shortly.
            </AlertDescription>
          </Alert>
        )}

        {submitStatus === "error" && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">{errorMessage}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Abstract Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter your abstract title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Presentation Category *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleInputChange("category", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oral">Oral Presentation</SelectItem>
                  <SelectItem value="poster">Poster Presentation</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="keynote">Keynote Proposal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="authors">Authors *</Label>
              <Input
                id="authors"
                value={formData.authors}
                onChange={(e) => handleInputChange("authors", e.target.value)}
                placeholder="First Author, Second Author, etc."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Contact Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@institution.edu"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="institution">Institution/Organization *</Label>
            <Input
              id="institution"
              value={formData.institution}
              onChange={(e) => handleInputChange("institution", e.target.value)}
              placeholder="University or Organization Name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="abstract">Abstract Text *</Label>
            <Textarea
              id="abstract"
              value={formData.abstract}
              onChange={(e) => handleInputChange("abstract", e.target.value)}
              placeholder="Enter your abstract (maximum 500 words)"
              className="min-h-[200px]"
              required
            />
            <p className="text-sm text-slate-600">
              {formData.abstract.split(" ").filter((word) => word.length > 0).length}/500 words
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords (Optional)</Label>
            <Input
              id="keywords"
              value={formData.keywords}
              onChange={(e) => handleInputChange("keywords", e.target.value)}
              placeholder="keyword1, keyword2, keyword3"
            />
            <p className="text-sm text-slate-600">Separate keywords with commas</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Submission Guidelines:</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Abstracts must be original work not previously published</li>
              <li>• Maximum 500 words for abstract text</li>
              <li>• All submissions will be peer-reviewed</li>
              <li>• Notification of acceptance will be sent by email</li>
              <li>• Deadline for submissions: March 15, 2026</li>
            </ul>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Abstract...
              </>
            ) : (
              "Submit Abstract"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
