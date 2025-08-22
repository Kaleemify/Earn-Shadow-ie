"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    binanceWallet: "",
    plan: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login data:", loginData)
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    console.log("Signup data:", signupData)
  }

  const plans = [
    { value: "60", label: "$60 Plan - Basic Starter" },
    { value: "149", label: "$149 Plan - Pro Earner" },
    { value: "449", label: "$449 Plan - Advanced" },
    { value: "999", label: "$999 Plan - Premium" },
    { value: "2249", label: "$2249 Plan - Elite" },
    { value: "4499", label: "$4499 Plan - Ultimate" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-tasks text-white text-xl"></i>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">TaskEarn Pro</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-300">
              <i className="fas fa-arrow-left mr-2"></i>Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Welcome Section */}
            <div className="flex flex-col justify-center space-y-8 lg:pr-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                  Welcome to <span className="text-blue-600">TaskEarn Pro</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Join thousands of users earning extra income through simple tasks and surveys. Start your journey
                  today!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-shield-alt text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Secure & Trusted</h3>
                    <p className="text-gray-600">Bank-level security for your data</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-dollar-sign text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Instant Payments</h3>
                    <p className="text-gray-600">Get paid within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-clock text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Flexible Schedule</h3>
                    <p className="text-gray-600">Work whenever you want</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ready to start earning?</h3>
                    <p className="text-blue-100">Join 150K+ active users today</p>
                  </div>
                  <div className="text-3xl">
                    <i className="fas fa-rocket"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Forms */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-1 pb-6">
                  <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setActiveTab("login")}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all duration-300 ${
                        activeTab === "login" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <i className="fas fa-sign-in-alt mr-2"></i>Login
                    </button>
                    <button
                      onClick={() => setActiveTab("signup")}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all duration-300 ${
                        activeTab === "signup"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <i className="fas fa-user-plus mr-2"></i>Sign Up
                    </button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {activeTab === "login" ? (
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="login-email" className="text-sm font-semibold text-gray-700">
                            Email Address
                          </Label>
                          <div className="relative mt-1">
                            <Input
                              id="login-email"
                              type="email"
                              placeholder="Enter your email"
                              value={loginData.email}
                              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                            <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="login-password" className="text-sm font-semibold text-gray-700">
                            Password
                          </Label>
                          <div className="relative mt-1">
                            <Input
                              id="login-password"
                              type="password"
                              placeholder="Enter your password"
                              value={loginData.password}
                              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                            <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                          </label>
                        </div>
                        <Link
                          href="#"
                          className="text-sm text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <i className="fas fa-sign-in-alt mr-2"></i>Sign In to Dashboard
                      </Button>

                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          Don't have an account?{" "}
                          <button
                            type="button"
                            onClick={() => setActiveTab("signup")}
                            className="text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300"
                          >
                            Sign up here
                          </button>
                        </p>
                      </div>
                    </form>
                  ) : (
                    <form onSubmit={handleSignup} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="signup-name" className="text-sm font-semibold text-gray-700">
                            Full Name
                          </Label>
                          <div className="relative mt-1">
                            <Input
                              id="signup-name"
                              type="text"
                              placeholder="Enter your full name"
                              value={signupData.fullName}
                              onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                            <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="signup-email" className="text-sm font-semibold text-gray-700">
                            Email Address
                          </Label>
                          <div className="relative mt-1">
                            <Input
                              id="signup-email"
                              type="email"
                              placeholder="Enter your email"
                              value={signupData.email}
                              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                            <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="signup-password" className="text-sm font-semibold text-gray-700">
                              Password
                            </Label>
                            <div className="relative mt-1">
                              <Input
                                id="signup-password"
                                type="password"
                                placeholder="Create password"
                                value={signupData.password}
                                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                                className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                required
                              />
                              <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="confirm-password" className="text-sm font-semibold text-gray-700">
                              Confirm Password
                            </Label>
                            <div className="relative mt-1">
                              <Input
                                id="confirm-password"
                                type="password"
                                placeholder="Confirm password"
                                value={signupData.confirmPassword}
                                onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                                className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                required
                              />
                              <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="binance-wallet" className="text-sm font-semibold text-gray-700">
                            Binance Wallet Address
                          </Label>
                          <div className="relative mt-1">
                            <Input
                              id="binance-wallet"
                              type="text"
                              placeholder="Enter your Binance wallet address"
                              value={signupData.binanceWallet}
                              onChange={(e) => setSignupData({ ...signupData, binanceWallet: e.target.value })}
                              className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                            <i className="fas fa-wallet absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="plan-selection" className="text-sm font-semibold text-gray-700">
                            Select Plan
                          </Label>
                          <Select
                            value={signupData.plan}
                            onValueChange={(value) => setSignupData({ ...signupData, plan: value })}
                          >
                            <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 mt-1">
                              <SelectValue placeholder="Choose your investment plan" />
                            </SelectTrigger>
                            <SelectContent>
                              {plans.map((plan) => (
                                <SelectItem key={plan.value} value={plan.value}>
                                  {plan.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                          I agree to the{" "}
                          <Link href="#" className="text-blue-600 hover:text-blue-500 font-semibold">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-blue-600 hover:text-blue-500 font-semibold">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <i className="fas fa-user-plus mr-2"></i>Create Account & Start Earning
                      </Button>

                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          Already have an account?{" "}
                          <button
                            type="button"
                            onClick={() => setActiveTab("login")}
                            className="text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300"
                          >
                            Sign in here
                          </button>
                        </p>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">Trusted by 150,000+ users worldwide</p>
                <div className="flex justify-center items-center space-x-6 text-gray-400">
                  <div className="flex items-center">
                    <i className="fas fa-shield-alt mr-2"></i>
                    <span className="text-sm">SSL Secured</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-award mr-2"></i>
                    <span className="text-sm">SOC 2 Certified</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    <span className="text-sm">4.8/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
