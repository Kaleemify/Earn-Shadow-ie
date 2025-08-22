"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function UserDashboard() {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    plan: "Pro",
    totalEarnings: 1250.75,
    walletBalance: 450.25,
    tasksCompleted: 127,
    pendingWithdrawals: 2,
  })

  const recentTasks = [
    {
      id: 1,
      title: "Product Review Survey",
      description: "Complete a 10-minute survey about consumer electronics",
      reward: 15.5,
      status: "completed",
      completedAt: "2 hours ago",
    },
    {
      id: 2,
      title: "Data Entry Task",
      description: "Enter customer information from scanned documents",
      reward: 25.0,
      status: "completed",
      completedAt: "5 hours ago",
    },
    {
      id: 3,
      title: "App Testing",
      description: "Test new mobile app features and provide feedback",
      reward: 35.0,
      status: "in-progress",
      completedAt: null,
    },
  ]

  const availableTasks = [
    {
      id: 4,
      title: "Website Content Review",
      description: "Review and categorize website content for accuracy",
      reward: 20.0,
      difficulty: "Easy",
      estimatedTime: "15 min",
    },
    {
      id: 5,
      title: "Social Media Analysis",
      description: "Analyze social media posts and categorize sentiment",
      reward: 30.0,
      difficulty: "Medium",
      estimatedTime: "25 min",
    },
    {
      id: 6,
      title: "Audio Transcription",
      description: "Transcribe 10-minute audio recording to text",
      reward: 45.0,
      difficulty: "Medium",
      estimatedTime: "30 min",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-tasks text-white text-xl"></i>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">TaskEarn Pro</span>
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
                <span className="text-sm font-semibold text-gray-700">{user.name}</span>
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
                    className="flex items-center px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg"
                  >
                    <i className="fas fa-home mr-3"></i>
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/tasks"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
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
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-3xl font-black text-gray-900 mb-2">
                Hi {user.name.split(" ")[0]}, Ready to Earn Today?
              </h1>
              <p className="text-lg text-gray-600">Here's your earning overview and available tasks</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Current Plan</p>
                      <p className="text-2xl font-black text-gray-900">{user.plan}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-crown text-blue-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Earnings</p>
                      <p className="text-2xl font-black text-green-600">${user.totalEarnings.toFixed(2)}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-dollar-sign text-green-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Wallet Balance</p>
                      <p className="text-2xl font-black text-purple-600">${user.walletBalance.toFixed(2)}</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-wallet text-purple-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Tasks Completed</p>
                      <p className="text-2xl font-black text-orange-600">{user.tasksCompleted}</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-check-circle text-orange-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Available Tasks Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <i className="fas fa-tasks mr-3 text-blue-600"></i>
                  Available Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableTasks.map((task) => (
                    <Card
                      key={task.id}
                      className="border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <Badge variant={task.difficulty === "Easy" ? "secondary" : "default"} className="text-xs">
                            {task.difficulty}
                          </Badge>
                          <span className="text-lg font-bold text-green-600">${task.reward.toFixed(2)}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{task.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{task.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            <i className="fas fa-clock mr-1"></i>
                            {task.estimatedTime}
                          </span>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Start Task
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/dashboard/tasks">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                      View All Tasks
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* How it Works Guide */}
            <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <i className="fas fa-lightbulb mr-3 text-yellow-500"></i>
                  How it Works
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-search text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">1. Browse Tasks</h3>
                    <p className="text-sm text-gray-600">
                      Choose from available tasks that match your skills and interests
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-play text-green-600 text-2xl"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">2. Complete Work</h3>
                    <p className="text-sm text-gray-600">
                      Follow instructions and submit your completed work for review
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-money-bill-wave text-purple-600 text-2xl"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">3. Get Paid</h3>
                    <p className="text-sm text-gray-600">Receive payment directly to your wallet once approved</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Plan CTA */}
            <Card className="shadow-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Upgrade to Premium</h3>
                    <p className="text-purple-100 mb-4">
                      Unlock exclusive high-paying tasks and get 50% bonus earnings
                    </p>
                    <Button className="bg-white text-purple-600 hover:bg-gray-100">
                      <i className="fas fa-arrow-up mr-2"></i>
                      Upgrade Now
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <i className="fas fa-rocket text-6xl text-purple-200"></i>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
