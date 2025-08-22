"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      plan: "Pro",
      status: "active",
      joinDate: "2024-01-15",
      totalEarnings: 1250.75,
      tasksCompleted: 45,
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      plan: "Premium",
      status: "active",
      joinDate: "2024-01-10",
      totalEarnings: 2150.3,
      tasksCompleted: 78,
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma.davis@email.com",
      plan: "Basic",
      status: "pending",
      joinDate: "2024-01-20",
      totalEarnings: 450.25,
      tasksCompleted: 12,
    },
    {
      id: 4,
      name: "John Smith",
      email: "john.smith@email.com",
      plan: "Pro",
      status: "blocked",
      joinDate: "2024-01-08",
      totalEarnings: 850.6,
      tasksCompleted: 23,
    },
    {
      id: 5,
      name: "Lisa Wang",
      email: "lisa.wang@email.com",
      plan: "Premium",
      status: "active",
      joinDate: "2024-01-12",
      totalEarnings: 3250.9,
      tasksCompleted: 125,
    },
  ]

  const handleUserAction = (userId: number, action: string) => {
    console.log(`${action} user ${userId}`)
    // Handle user action logic here
  }

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    return matchesSearch && matchesStatus
  })

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
                    className="flex items-center px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg"
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
            <div>
              <h1 className="text-3xl font-black text-gray-900 mb-2">User Management</h1>
              <p className="text-lg text-gray-600">Manage user accounts, approvals, and permissions</p>
            </div>

            {/* Filters */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search users by name or email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="w-full md:w-48">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="blocked">Blocked</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Users Table */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <i className="fas fa-users mr-3 text-blue-600"></i>
                  Users ({filteredUsers.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">User</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Plan</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Join Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Earnings</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tasks</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-semibold text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-600">{user.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge
                              variant={
                                user.plan === "Premium" ? "default" : user.plan === "Pro" ? "secondary" : "outline"
                              }
                            >
                              {user.plan}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <Badge
                              variant={
                                user.status === "active"
                                  ? "default"
                                  : user.status === "pending"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {user.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{user.joinDate}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-green-600">
                            ${user.totalEarnings.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{user.tasksCompleted}</td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              {user.status === "pending" && (
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => handleUserAction(user.id, "approve")}
                                >
                                  Approve
                                </Button>
                              )}
                              {user.status === "active" && (
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleUserAction(user.id, "block")}
                                >
                                  Block
                                </Button>
                              )}
                              {user.status === "blocked" && (
                                <Button
                                  size="sm"
                                  className="bg-blue-600 hover:bg-blue-700"
                                  onClick={() => handleUserAction(user.id, "unblock")}
                                >
                                  Unblock
                                </Button>
                              )}
                              <Button size="sm" variant="outline" onClick={() => handleUserAction(user.id, "view")}>
                                View
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
