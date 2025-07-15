"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarDays, Phone } from "lucide-react"

interface BookingCalendarProps {
  propertyName: string
  pricePerNight: number
}

export function BookingCalendar({ propertyName, pricePerNight }: BookingCalendarProps) {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState("2")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
    return 0
  }

  const totalPrice = calculateNights() * pricePerNight

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-blue-600" />
          Book {propertyName}
        </CardTitle>
        <CardDescription>PKR {pricePerNight.toLocaleString()} per night</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-xs font-semibold text-gray-600 uppercase">Check-in</Label>
            <div className="border rounded-md p-2 text-sm">
              {checkIn ? checkIn.toLocaleDateString() : "Select date"}
            </div>
          </div>
          <div>
            <Label className="text-xs font-semibold text-gray-600 uppercase">Check-out</Label>
            <div className="border rounded-md p-2 text-sm">
              {checkOut ? checkOut.toLocaleDateString() : "Select date"}
            </div>
          </div>
        </div>

        <Calendar
          mode="range"
          selected={{ from: checkIn, to: checkOut }}
          onSelect={(range) => {
            setCheckIn(range?.from)
            setCheckOut(range?.to)
          }}
          className="rounded-md border"
          disabled={(date) => date < new Date()}
        />

        <div>
          <Label htmlFor="guests">Guests</Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5">5+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="0330 1716287" />
          </div>
        </div>

        {checkIn && checkOut && (
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>
                PKR {pricePerNight.toLocaleString()} × {calculateNights()} nights
              </span>
              <span>PKR {totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>PKR {totalPrice.toLocaleString()}</span>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Button className="w-full bg-blue-600 hover:bg-blue-700" disabled={!checkIn || !checkOut || !name || !phone}>
            Reserve Now
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            <Phone className="w-4 h-4 mr-2" />
            WhatsApp: 0330 1716287
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          You won't be charged yet. We'll contact you to confirm your booking.
        </p>
      </CardContent>
    </Card>
  )
}
