import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookingCalendar } from "@/components/booking-calendar"
import { Star, MapPin, Wifi, Car, Shield, Users, Utensils, Plane, Phone, Mail, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WhiteHouseResidenciaPage() {
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
              <Link href="/properties/executive" className="text-gray-700 hover:text-blue-600 transition-colors">
                Executive
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
            <span>White House Residencia</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">White House Residencia</h1>
              <p className="text-gray-600 mb-2">Recently Renovated Guest House - Phase 5 Bahria Town</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  House No 1077, Street 23, Phase 5, Bahria Town
                </div>
                <div className="flex items-center">
                  <Plane className="w-4 h-4 mr-1" />
                  32 km from Airport
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-600 hover:bg-blue-700">
                <Star className="w-3 h-3 mr-1 fill-current" />
                7.2/10 Good
              </Badge>
              <span className="text-sm text-gray-600">(51 reviews)</span>
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
                  src="/images/white-house-residencia.png"
                  alt="White House Residencia - Modern Guest House Room"
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="White House Residencia - Kitchen"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="White House Residencia - Sun Terrace"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Property Description */}
            <Card>
              <CardHeader>
                <CardTitle>About White House Residencia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  White House Residencia is our recently renovated guest house featuring 6 beautifully appointed rooms
                  across two floors in Phase 5, Bahria Town. This modern property offers exceptional comfort with full
                  kitchen facilities, making it perfect for extended stays.
                </p>
                <p className="text-gray-700">
                  Our responsive host Talha ensures every guest receives excellent service and support. The property
                  features a sun terrace, shared lounge, and is pet-friendly, making it ideal for families and travelers
                  seeking a home-away-from-home experience.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 6 rooms (3 per floor)</li>
                      <li>• Recently renovated interiors</li>
                      <li>• Full kitchen with appliances</li>
                      <li>• Private bathrooms in all rooms</li>
                      <li>• Sun terrace and lounge area</li>
                      <li>• Pet-friendly accommodation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Services</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Private check-in/check-out</li>
                      <li>• Daily housekeeping service</li>
                      <li>• Full-day security</li>
                      <li>• Minimarket on-site</li>
                      <li>• Hairdresser/beautician services</li>
                      <li>• Accessible parking</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Features */}
            <Card>
              <CardHeader>
                <CardTitle>Special Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <Heart className="w-6 h-6 text-green-600 mb-2" />
                    <h4 className="font-semibold text-green-800">Pet-Friendly</h4>
                    <p className="text-sm text-green-700">Bring your furry friends along - pets are welcome!</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <Utensils className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-blue-800">Full Kitchen</h4>
                    <p className="text-sm text-blue-700">Complete kitchen with refrigerator, microwave, and stovetop</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <Users className="w-6 h-6 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-purple-800">Family Rooms</h4>
                    <p className="text-sm text-purple-700">Spacious accommodations perfect for families</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <Shield className="w-6 h-6 text-orange-600 mb-2" />
                    <h4 className="font-semibold text-orange-800">Private Access</h4>
                    <p className="text-sm text-orange-700">Private check-in/check-out for your convenience</p>
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
                    { icon: Shield, title: "Full Security", desc: "24/7 Security Service" },
                    { icon: Wifi, title: "Free WiFi", desc: "High-speed Internet" },
                    { icon: Car, title: "Parking", desc: "Accessible Parking" },
                    { icon: Utensils, title: "Full Kitchen", desc: "Complete Cooking Facilities" },
                    { icon: Users, title: "Family Rooms", desc: "Spacious for Families" },
                    { icon: Heart, title: "Pet-Friendly", desc: "Pets Welcome" },
                    { icon: Star, title: "Housekeeping", desc: "Daily Cleaning" },
                    { icon: Phone, title: "Minimarket", desc: "On-site Shopping" },
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
                    { name: "Ayūb National Park", distance: "9 km", type: "Recreation" },
                    { name: "Pakistan Army Museum", distance: "11 km", type: "Museum" },
                    { name: "Pakistan Museum of Natural History", distance: "18 km", type: "Museum" },
                    { name: "Lok Virsa Museum", distance: "19 km", type: "Cultural Center" },
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
                <CardDescription>What our guests say about White House Residencia</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    rating: 5,
                    text: "Host Talha was very responsive and helpful. The recently renovated rooms are beautiful and comfortable.",
                    author: "Couple",
                    date: "1 week ago",
                  },
                  {
                    rating: 4,
                    text: "The full kitchen facilities made our extended stay very convenient. Great value for money in Bahria Town.",
                    author: "Extended Stay Guest",
                    date: "2 weeks ago",
                  },
                  {
                    rating: 4,
                    text: "Perfect for families with the spacious rooms and pet-friendly policy. Our dog loved the sun terrace!",
                    author: "Family with Pet",
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
            <BookingCalendar propertyName="White House Residencia" pricePerNight={7500} />

            {/* Contact Host */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Host</CardTitle>
                <CardDescription>Talha - Property Manager</CardDescription>
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
                  <Star className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">7.2/10 rating from 51 reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Full kitchen with all appliances</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-red-600" />
                  <span className="text-sm">Pet-friendly accommodation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">6 spacious rooms available</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
