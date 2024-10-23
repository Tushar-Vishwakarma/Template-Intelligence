import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Search, Youtube, Layout, TrendingUp } from "lucide-react"

export default function Component() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const handleGenerateTemplate = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setSelectedTemplate("Your personalized template has been generated based on your selections. This template includes tailored strategies for your client's industry, specific talking points for your meeting type, optimized content for your product focus, and proven tactics based on historical success patterns.")
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Template Intelligence</h1>
          <p className="text-xl text-gray-600">Optimize your client interactions with AI-powered templates</p>
        </div>
        <Card className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <CardHeader className="bg-blue-600 text-white p-6">
            <CardTitle className="text-2xl font-bold">Generate Your Personalized Template</CardTitle>
            <CardDescription className="text-blue-100">Select criteria to create a tailored template for your next client meeting</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="industry" className="text-sm font-medium text-gray-700">Client Industry</label>
                <Select>
                  <SelectTrigger id="industry" className="w-full">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="meeting-type" className="text-sm font-medium text-gray-700">Meeting Type</label>
                <Select>
                  <SelectTrigger id="meeting-type" className="w-full">
                    <SelectValue placeholder="Select meeting type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first-pitch">First Pitch</SelectItem>
                    <SelectItem value="follow-up">Follow-up</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="product-focus" className="text-sm font-medium text-gray-700">Product Focus</label>
                <Select>
                  <SelectTrigger id="product-focus" className="w-full">
                    <SelectValue placeholder="Select product focus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search">Search</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="display">Display</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="success-pattern" className="text-sm font-medium text-gray-700">Historical Success Pattern</label>
                <Select>
                  <SelectTrigger id="success-pattern" className="w-full">
                    <SelectValue placeholder="Select success pattern" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-engagement">High Engagement</SelectItem>
                    <SelectItem value="quick-conversion">Quick Conversion</SelectItem>
                    <SelectItem value="long-term-value">Long-term Value</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 px-6 py-4">
            <Button 
              onClick={handleGenerateTemplate} 
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Your Personalized Template
                </>
              ) : (
                'Generate Template'
              )}
            </Button>
          </CardFooter>
        </Card>
        {selectedTemplate && (
          <Card className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-green-600 text-white p-6">
              <CardTitle className="text-2xl font-bold">Your Personalized Template</CardTitle>
              <CardDescription className="text-green-100">Tailored to your specific needs and preferences</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700">{selectedTemplate}</p>
            </CardContent>
            <CardFooter className="bg-gray-50 px-6 py-4">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Search className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">Search</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Youtube className="h-5 w-5 text-red-600" />
                    <span className="text-sm text-gray-600">YouTube</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Layout className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-gray-600">Display</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-gray-600">Success Metrics</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
