import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookingCalendar } from "@/components/booking-calendar"
import { Star, MapPin, Wifi, Car, Shield, Users, Utensils, Plane, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WhiteHouseExecutivePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">WH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">White House Properties</h1>
                <p className="text-sm text-gray-600">Premium Guest Houses</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/properties/residencia" className="text-gray-700 hover:text-blue-600 transition-colors">
                Residencia
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>White House Executive</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">White House Executive</h1>
              <p className="text-gray-600 mb-2">Guest House Islamabad - Phase 3 Bahria Town</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  2078 Street 66 Phase 3, Bahria Town, Rawalpindi
                </div>
                <div className="flex items-center">
                  <Plane className="w-4 h-4 mr-1" />
                  31 km from Airport
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-600 hover:bg-green-700">
                <Star className="w-3 h-3 mr-1 fill-current" />
                8.5/10 Very Good
              </Badge>
              <span className="text-sm text-gray-600">(46 reviews)</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Image
                  src="/images/white-house-executive.png"
                  alt="White House Executive - Premium Guest House Room"
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="White House Executive - Bathroom"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="White House Executive - Balcony View"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Property Description */}
            <Card>
              <CardHeader>
                <CardTitle>About White House Executive</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Welcome to White House Executive, our premium guest house located in the heart of Phase 3, Bahria
                  Town. This exceptional property offers spacious rooms with private bathrooms, balconies, and terraces,
                  perfect for both business travelers and families.
                </p>
                <p className="text-gray-700">
                  Our dedicated host Zeeshan ensures every guest receives personalized attention and timely responses to
                  all inquiries. The property features modern amenities including air conditioning, kitchenettes, work
                  desks, and free WiFi throughout.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Spacious rooms with private bathrooms</li>
                      <li>• Balconies and terraces</li>
                      <li>• Air conditioning in all rooms</li>
                      <li>• Kitchenette facilities</li>
                      <li>• Work desk for business travelers</li>
                      <li>• Free high-speed WiFi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Services</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 24-hour front desk</li>
                      <li>• Full-day security with CCTV</li>
                      <li>• Daily housekeeping</li>
                      <li>• Room service available</li>
                      <li>• Asian breakfast served in-room</li>
                      <li>• Private parking</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities & Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Shield, title: "24/7 Security", desc: "CCTV & Key Access" },
                    { icon: Wifi, title: "Free WiFi", desc: "High-speed Internet" },
                    { icon: Car, title: "Free Parking", desc: "Private Parking" },
                    { icon: Utensils, title: "Kitchenette", desc: "Basic Cooking Facilities" },
                    { icon: Users, title: "Family Rooms", desc: "Spacious Accommodations" },
                    { icon: Plane, title: "Airport Access", desc: "31 km from Airport" },
                    { icon: Star, title: "Housekeeping", desc: "Daily Cleaning" },
                    { icon: Phone, title: "Room Service", desc: "24/7 Available" },
                  ].map((amenity, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <amenity.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-sm">{amenity.title}</h4>
                      <p className="text-xs text-gray-600">{amenity.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card>
              <CardHeader>
                <CardTitle>Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Shah Faisal Mosque", distance: "26 km", type: "Religious Site" },
                    { name: "Ayūb National Park", distance: "8 km", type: "Recreation" },
                    { name: "Pakistan Army Museum", distance: "9 km", type: "Museum" },
                    { name: "Nawaz Sharif Park", distance: "14 km", type: "Park" },
                  ].map((attraction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{attraction.name}</h4>
                        <p className="text-sm text-gray-600">{attraction.type}</p>
                      </div>
                      <Badge variant="outline">{attraction.distance}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guest Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Guest Reviews</CardTitle>
                <CardDescription>What our guests say about White House Executive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    rating: 5,
                    text: "Excellent facilities, location, security, staff and rooms. Owner Mr Zeeshan very humble, educated and timely response.",
                    author: "Business Traveler",
                    date: "2 weeks ago",
                  },
                  {
                    rating: 5,
                    text: "Very clean, well furnished, all facilities available. Staff were so cooperative and friendly.",
                    author: "Family Guest",
                    date: "1 month ago",
                  },
                  {
                    rating: 4,
                    text: "Great location with excellent security arrangements. Nabeel from staff was very helpful throughout our stay.",
                    author: "Tourist",
                    date: "3 weeks ago",
                  },
                ].map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{review.date}</span>
                    </div>
                    <p className="text-gray-700 mb-2">"{review.text}"</p>
                    <p className="text-sm font-semibold text-gray-900">{review.author}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <BookingCalendar propertyName="White House Executive" pricePerNight={8500} />

            {/* Contact Host */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Host</CardTitle>
                <CardDescription>Zeeshan - Property Manager</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-transparent" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: 0330 1716287
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp: 0330 1716287
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Property Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Property Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-green-600" />
                  <span className="text-sm">8.5/10 rating from 46 reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">24/7 security with CCTV</span>
                </div>
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">31 km from Islamabad Airport</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="text-sm">Family-friendly facilities</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
