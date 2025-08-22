"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function TasksPage() {
  const [activeTab, setActiveTab] = useState("available")
  const [submissionData, setSubmissionData] = useState({
    description: "",
    file: null as File | null,
  })

  const availableTasks = [
    {
      id: 1,
      title: "Website Content Review",
      description: "Review and categorize website content for accuracy and relevance",
      reward: 20.0,
      difficulty: "Easy",
      estimatedTime: "15 min",
      category: "Content Review",
    },
    {
      id: 2,
      title: "Social Media Analysis",
      description: "Analyze social media posts and categorize sentiment (positive, negative, neutral)",
      reward: 30.0,
      difficulty: "Medium",
      estimatedTime: "25 min",
      category: "Data Analysis",
    },
    {
      id: 3,
      title: "Audio Transcription",
      description: "Transcribe 10-minute audio recording to text with proper formatting",
      reward: 45.0,
      difficulty: "Medium",
      estimatedTime: "30 min",
      category: "Transcription",
    },
    {
      id: 4,
      title: "Product Image Tagging",
      description: "Tag and categorize product images for e-commerce website",
      reward: 15.0,
      difficulty: "Easy",
      estimatedTime: "10 min",
      category: "Image Processing",
    },
    {
      id: 5,
      title: "Survey Data Entry",
      description: "Enter survey responses from handwritten forms into digital format",
      reward: 25.0,
      difficulty: "Easy",
      estimatedTime: "20 min",
      category: "Data Entry",
    },
    {
      id: 6,
      title: "App Testing & Feedback",
      description: "Test mobile app functionality and provide detailed feedback report",
      reward: 50.0,
      difficulty: "Hard",
      estimatedTime: "45 min",
      category: "Testing",
    },
  ]

  const activeTasks = [
    {
      id: 7,
      title: "Customer Review Analysis",
      description: "Analyze customer reviews and extract key insights",
      reward: 35.0,
      difficulty: "Medium",
      startedAt: "2 hours ago",
      deadline: "6 hours remaining",
      progress: 60,
    },
    {
      id: 8,
      title: "Email Template Creation",
      description: "Create professional email templates for marketing campaigns",
      reward: 40.0,
      difficulty: "Medium",
      startedAt: "1 day ago",
      deadline: "2 days remaining",
      progress: 25,
    },
  ]

  const completedTasks = [
    {
      id: 9,
      title: "Product Review Survey",
      description: "Complete a 10-minute survey about consumer electronics",
      reward: 15.5,
      completedAt: "2 hours ago",
      status: "approved",
    },
    {
      id: 10,
      title: "Data Entry Task",
      description: "Enter customer information from scanned documents",
      reward: 25.0,
      completedAt: "1 day ago",
      status: "approved",
    },
    {
      id: 11,
      title: "Website Testing",
      description: "Test website functionality and report bugs",
      reward: 30.0,
      completedAt: "3 days ago",
      status: "pending",
    },
  ]

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSubmissionData({ ...submissionData, file })
    }
  }

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle task submission logic here
    console.log("Submission data:", submissionData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-tasks text-white text-xl"></i>
                </div>
                <span className="ml-3 text-2xl font-bold text-gray-900">TaskEarn Pro</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button variant="ghost" size="sm" className="p-2">
                  <i className="fas fa-bell text-gray-600 text-lg"></i>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-blue-600"></i>
                </div>
                <span className="text-sm font-semibold text-gray-700">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <nav className="space-y-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-home mr-3"></i>
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/tasks"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg"
                  >
                    <i className="fas fa-tasks mr-3"></i>
                    My Tasks
                  </Link>
                  <Link
                    href="/dashboard/wallet"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-wallet mr-3"></i>
                    Wallet
                  </Link>
                  <Link
                    href="/dashboard/upgrade"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-arrow-up mr-3"></i>
                    Upgrade Plan
                  </Link>
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-user mr-3"></i>
                    Profile
                  </Link>
                  <button className="flex items-center px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 w-full text-left">
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    Logout
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-3xl font-black text-gray-900 mb-2">My Tasks</h1>
              <p className="text-lg text-gray-600">Manage your tasks and track your progress</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="available">Available Tasks</TabsTrigger>
                <TabsTrigger value="active">Active Tasks</TabsTrigger>
                <TabsTrigger value="completed">Completed Tasks</TabsTrigger>
              </TabsList>

              <TabsContent value="available" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {availableTasks.map((task) => (
                    <Card key={task.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex space-x-2">
                            <Badge
                              variant={
                                task.difficulty === "Easy"
                                  ? "secondary"
                                  : task.difficulty === "Medium"
                                    ? "default"
                                    : "destructive"
                              }
                            >
                              {task.difficulty}
                            </Badge>
                            <Badge variant="outline">{task.category}</Badge>
                          </div>
                          <span className="text-xl font-bold text-green-600">${task.reward.toFixed(2)}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{task.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{task.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            <i className="fas fa-clock mr-1"></i>
                            {task.estimatedTime}
                          </span>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <i className="fas fa-play mr-2"></i>
                            Start Task
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="active" className="space-y-6">
                <div className="space-y-6">
                  {activeTasks.map((task) => (
                    <Card key={task.id} className="shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{task.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>Started: {task.startedAt}</span>
                              <span>Deadline: {task.deadline}</span>
                            </div>
                          </div>
                          <span className="text-xl font-bold text-green-600">${task.reward.toFixed(2)}</span>
                        </div>
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-gray-700">Progress</span>
                            <span className="text-sm text-gray-500">{task.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${task.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <i className="fas fa-play mr-2"></i>
                            Continue
                          </Button>
                          <Button variant="outline">
                            <i className="fas fa-upload mr-2"></i>
                            Submit Work
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Task Submission Form */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">Submit Task</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmission} className="space-y-6">
                        <div>
                          <Label htmlFor="description" className="text-sm font-semibold text-gray-700">
                            Task Description / Notes
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Describe your completed work and any additional notes..."
                            value={submissionData.description}
                            onChange={(e) => setSubmissionData({ ...submissionData, description: e.target.value })}
                            className="mt-1 h-32"
                          />
                        </div>
                        <div>
                          <Label htmlFor="file" className="text-sm font-semibold text-gray-700">
                            Upload File (Optional)
                          </Label>
                          <Input
                            id="file"
                            type="file"
                            onChange={handleFileUpload}
                            className="mt-1"
                            accept=".pdf,.doc,.docx,.txt,.jpg,.png,.zip"
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG, ZIP (Max 10MB)
                          </p>
                        </div>
                        <Button type="submit" className="bg-green-600 hover:bg-green-700">
                          <i className="fas fa-check mr-2"></i>
                          Submit for Review
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="completed" className="space-y-6">
                <div className="space-y-4">
                  {completedTasks.map((task) => (
                    <Card key={task.id} className="shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{task.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>Completed: {task.completedAt}</span>
                              <Badge variant={task.status === "approved" ? "default" : "secondary"}>
                                {task.status === "approved" ? "Approved" : "Pending Review"}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xl font-bold text-green-600">${task.reward.toFixed(2)}</span>
                            {task.status === "approved" && (
                              <div className="text-sm text-green-600 mt-1">
                                <i className="fas fa-check-circle mr-1"></i>
                                Paid
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
