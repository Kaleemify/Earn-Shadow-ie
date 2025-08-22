"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AdminDashboard() {
  const [stats] = useState({
    totalUsers: 15247,
    totalEarnings: 2547832.45,
    pendingWithdrawals: 45632.18,
    tasksSubmitted: 8934,
  })

  const recentActivity = [
    {
      id: 1,
      type: "signup",
      user: "Sarah Johnson",
      action: "New user registration",
      time: "2 minutes ago",
      icon: "fas fa-user-plus",
      color: "green",
    },
    {
      id: 2,
      type: "task",
      user: "Mike Chen",
      action: "Submitted task: Product Review Survey",
      time: "5 minutes ago",
      icon: "fas fa-tasks",
      color: "blue",
    },
    {
      id: 3,
      type: "withdrawal",
      user: "Emma Davis",
      action: "Requested withdrawal: $150.00",
      time: "12 minutes ago",
      icon: "fas fa-money-bill-wave",
      color: "purple",
    },
    {
      id: 4,
      type: "signup",
      user: "John Smith",
      action: "New user registration",
      time: "18 minutes ago",
      icon: "fas fa-user-plus",
      color: "green",
    },
    {
      id: 5,
      type: "task",
      user: "Lisa Wang",
      action: "Completed task: Data Entry",
      time: "25 minutes ago",
      icon: "fas fa-check-circle",
      color: "green",
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
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">Admin Panel</span>
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
                    className="flex items-center px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg"
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
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
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
          <div className="lg:col-span-4 space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-3xl font-black text-gray-900 mb-2">Dashboard Overview</h1>
              <p className="text-lg text-gray-600">Monitor your platform's performance and user activity</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Users</p>
                      <p className="text-3xl font-black text-blue-600">{stats.totalUsers.toLocaleString()}</p>
                      <p className="text-sm text-green-600 mt-1">
                        <i className="fas fa-arrow-up mr-1"></i>
                        +12.5% from last month
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-users text-blue-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Earnings</p>
                      <p className="text-3xl font-black text-green-600">${stats.totalEarnings.toLocaleString()}</p>
                      <p className="text-sm text-green-600 mt-1">
                        <i className="fas fa-arrow-up mr-1"></i>
                        +8.2% from last month
                      </p>
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
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Pending Withdrawals</p>
                      <p className="text-3xl font-black text-orange-600">
                        ${stats.pendingWithdrawals.toLocaleString()}
                      </p>
                      <p className="text-sm text-orange-600 mt-1">
                        <i className="fas fa-clock mr-1"></i>
                        23 requests pending
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-hourglass-half text-orange-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Tasks Submitted</p>
                      <p className="text-3xl font-black text-purple-600">{stats.tasksSubmitted.toLocaleString()}</p>
                      <p className="text-sm text-green-600 mt-1">
                        <i className="fas fa-arrow-up mr-1"></i>
                        +15.3% from last month
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-tasks text-purple-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <i className="fas fa-activity mr-3 text-blue-600"></i>
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div
                        className={`w-10 h-10 bg-${activity.color}-100 rounded-full flex items-center justify-center`}
                      >
                        <i className={`${activity.icon} text-${activity.color}-600`}></i>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{activity.user}</p>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                      </div>
                      <div className="text-sm text-gray-500">{activity.time}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    View All Activity
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-user-plus text-blue-600 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Manage Users</h3>
                  <p className="text-sm text-gray-600 mb-4">View, approve, or block user accounts</p>
                  <Link href="/admin/users">
                    <Button className="bg-blue-600 hover:bg-blue-700">Go to Users</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-plus-circle text-green-600 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Add New Task</h3>
                  <p className="text-sm text-gray-600 mb-4">Create new tasks for users to complete</p>
                  <Link href="/admin/tasks">
                    <Button className="bg-green-600 hover:bg-green-700">Add Task</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check-circle text-purple-600 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Process Withdrawals</h3>
                  <p className="text-sm text-gray-600 mb-4">Review and approve pending withdrawals</p>
                  <Link href="/admin/withdrawals">
                    <Button className="bg-purple-600 hover:bg-purple-700">View Withdrawals</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
