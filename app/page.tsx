"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navbarBlur, setNavbarBlur] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBlur(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          navbarBlur ? "bg-white/95 backdrop-blur-xl border-b border-black/10" : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-tasks text-white text-xl"></i>
                  </div>
                  <span className="ml-3 text-2xl font-bold text-gray-900">TaskEarn Pro</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-gray-900 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
                >
                  Reviews
                </a>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
                >
                  FAQ
                </a>
                <Link
                  href="/auth"
                  className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-colors duration-300"
                >
                  Login
                </Link>
                <Link href="/auth">
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:hidden">
              <button className="text-gray-600 hover:text-gray-900 p-2 rounded-lg" onClick={toggleMobileMenu}>
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Earn Money Online by
              <br />
              <span className="text-green-300">Completing Simple Tasks</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of users who are earning extra income by completing surveys, micro-tasks, and online
              activities. Start earning today with our trusted platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/auth">
                <Button className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1">
                  <i className="fas fa-rocket mr-3"></i>Start Earning Now
                </Button>
              </Link>
              <Link href="/auth">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 bg-transparent"
                >
                  <i className="fas fa-play mr-3"></i>Purchase Plan
                </Button>
              </Link>
            </div>

            {/* Statistics Section */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 lg:p-8 text-center hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl font-black text-white mb-2">$2.5M+</div>
                    <div className="text-sm font-medium text-white/80">Total Paid Out</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 lg:p-8 text-center hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl font-black text-white mb-2">150K+</div>
                    <div className="text-sm font-medium text-white/80">Active Users</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 lg:p-8 text-center hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl font-black text-white mb-2">4.8★</div>
                    <div className="text-sm font-medium text-white/80">User Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Start earning in just three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <i className="fas fa-user-plus text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">1. Sign Up</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Create your free account in less than 2 minutes. No hidden fees or setup costs required. Get instant
                access to our task marketplace.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <i className="fas fa-tasks text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">2. Do Tasks</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Complete surveys, data entry, app testing, and other simple online tasks at your own pace. Work from
                anywhere, anytime.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <i className="fas fa-dollar-sign text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">3. Get Paid</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Receive payments directly to your PayPal, bank account, or crypto wallet. Fast, secure, and reliable
                payments guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Why Choose TaskEarn Pro?</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to start earning money online
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: "fas fa-shield-alt",
                title: "Secure & Trusted",
                description:
                  "Bank-level security with SSL encryption and verified payment systems. Your data and earnings are completely safe.",
              },
              {
                icon: "fas fa-clock",
                title: "Flexible Schedule",
                description:
                  "Work whenever you want, wherever you are. No fixed hours or commitments. Perfect for students and freelancers.",
              },
              {
                icon: "fas fa-bolt",
                title: "Instant Payments",
                description:
                  "Get paid within 24 hours of completing tasks. No waiting periods, no delays. Your money, your time.",
              },
              {
                icon: "fas fa-chart-line",
                title: "Track Earnings",
                description:
                  "Real-time dashboard to monitor your progress and earnings history. Advanced analytics to optimize your income.",
              },
              {
                icon: "fas fa-headset",
                title: "24/7 Support",
                description:
                  "Dedicated customer support team available around the clock. Get help whenever you need it.",
              },
              {
                icon: "fas fa-medal",
                title: "Rewards Program",
                description:
                  "Earn bonus points and unlock exclusive tasks with higher payouts. The more you work, the more you earn.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-400 border border-gray-100"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Trusted by Thousands</h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join our growing community of successful earners worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "$2.5M+", label: "Total Payouts" },
              { number: "150K+", label: "Active Users" },
              { number: "5M+", label: "Tasks Completed" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Choose Your Plan</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Start free and upgrade as you earn more
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Basic Plan */}
            <Card className="p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-400">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Basic</h3>
                <div className="text-5xl font-black text-gray-900 mb-8">
                  Free
                  <span className="text-xl font-normal text-gray-500">/month</span>
                </div>
                <ul className="space-y-6 mb-10">
                  {["Up to 10 tasks per day", "Basic surveys", "Weekly payouts", "Email support"].map(
                    (feature, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-4 text-lg"></i>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 rounded-xl text-lg font-bold transition-all duration-300 bg-transparent"
                >
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-400 relative border-2 border-blue-500 transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Pro</h3>
                <div className="text-5xl font-black text-gray-900 mb-8">
                  $9.99
                  <span className="text-xl font-normal text-gray-500">/month</span>
                </div>
                <ul className="space-y-6 mb-10">
                  {[
                    "Unlimited tasks",
                    "Premium surveys",
                    "Daily payouts",
                    "Priority support",
                    { text: "20% bonus earnings", highlight: true },
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-4 text-lg"></i>
                      <span
                        className={`text-lg ${typeof feature === "object" && feature.highlight ? "font-semibold text-blue-600" : ""}`}
                      >
                        {typeof feature === "string" ? feature : feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-400">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Premium</h3>
                <div className="text-5xl font-black text-gray-900 mb-8">
                  $19.99
                  <span className="text-xl font-normal text-gray-500">/month</span>
                </div>
                <ul className="space-y-6 mb-10">
                  {[
                    "Everything in Pro",
                    "Exclusive high-paying tasks",
                    "Instant withdrawals",
                    "Dedicated account manager",
                    { text: "50% bonus earnings", highlight: true, color: "purple" },
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-4 text-lg"></i>
                      <span
                        className={`text-lg ${
                          typeof feature === "object" && feature.highlight
                            ? `font-semibold ${feature.color === "purple" ? "text-purple-600" : "text-blue-600"}`
                            : ""
                        }`}
                      >
                        {typeof feature === "string" ? feature : feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 py-4 rounded-xl text-lg font-bold transition-all duration-300 bg-transparent"
                >
                  Go Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">Your Security is Our Priority</h2>
              <p className="text-xl lg:text-2xl text-gray-600 mb-12">
                We use industry-leading security measures to protect your data and earnings.
              </p>
              <div className="space-y-8">
                {[
                  {
                    icon: "fas fa-lock",
                    title: "SSL Encryption",
                    description:
                      "All data transmitted through our platform is protected with 256-bit SSL encryption, the same standard used by banks.",
                    color: "blue",
                  },
                  {
                    icon: "fas fa-shield-alt",
                    title: "Fraud Protection",
                    description:
                      "Advanced AI-powered systems monitor for fraudulent activities 24/7, ensuring a safe environment for all users.",
                    color: "green",
                  },
                  {
                    icon: "fas fa-user-shield",
                    title: "Privacy Protection",
                    description:
                      "Your personal information is never shared with third parties without your explicit consent. Full GDPR compliance.",
                    color: "purple",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg`}
                    >
                      <i className={`${item.icon} text-${item.color}-600 text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-lg text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-12 lg:p-16">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <i className="fas fa-certificate text-white text-5xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">SOC 2 Certified</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Independently audited and certified for security, availability, and confidentiality.
                </p>
                <div className="flex justify-center space-x-6">
                  {[
                    { icon: "fas fa-check-circle", color: "green" },
                    { icon: "fas fa-award", color: "blue" },
                    { icon: "fas fa-star", color: "yellow" },
                  ].map((badge, index) => (
                    <div
                      key={index}
                      className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                    >
                      <i className={`${badge.icon} text-${badge.color}-500 text-3xl`}></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">What Our Users Say</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people earning with TaskEarn Pro
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: "Sarah Johnson",
                role: "College Student",
                testimonial:
                  "I've been using TaskEarn Pro for 6 months and have earned over $2,000! It's perfect for my schedule and the tasks are actually fun to complete. Highly recommended!",
                color: "blue",
              },
              {
                name: "Mike Chen",
                role: "Freelancer",
                testimonial:
                  "The platform is incredibly user-friendly and payments are always on time. I love that I can work whenever I want and still make good money consistently.",
                color: "green",
              },
              {
                name: "Emma Davis",
                role: "Stay-at-home Mom",
                testimonial:
                  "TaskEarn Pro has been a game-changer for my family. I can earn extra income while taking care of my kids. The flexibility is absolutely amazing!",
                color: "purple",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-400 min-h-[320px] flex flex-col justify-between"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-8">
                    <div
                      className={`w-16 h-16 bg-${testimonial.color}-100 rounded-full flex items-center justify-center mr-6`}
                    >
                      <i className={`fas fa-user text-${testimonial.color}-600 text-2xl`}></i>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500 text-lg">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{testimonial.testimonial}</p>
                  <div className="flex text-yellow-400 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Promotion */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Earn On-the-Go with Our Mobile App</h2>
              <p className="text-xl lg:text-2xl text-blue-100 mb-12">
                Download our mobile app and start earning anywhere, anytime. Complete tasks during your commute, lunch
                break, or while watching TV.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Offline task completion",
                  "Push notifications for new tasks",
                  "Real-time earnings tracking",
                  "Instant withdrawal requests",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-green-300 mr-4 text-2xl"></i>
                    <span className="text-xl text-white">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl">
                  <i className="fab fa-apple mr-4 text-3xl"></i>
                  <div className="text-left">
                    <div className="text-sm">Download on the</div>
                    <div className="text-xl font-bold">App Store</div>
                  </div>
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl">
                  <i className="fab fa-google-play mr-4 text-3xl"></i>
                  <div className="text-left">
                    <div className="text-sm">Get it on</div>
                    <div className="text-xl font-bold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-80 h-96 bg-white/10 backdrop-blur-sm rounded-3xl mx-auto p-8 border border-white/20 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-mobile-alt text-6xl text-white mb-6"></i>
                      <div className="text-white font-bold text-xl">TaskEarn Pro App</div>
                      <div className="text-blue-200 text-lg">Coming Soon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl lg:text-2xl text-gray-600">
              Everything you need to know about earning with TaskEarn Pro
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-6">
            {[
              {
                question: "How much can I earn with TaskEarn Pro?",
                answer:
                  "Earnings vary based on the time you invest and tasks you complete. Our users typically earn between $200-$2,000 per month. Top earners who dedicate more time can make even more.",
              },
              {
                question: "When and how do I get paid?",
                answer:
                  "Payments are processed weekly for Basic users, daily for Pro users, and instantly for Premium users. You can withdraw to PayPal, bank account, or cryptocurrency wallet once you reach the minimum threshold of $10.",
              },
              {
                question: "What types of tasks are available?",
                answer:
                  "We offer various tasks including surveys, data entry, app testing, content moderation, transcription, and research tasks. New tasks are added daily to keep things interesting and maximize earning opportunities.",
              },
              {
                question: "Is TaskEarn Pro available worldwide?",
                answer:
                  "Yes! TaskEarn Pro is available in over 150 countries. However, task availability and payment methods may vary by location. Check our country-specific pages for detailed information.",
              },
              {
                question: "Do I need any special skills or experience?",
                answer:
                  "No special skills required! Most tasks are designed for anyone to complete. We provide clear instructions and training materials. Some higher-paying tasks may require specific skills, but there are plenty of opportunities for everyone.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl shadow-lg border-0">
                <AccordionTrigger className="px-8 py-6 text-xl font-bold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-lg text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">Ready to Start Earning?</h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of users who are already earning extra income with TaskEarn Pro. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link href="/auth">
              <Button className="bg-white text-blue-600 hover:bg-gray-50 px-12 py-5 rounded-xl text-xl font-black transition-all duration-300 shadow-2xl hover:-translate-y-1">
                <i className="fas fa-rocket mr-3"></i>Start Earning Now
              </Button>
            </Link>
            <Link href="/auth">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-5 rounded-xl text-xl font-black transition-all duration-300 bg-transparent"
              >
                <i className="fas fa-question-circle mr-3"></i>Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-tasks text-white text-xl"></i>
                </div>
                <span className="ml-4 text-2xl font-bold">TaskEarn Pro</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                The most trusted platform for earning money online through simple tasks and surveys.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "fab fa-facebook-f", href: "#" },
                  { icon: "fab fa-twitter", href: "#" },
                  { icon: "fab fa-instagram", href: "#" },
                  { icon: "fab fa-linkedin-in", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg"
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: "Platform",
                links: ["How it Works", "Task Categories", "Pricing", "Success Stories", "Referral Program"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "Community", "Status Page", "Bug Reports"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press Kit", "Terms of Service", "Privacy Policy"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-8">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 lg:mb-0 text-lg">© 2025 TaskEarn Pro. All rights reserved.</div>
            <div className="flex items-center space-x-8 text-gray-400">
              <span className="flex items-center text-lg">
                <i className="fas fa-shield-alt mr-3 text-green-400 text-xl"></i>
                SSL Secured
              </span>
              <span className="flex items-center text-lg">
                <i className="fas fa-award mr-3 text-blue-400 text-xl"></i>
                SOC 2 Certified
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-5 right-5 z-50 animate-pulse">
        <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full shadow-2xl font-bold text-lg transition-all duration-300">
          <i className="fas fa-plus mr-2"></i>Join Now
        </Button>
      </div>
    </div>
  )
}
