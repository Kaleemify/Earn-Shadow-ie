"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function AdminSettings() {
  const [adminProfile, setAdminProfile] = useState({
    name: "Admin User",
    email: "admin@taskearnpro.com",
    phone: "+1 (555) 123-4567",
  })

  const [systemSettings, setSystemSettings] = useState({
    siteName: "TaskEarn Pro",
    siteDescription: "The most trusted platform for earning money online through simple tasks and surveys.",
    supportEmail: "support@taskearnpro.com",
    minWithdrawal: "10.00",
    maxWithdrawal: "5000.00",
    withdrawalFee: "0.00",
    referralBonus: "8.00",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating admin profile:", adminProfile)
    // Handle profile update logic here
  }

  const handleSystemUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating system settings:", systemSettings)
    // Handle system settings update logic here
  }

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Changing password:", passwordData)
    // Handle password change logic here
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
                    className="flex items-center px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg"
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
              <h1 className="text-3xl font-black text-gray-900 mb-2">Settings</h1>
              <p className="text-lg text-gray-600">Manage admin profile and system settings</p>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">Admin Profile</TabsTrigger>
                <TabsTrigger value="system">System Settings</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <i className="fas fa-user-cog mr-3 text-blue-600"></i>
                      Admin Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileUpdate} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={adminProfile.name}
                            onChange={(e) => setAdminProfile({ ...adminProfile, name: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={adminProfile.email}
                            onChange={(e) => setAdminProfile({ ...adminProfile, email: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={adminProfile.phone}
                          onChange={(e) => setAdminProfile({ ...adminProfile, phone: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                        <i className="fas fa-save mr-2"></i>
                        Save Profile
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="system" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <i className="fas fa-cogs mr-3 text-green-600"></i>
                      System Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSystemUpdate} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="siteName" className="text-sm font-semibold text-gray-700">
                            Site Name
                          </Label>
                          <Input
                            id="siteName"
                            type="text"
                            value={systemSettings.siteName}
                            onChange={(e) => setSystemSettings({ ...systemSettings, siteName: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="supportEmail" className="text-sm font-semibold text-gray-700">
                            Support Email
                          </Label>
                          <Input
                            id="supportEmail"
                            type="email"
                            value={systemSettings.supportEmail}
                            onChange={(e) => setSystemSettings({ ...systemSettings, supportEmail: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="siteDescription" className="text-sm font-semibold text-gray-700">
                          Site Description
                        </Label>
                        <Textarea
                          id="siteDescription"
                          value={systemSettings.siteDescription}
                          onChange={(e) => setSystemSettings({ ...systemSettings, siteDescription: e.target.value })}
                          className="mt-1 h-24"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                          <Label htmlFor="minWithdrawal" className="text-sm font-semibold text-gray-700">
                            Min Withdrawal ($)
                          </Label>
                          <Input
                            id="minWithdrawal"
                            type="number"
                            value={systemSettings.minWithdrawal}
                            onChange={(e) => setSystemSettings({ ...systemSettings, minWithdrawal: e.target.value })}
                            className="mt-1"
                            min="0"
                            step="0.01"
                          />
                        </div>
                        <div>
                          <Label htmlFor="maxWithdrawal" className="text-sm font-semibold text-gray-700">
                            Max Withdrawal ($)
                          </Label>
                          <Input
                            id="maxWithdrawal"
                            type="number"
                            value={systemSettings.maxWithdrawal}
                            onChange={(e) => setSystemSettings({ ...systemSettings, maxWithdrawal: e.target.value })}
                            className="mt-1"
                            min="0"
                            step="0.01"
                          />
                        </div>
                        <div>
                          <Label htmlFor="withdrawalFee" className="text-sm font-semibold text-gray-700">
                            Withdrawal Fee ($)
                          </Label>
                          <Input
                            id="withdrawalFee"
                            type="number"
                            value={systemSettings.withdrawalFee}
                            onChange={(e) => setSystemSettings({ ...systemSettings, withdrawalFee: e.target.value })}
                            className="mt-1"
                            min="0"
                            step="0.01"
                          />
                        </div>
                        <div>
                          <Label htmlFor="referralBonus" className="text-sm font-semibold text-gray-700">
                            Referral Bonus (%)
                          </Label>
                          <Input
                            id="referralBonus"
                            type="number"
                            value={systemSettings.referralBonus}
                            onChange={(e) => setSystemSettings({ ...systemSettings, referralBonus: e.target.value })}
                            className="mt-1"
                            min="0"
                            max="100"
                            step="0.01"
                          />
                        </div>
                      </div>
                      <Button type="submit" className="bg-green-600 hover:bg-green-700">
                        <i className="fas fa-save mr-2"></i>
                        Save Settings
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <i className="fas fa-shield-alt mr-3 text-red-600"></i>
                      Change Password
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePasswordChange} className="space-y-6">
                      <div>
                        <Label htmlFor="currentPassword" className="text-sm font-semibold text-gray-700">
                          Current Password
                        </Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="newPassword" className="text-sm font-semibold text-gray-700">
                            New Password
                          </Label>
                          <Input
                            id="newPassword"
                            type="password"
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
                            Confirm New Password
                          </Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">Password Requirements</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• At least 8 characters long</li>
                          <li>• Include uppercase and lowercase letters</li>
                          <li>• Include at least one number</li>
                          <li>• Include at least one special character</li>
                        </ul>
                      </div>
                      <Button type="submit" className="bg-red-600 hover:bg-red-700">
                        <i className="fas fa-key mr-2"></i>
                        Update Password
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <i className="fas fa-history mr-3 text-purple-600"></i>
                      Login Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          ip: "192.168.1.100",
                          location: "New York, US",
                          time: "2 hours ago",
                          device: "Chrome on Windows",
                        },
                        { ip: "10.0.0.50", location: "Los Angeles, US", time: "1 day ago", device: "Safari on macOS" },
                        { ip: "172.16.0.25", location: "Chicago, US", time: "3 days ago", device: "Firefox on Linux" },
                      ].map((login, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-semibold text-gray-900">{login.location}</p>
                            <p className="text-sm text-gray-600">
                              {login.device} • {login.ip}
                            </p>
                          </div>
                          <div className="text-sm text-gray-500">{login.time}</div>
                        </div>
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
