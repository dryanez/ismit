"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    country: "",
    registrationType: "",
    dietaryRequirements: "",
    specialNeeds: "",
    newsletter: false,
    terms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Registration submitted:", formData)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="organization">Organization *</Label>
          <Input
            id="organization"
            value={formData.organization}
            onChange={(e) => handleInputChange("organization", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="position">Position/Title</Label>
          <Input
            id="position"
            value={formData.position}
            onChange={(e) => handleInputChange("position", e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="country">Country *</Label>
        <Input
          id="country"
          value={formData.country}
          onChange={(e) => handleInputChange("country", e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="registrationType">Registration Type *</Label>
        <Select onValueChange={(value) => handleInputChange("registrationType", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select registration type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="early-bird">Early Bird Registration</SelectItem>
            <SelectItem value="regular">Regular Registration</SelectItem>
            <SelectItem value="student">Student Registration</SelectItem>
            <SelectItem value="industry">Industry Registration</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
        <Textarea
          id="dietaryRequirements"
          value={formData.dietaryRequirements}
          onChange={(e) => handleInputChange("dietaryRequirements", e.target.value)}
          placeholder="Please specify any dietary requirements or allergies"
        />
      </div>

      <div>
        <Label htmlFor="specialNeeds">Special Accessibility Needs</Label>
        <Textarea
          id="specialNeeds"
          value={formData.specialNeeds}
          onChange={(e) => handleInputChange("specialNeeds", e.target.value)}
          placeholder="Please specify any accessibility requirements"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
          />
          <Label htmlFor="newsletter" className="text-sm">
            Subscribe to iSMIT newsletter for updates and future events
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.terms}
            onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
            required
          />
          <Label htmlFor="terms" className="text-sm">
            I agree to the Terms and Conditions and Privacy Policy *
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
        Complete Registration
      </Button>
    </form>
  )
}
