"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  Calendar,
  DollarSign,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
  Edit2,
  Save,
  X,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface OrderItem {
  id: string
  puppy_name: string
  puppy_breed: string
  puppy_color: string
  puppy_gender: string
  puppy_age: string
  puppy_price: number
  puppy_image: string | null
}

interface Order {
  id: string
  order_number: string
  customer_name: string
  customer_email: string
  customer_phone: string
  customer_address: string
  customer_city: string
  customer_state: string
  customer_zip: string
  payment_method: string
  total_amount: number
  status: string
  created_at: string
  order_items: OrderItem[]
}

const statuses = ["pending", "processing", "shipped", "delivered", "cancelled"]

export default function AllCustomersOrdersPage() {
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)
  const [editingOrder, setEditingOrder] = useState<string | null>(null)
  const [editingStatus, setEditingStatus] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchOrders = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/orders?admin=true", {
        cache: "no-store",
      })
      const result = await response.json()

      if (result.success) {
        setOrders(result.orders || [])
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const handleUpdateStatus = async (orderId: string, orderNumber: string) => {
    const newStatus = editingStatus[orderId]
    if (!newStatus) return

    try {
      const response = await fetch("/api/orders/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status: newStatus }),
      })

      const result = await response.json()

      if (result.success) {
        setOrders((prevOrders) =>
          prevOrders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)),
        )
        setEditingOrder(null)
        setEditingStatus({})
      }
    } catch (error) {
      console.error("Failed to update order:", error)
    }
  }

  const toggleOrderExpansion = (orderNumber: string) => {
    setExpandedOrder(expandedOrder === orderNumber ? null : orderNumber)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <main className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">Loading orders...</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold">
                All Customers Orders
              </h1>
              <p className="text-muted-foreground mt-2">Total Orders: {orders.length}</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={fetchOrders} disabled={isLoading} variant="outline">
                {isLoading ? "Loading..." : "Refresh Orders"}
              </Button>
            </div>
          </div>

          {orders.length === 0 ? (
            <Card className="border-none shadow-md text-center py-12">
              <Package className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold">No Orders Yet</h2>
              <p className="text-muted-foreground mt-2">Orders will appear here as customers place them.</p>
            </Card>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => {
                const isExpanded = expandedOrder === order.order_number
                const isEditing = editingOrder === order.id

                return (
                  <Card key={order.id} className="border-none shadow-md">
                    <CardHeader className="cursor-pointer" onClick={() => toggleOrderExpansion(order.order_number)}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <CardTitle className="text-xl">Order #{order.order_number}</CardTitle>
                            <Badge className="bg-green-600 text-white border-0 capitalize">{order.status}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(order.created_at)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4" />
                              <span className="font-semibold text-primary">
                                ${Number(order.total_amount).toFixed(2)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Package className="h-4 w-4" />
                              <span>{order.order_items.length} item(s)</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </Button>
                      </div>
                    </CardHeader>

                    {isExpanded && (
                      <CardContent className="pt-0 space-y-6">
                        {/* Order Items */}
                        <div className="border-t border-border pt-6">
                          <h3 className="font-semibold text-lg mb-4">Order Items</h3>
                          <div className="space-y-3">
                            {order.order_items.map((item) => (
                              <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                                  <img
                                    src={item.puppy_image || "/placeholder.svg"}
                                    alt={item.puppy_name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h4 className="font-semibold">{item.puppy_name}</h4>
                                      <div className="flex gap-2 items-center mt-1">
                                        <p className="text-sm text-muted-foreground">{item.puppy_breed}</p>
                                        <Badge variant="outline">{item.puppy_color}</Badge>
                                        <Badge variant="outline">{item.puppy_gender}</Badge>
                                      </div>
                                      <p className="text-xs text-muted-foreground mt-1">{item.puppy_age}</p>
                                    </div>
                                    <span className="font-semibold text-primary">
                                      ${Number(item.puppy_price).toFixed(2)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="border-t border-border mt-4 pt-4 flex justify-between items-center">
                            <span className="font-semibold text-lg">Total</span>
                            <span className="font-bold text-2xl text-primary">
                              ${Number(order.total_amount).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Customer Information */}
                        <div className="border-t border-border pt-6">
                          <h3 className="font-semibold text-lg mb-4">Customer Information</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Email</p>
                                  <p className="font-medium">{order.customer_email}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-sm text-muted-foreground">Phone</p>
                                  <p className="font-medium">{order.customer_phone}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm text-muted-foreground">Delivery Address</p>
                                <p className="font-medium">{order.customer_name}</p>
                                <p className="text-sm">
                                  {order.customer_address}
                                  <br />
                                  {order.customer_city}, {order.customer_state} {order.customer_zip}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Payment Information */}
                        <div className="border-t border-border pt-6">
                          <h3 className="font-semibold text-lg mb-4">Payment Information</h3>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-primary" />
                            <div>
                              <p className="text-sm text-muted-foreground">Payment Method</p>
                              <p className="font-medium capitalize">{order.payment_method}</p>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-border pt-6 bg-secondary/30 p-4 rounded-lg">
                          <h3 className="font-semibold text-lg mb-4">Update Order Status</h3>
                          {isEditing ? (
                            <div className="flex gap-2 items-end">
                              <div className="flex-1">
                                <Select
                                  value={editingStatus[order.id] || order.status}
                                  onValueChange={(value) => setEditingStatus({ ...editingStatus, [order.id]: value })}
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {statuses.map((status) => (
                                      <SelectItem key={status} value={status}>
                                        {status.charAt(0).toUpperCase() + status.slice(1)}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button size="sm" onClick={() => handleUpdateStatus(order.id, order.order_number)}>
                                <Save className="h-4 w-4 mr-2" />
                                Save
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => setEditingOrder(null)}>
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button
                              onClick={() => {
                                setEditingOrder(order.id)
                                setEditingStatus({ [order.id]: order.status })
                              }}
                            >
                              <Edit2 className="h-4 w-4 mr-2" />
                              Edit Status
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
