"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function TasksManagement() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    reward: "",
    difficulty: "",
    category: "",
    visibility: "",
    estimatedTime: "",
  })

  const existingTasks = [
    {
      id: 1,
      title: "Product Review Survey",
      description: "Complete a 10-minute survey about consumer electronics",
      reward: 15.5,
      difficulty: "Easy",
      category: "Survey",
      visibility: "Basic",
      status: "active",
      completions: 234,
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      title: "Data Entry Task",
      description: "Enter customer information from scanned documents",
      reward: 25.0,
      difficulty: "Medium",
      category: "Data Entry",
      visibility: "Pro",
      status: "active",
      completions: 156,
      createdAt: "2024-01-12",
    },
    {
      id: 3,
      title: "Website Content Review",
      description: "Review and categorize website content for accuracy",
      reward: 20.0,
      difficulty: "Easy",
      category: "Content Review",
      visibility: "Premium",
      status: "paused",
      completions: 89,
      createdAt: "2024-01-10",
    },
    {
      id: 4,
      title: "Audio Transcription",
      description: "Transcribe 10-minute audio recording to text",
      reward: 45.0,
      difficulty: "Hard",
      category: "Transcription",
      visibility: "Premium",
      status: "active",
      completions: 67,
      createdAt: "2024-01-08",
    },
  ]

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating task:", newTask)
    // Handle task creation logic here
  }

  const handleTaskAction = (taskId: number, action: string) => {
    console.log(`${action} task ${taskId}`)
    // Handle task action logic here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/admin" className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-shield-alt text-white text-xl"></i>
                </div>
                <span className="ml-3 text-2xl font-bold text-gray-900">Admin Panel</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button variant="ghost" size="sm" className="p-2">
                  <i className="fas fa-bell text-gray-600 text-lg"></i>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    7
                  </span>
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-user-shield text-blue-600"></i>
                </div>
                <span className="text-sm font-semibold text-gray-700">Admin User</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <nav className="space-y-2">
                  <Link
                    href="/admin"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-chart-bar mr-3"></i>
                    Dashboard
                  </Link>
                  <Link
                    href="/admin/users"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-users mr-3"></i>
                    Users
                  </Link>
                  <Link
                    href="/admin/tasks"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg"
                  >
                    <i className="fas fa-tasks mr-3"></i>
                    Tasks
                  </Link>
                  <Link
                    href="/admin/withdrawals"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-money-bill-wave mr-3"></i>
                    Withdrawals
                  </Link>
                  <Link
                    href="/admin/plans"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-crown mr-3"></i>
                    Plans
                  </Link>
                  <Link
                    href="/admin/settings"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-cog mr-3"></i>
                    Settings
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
          <div className="lg:col-span-4">
            <div className="mb-8">
              <h1 className="text-3xl font-black text-gray-900 mb-2">Task Management</h1>
              <p className="text-lg text-gray-600">Create, edit, and manage tasks for users</p>
            </div>

            <Tabs defaultValue="create" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="create">Add New Task</TabsTrigger>
                <TabsTrigger value="manage">Manage Tasks</TabsTrigger>
              </TabsList>

              <TabsContent value="create" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <i className="fas fa-plus-circle mr-3 text-green-600"></i>
                      Create New Task
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCreateTask} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="title" className="text-sm font-semibold text-gray-700">
                            Task Title
                          </Label>
                          <Input
                            id="title"
                            type="text"
                            placeholder="Enter task title"
                            value={newTask.title}
                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="reward" className="text-sm font-semibold text-gray-700">
                            Reward Amount ($)
                          </Label>
                          <Input
                            id="reward"
                            type="number"
                            placeholder="0.00"
                            value={newTask.reward}
                            onChange={(e) => setNewTask({ ...newTask, reward: e.target.value })}
                            className="mt-1"
                            min="0"
                            step="0.01"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="description" className="text-sm font-semibold text-gray-700">
                          Task Description
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Provide detailed instructions for the task..."
                          value={newTask.description}
                          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                          className="mt-1 h-32"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <Label htmlFor="difficulty" className="text-sm font-semibold text-gray-700">
                            Difficulty Level
                          </Label>
                          <Select
                            value={newTask.difficulty}
                            onValueChange={(value) => setNewTask({ ...newTask, difficulty: value })}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Easy">Easy</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="Hard">Hard</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="category" className="text-sm font-semibold text-gray-700">
                            Category
                          </Label>
                          <Select
                            value={newTask.category}
                            onValueChange={(value) => setNewTask({ ...newTask, category: value })}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Survey">Survey</SelectItem>
                              <SelectItem value="Data Entry">Data Entry</SelectItem>
                              <SelectItem value="Content Review">Content Review</SelectItem>
                              <SelectItem value="Transcription">Transcription</SelectItem>
                              <SelectItem value="Testing">Testing</SelectItem>
                              <SelectItem value="Research">Research</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="visibility" className="text-sm font-semibold text-gray-700">
                            Visibility
                          </Label>
                          <Select
                            value={newTask.visibility}
                            onValueChange={(value) => setNewTask({ ...newTask, visibility: value })}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select visibility" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Basic">Basic Plan</SelectItem>
                              <SelectItem value="Pro">Pro Plan</SelectItem>
                              <SelectItem value="Premium">Premium Plan</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="estimatedTime" className="text-sm font-semibold text-gray-700">
                          Estimated Time
                        </Label>
                        <Input
                          id="estimatedTime"
                          type="text"
                          placeholder="e.g., 15 min, 1 hour"
                          value={newTask.estimatedTime}
                          onChange={(e) => setNewTask({ ...newTask, estimatedTime: e.target.value })}
                          className="mt-1"
                          required
                        />
                      </div>

                      <Button type="submit" className="bg-green-600 hover:bg-green-700">
                        <i className="fas fa-plus mr-2"></i>
                        Create Task
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="manage" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <i className="fas fa-list mr-3 text-blue-600"></i>
                      Existing Tasks ({existingTasks.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-4 p-6">
                      {existingTasks.map((task) => (
                        <Card
                          key={task.id}
                          className="border border-gray-200 hover:shadow-md transition-shadow duration-300"
                        >
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-lg font-bold text-gray-900">{task.title}</h3>
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
                                  <Badge variant={task.status === "active" ? "default" : "secondary"}>
                                    {task.status}
                                  </Badge>
                                </div>
                                <p className="text-gray-600 mb-3">{task.description}</p>
                                <div className="flex items-center space-x-6 text-sm text-gray-500">
                                  <span>
                                    Reward:{" "}
                                    <span className="font-semibold text-green-600">${task.reward.toFixed(2)}</span>
                                  </span>
                                  <span>
                                    Completions: <span className="font-semibold">{task.completions}</span>
                                  </span>
                                  <span>
                                    Visibility: <span className="font-semibold">{task.visibility}</span>
                                  </span>
                                  <span>Created: {task.createdAt}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-3">
                              <Button size="sm" variant="outline" onClick={() => handleTaskAction(task.id, "edit")}>
                                <i className="fas fa-edit mr-2"></i>
                                Edit
                              </Button>
                              {task.status === "active" ? (
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  onClick={() => handleTaskAction(task.id, "pause")}
                                >
                                  <i className="fas fa-pause mr-2"></i>
                                  Pause
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => handleTaskAction(task.id, "activate")}
                                >
                                  <i className="fas fa-play mr-2"></i>
                                  Activate
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleTaskAction(task.id, "delete")}
                              >
                                <i className="fas fa-trash mr-2"></i>
                                Delete
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
