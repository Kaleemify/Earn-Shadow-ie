"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function WalletPage() {
  const [withdrawalAmount, setWithdrawalAmount] = useState("")
  const [withdrawalMethod, setWithdrawalMethod] = useState("")

  const walletData = {
    balance: 450.25,
    pendingWithdrawals: 125.0,
    totalEarnings: 1250.75,
    binanceWallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  }

  const withdrawalHistory = [
    {
      id: 1,
      amount: 200.0,
      method: "Binance Wallet",
      status: "completed",
      date: "2024-01-15",
      transactionId: "TXN123456789",
    },
    {
      id: 2,
      amount: 150.0,
      method: "PayPal",
      status: "completed",
      date: "2024-01-10",
      transactionId: "TXN987654321",
    },
    {
      id: 3,
      amount: 75.0,
      method: "Binance Wallet",
      status: "pending",
      date: "2024-01-18",
      transactionId: "TXN456789123",
    },
    {
      id: 4,
      amount: 50.0,
      method: "Bank Transfer",
      status: "processing",
      date: "2024-01-20",
      transactionId: "TXN789123456",
    },
  ]

  const handleWithdrawal = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle withdrawal logic here
    console.log("Withdrawal request:", { amount: withdrawalAmount, method: withdrawalMethod })
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
                    className="flex items-center px-4 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-tasks mr-3"></i>
                    My Tasks
                  </Link>
                  <Link
                    href="/dashboard/wallet"
                    className="flex items-center px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg"
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
            <div>
              <h1 className="text-3xl font-black text-gray-900 mb-2">Wallet</h1>
              <p className="text-lg text-gray-600">Manage your earnings and withdrawals</p>
            </div>

            {/* Wallet Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Available Balance</p>
                      <p className="text-3xl font-black text-green-600">${walletData.balance.toFixed(2)}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-wallet text-green-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Pending Withdrawals</p>
                      <p className="text-3xl font-black text-orange-600">${walletData.pendingWithdrawals.toFixed(2)}</p>
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
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Earnings</p>
                      <p className="text-3xl font-black text-blue-600">${walletData.totalEarnings.toFixed(2)}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <i className="fas fa-chart-line text-blue-600 text-xl"></i>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Withdrawal Request */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <i className="fas fa-money-bill-wave mr-3 text-green-600"></i>
                  Request Withdrawal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleWithdrawal} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="amount" className="text-sm font-semibold text-gray-700">
                        Withdrawal Amount
                      </Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(e.target.value)}
                        className="mt-1"
                        min="10"
                        max={walletData.balance}
                        step="0.01"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Minimum withdrawal: $10.00 | Available: ${walletData.balance.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="method" className="text-sm font-semibold text-gray-700">
                        Withdrawal Method
                      </Label>
                      <Select value={withdrawalMethod} onValueChange={setWithdrawalMethod}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select withdrawal method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="binance">Binance Wallet</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="crypto">Cryptocurrency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Current Binance Wallet Address</h4>
                    <p className="text-sm text-blue-700 font-mono break-all">{walletData.binanceWallet}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
                    >
                      <i className="fas fa-edit mr-2"></i>
                      Update Address
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700"
                    disabled={!withdrawalAmount || !withdrawalMethod}
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Request Withdrawal
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Withdrawal History */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <i className="fas fa-history mr-3 text-purple-600"></i>
                  Withdrawal History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {withdrawalHistory.map((withdrawal) => (
                    <div key={withdrawal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                          <i className="fas fa-arrow-up text-purple-600"></i>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">${withdrawal.amount.toFixed(2)}</p>
                          <p className="text-sm text-gray-600">{withdrawal.method}</p>
                          <p className="text-xs text-gray-500">{withdrawal.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            withdrawal.status === "completed"
                              ? "default"
                              : withdrawal.status === "pending"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {withdrawal.status}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{withdrawal.transactionId}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
