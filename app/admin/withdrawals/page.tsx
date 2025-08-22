"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function WithdrawalsManagement() {
  const [statusFilter, setStatusFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const withdrawalRequests = [
    {
      id: 1,
      user: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      amount: 150.0,
      method: "Binance Wallet",
      walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      status: "pending",
      requestDate: "2024-01-20",
      transactionId: null,
    },
    {
      id: 2,
      user: "Mike Chen",
      email: "mike.chen@email.com",
      amount: 250.0,
      method: "PayPal",
      walletAddress: "mike.chen@paypal.com",
      status: "processing",
      requestDate: "2024-01-19",
      transactionId: "TXN789123456",
    },
    {
      id: 3,
      user: "Emma Davis",
      email: "emma.davis@email.com",
      amount: 75.0,
      method: "Binance Wallet",
      walletAddress: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
      status: "completed",
      requestDate: "2024-01-18",
      transactionId: "TXN456789123",
    },
    {
      id: 4,
      user: "John Smith",
      email: "john.smith@email.com",
      amount: 200.0,
      method: "Bank Transfer",
      walletAddress: "****1234",
      status: "pending",
      requestDate: "2024-01-17",
      transactionId: null,
    },
    {
      id: 5,
      user: "Lisa Wang",
      email: "lisa.wang@email.com",
      amount: 300.0,
      method: "Cryptocurrency",
      walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      status: "completed",
      requestDate: "2024-01-16",
      transactionId: "TXN123456789",
    },
  ]

  const handleWithdrawalAction = (withdrawalId: number, action: string) => {
    console.log(`${action} withdrawal ${withdrawalId}`)
    // Handle withdrawal action logic here
  }

  const filteredWithdrawals = withdrawalRequests.filter((withdrawal) => {
    const matchesSearch =
      withdrawal.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      withdrawal.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || withdrawal.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPending = withdrawalRequests.filter((w) => w.status === "pending").reduce((sum, w) => sum + w.amount, 0)

  const totalProcessing = withdrawalRequests
    .filter((w) => w.status === "processing")
    .reduce((sum, w) => sum + w.amount, 0)

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
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-tasks mr-3"></i>
                    Tasks
                  </Link>
                  <Link
                    href="/admin/withdrawals"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg"
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
              <h1 className="text-3xl font-black text-gray-900 mb-2">Withdrawal Management</h1>
              <p className="text-lg text-gray-600">Review and process user withdrawal requests</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Pending Requests</p>
                      <p className="text-3xl font-black text-orange-600">${totalPending.toFixed(2)}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {withdrawalRequests.filter((w) => w.status === "pending").length} requests
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-clock text-orange-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Processing</p>
                      <p className="text-3xl font-black text-blue-600">${totalProcessing.toFixed(2)}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {withdrawalRequests.filter((w) => w.status === "processing").length} in progress
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-spinner text-blue-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Completed Today</p>
                      <p className="text-3xl font-black text-green-600">$575.00</p>
                      <p className="text-sm text-gray-500 mt-1">2 completed</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-check-circle text-green-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search by user name or email..."
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
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Withdrawals Table */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <i className="fas fa-money-bill-wave mr-3 text-green-600"></i>
                  Withdrawal Requests ({filteredWithdrawals.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">User</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Wallet Address</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredWithdrawals.map((withdrawal) => (
                        <tr key={withdrawal.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-semibold text-gray-900">{withdrawal.user}</div>
                              <div className="text-sm text-gray-600">{withdrawal.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-lg font-bold text-green-600">${withdrawal.amount.toFixed(2)}</span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{withdrawal.method}</td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-mono text-gray-600 break-all">
                              {withdrawal.walletAddress}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <Badge
                              variant={
                                withdrawal.status === "completed"
                                  ? "default"
                                  : withdrawal.status === "processing"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {withdrawal.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{withdrawal.requestDate}</td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              {withdrawal.status === "pending" && (
                                <>
                                  <Button
                                    size="sm"
                                    className="bg-green-600 hover:bg-green-700"
                                    onClick={() => handleWithdrawalAction(withdrawal.id, "approve")}
                                  >
                                    Approve
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => handleWithdrawalAction(withdrawal.id, "reject")}
                                  >
                                    Reject
                                  </Button>
                                </>
                              )}
                              {withdrawal.status === "processing" && (
                                <Button
                                  size="sm"
                                  className="bg-blue-600 hover:bg-blue-700"
                                  onClick={() => handleWithdrawalAction(withdrawal.id, "mark_paid")}
                                >
                                  Mark as Paid
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleWithdrawalAction(withdrawal.id, "view")}
                              >
                                View Details
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
