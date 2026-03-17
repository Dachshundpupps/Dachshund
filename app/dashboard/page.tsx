"use client"

import { useMemo } from "react"
import { malePuppies } from "@/app/male/page"
import { femalePuppies } from "@/app/female/page"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function Dashboard() {
  const stats = useMemo(() => {
    const allPuppies = [...malePuppies, ...femalePuppies]
    const availablePuppies = allPuppies.filter((p) => p.available)
    const availableMales = malePuppies.filter((p) => p.available)
    const availableFemales = femalePuppies.filter((p) => p.available)
    const soldPuppies = allPuppies.filter((p) => !p.available)

    return {
      totalPuppies: allPuppies.length,
      availablePuppies: availablePuppies.length,
      availableMales: availableMales.length,
      availableFemales: availableFemales.length,
      soldPuppies: soldPuppies.length,
      totalRevenue: soldPuppies.reduce((sum, p) => {
        const price = Number.parseInt(p.price.replace("$", ""))
        return sum + price
      }, 0),
    }
  }, [])

  const genderData = [
    { name: "Available Males", value: stats.availableMales },
    { name: "Available Females", value: stats.availableFemales },
  ]

  const colors = ["#8b4513", "#d4a574"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Dachshund Haven Dashboard</h1>
        <p className="text-amber-700 mb-8">Manage and monitor your puppy inventory and sales</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-amber-700">Total Puppies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-900">{stats.totalPuppies}</div>
              <p className="text-xs text-amber-600 mt-1">All puppies in system</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Available Puppies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-900">{stats.availablePuppies}</div>
              <p className="text-xs text-green-600 mt-1">Ready for adoption</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Available Males</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900">{stats.availableMales}</div>
              <p className="text-xs text-blue-600 mt-1">Male puppies available</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-pink-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-pink-700">Available Females</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-pink-900">{stats.availableFemales}</div>
              <p className="text-xs text-pink-600 mt-1">Female puppies available</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-red-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-red-700">Sold</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-900">{stats.soldPuppies}</div>
              <p className="text-xs text-red-600 mt-1">Sold puppies</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white border-amber-200">
            <CardHeader>
              <CardTitle>Available by Gender</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {colors.map((color, index) => (
                      <Cell key={`cell-${index}`} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white border-amber-200">
            <CardHeader>
              <CardTitle>Availability Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={[{ name: "Status", Available: stats.availablePuppies, Sold: stats.soldPuppies }]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Available" fill="#10b981" />
                  <Bar dataKey="Sold" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <Card className="bg-white border-amber-200">
          <CardHeader>
            <CardTitle>Quick Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Available Inventory</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.availablePuppies}/{stats.totalPuppies}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {((stats.availablePuppies / stats.totalPuppies) * 100).toFixed(0)}% in stock
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Revenue (Sold)</p>
                <p className="text-2xl font-bold text-blue-600">${stats.totalRevenue.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">From {stats.soldPuppies} sold puppies</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Gender Ratio (Available)</p>
                <p className="text-2xl font-bold text-amber-600">
                  {stats.availableMales}M / {stats.availableFemales}F
                </p>
                <p className="text-xs text-gray-500 mt-1">Available males and females</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
