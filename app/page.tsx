import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Wifi, Car, Shield, Users, Utensils, Plane } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">WH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">White House Properties</h1>
                <p className="text-sm text-gray-600">Premium Guest Houses</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#properties" className="text-gray-700 hover:text-blue-600 transition-colors">
                Properties
              </Link>
              <Link href="#amenities" className="text-gray-700 hover:text-blue-600 transition-colors">
                Amenities
              </Link>
              <Link href="#reviews" className="text-gray-700 hover:text-blue-600 transition-colors">
                Reviews
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Book Now</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Premium Guest Houses in
            <span className="text-blue-600 block">Bahria Town, Rawalpindi</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience luxury and comfort at our two exceptional properties. Perfect for business travelers, families,
            and tourists visiting Islamabad/Rawalpindi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              <Plane className="w-5 h-5 mr-2" />
              Book Your Stay
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              View Properties
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-blue-600" />
              31-32 km from Airport
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-blue-600" />
              24/7 Security
            </div>
            <div className="flex items-center">
              <Wifi className="w-4 h-4 mr-2 text-blue-600" />
              Free WiFi
            </div>
            <div className="flex items-center">
              <Car className="w-4 h-4 mr-2 text-blue-600" />
              Free Parking
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Properties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our two exceptional guest houses, each offering unique amenities and experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* White House Executive */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/images/white-house-executive.png"
                  alt="White House Executive - Premium Guest House Room"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    8.5/10 Very Good
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">White House Executive</CardTitle>
                <CardDescription className="text-gray-600">Guest House Islamabad - Phase 3 Bahria Town</CardDescription>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  2078 Street 66 Phase 3, Bahria Town
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Private Bathrooms</Badge>
                    <Badge variant="secondary">Balconies</Badge>
                    <Badge variant="secondary">Kitchenette</Badge>
                    <Badge variant="secondary">Work Desk</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Plane className="w-4 h-4 mr-2 text-blue-600" />
                      31 km from Airport
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      Family Rooms
                    </div>
                    <div className="flex items-center">
                      <Utensils className="w-4 h-4 mr-2 text-blue-600" />
                      Room Service
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-blue-600" />
                      24/7 Security
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    "Excellent facilities, location, security, staff and rooms" - Recent Guest Review
                  </p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Book Now</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* White House Residencia */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/images/white-house-residencia.png"
                  alt="White House Residencia - Modern Guest House Room"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 hover:bg-blue-700">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    7.2/10 Good
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">White House Residencia</CardTitle>
                <CardDescription className="text-gray-600">Recently Renovated - Phase 5 Bahria Town</CardDescription>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  House No 1077, Street 23, Phase 5
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">6 Rooms</Badge>
                    <Badge variant="secondary">Full Kitchen</Badge>
                    <Badge variant="secondary">Sun Terrace</Badge>
                    <Badge variant="secondary">Pet-Friendly</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Plane className="w-4 h-4 mr-2 text-blue-600" />
                      32 km from Airport
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      Family Friendly
                    </div>
                    <div className="flex items-center">
                      <Utensils className="w-4 h-4 mr-2 text-blue-600" />
                      Full Kitchen
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-blue-600" />
                      Private Check-in
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    "Very clean, well furnished, all facilities available" - Recent Guest Review
                  </p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Book Now</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Amenities</h2>
            <p className="text-lg text-gray-600">Everything you need for a comfortable stay</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "24/7 Security", desc: "Full-day security with CCTV" },
              { icon: Wifi, title: "Free WiFi", desc: "High-speed internet access" },
              { icon: Car, title: "Free Parking", desc: "Private parking available" },
              { icon: Utensils, title: "Kitchen Facilities", desc: "Full kitchen & kitchenette" },
              { icon: Users, title: "Family Rooms", desc: "Spacious family accommodations" },
              { icon: Plane, title: "Airport Proximity", desc: "31-32 km from airport" },
              { icon: Star, title: "Daily Housekeeping", desc: "Professional cleaning service" },
              { icon: MapPin, title: "Prime Location", desc: "Heart of Bahria Town" },
            ].map((amenity, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <amenity.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-600">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-lg text-gray-600">Real reviews from verified guests</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                rating: 5,
                text: "Excellent facilities, location, security, staff and rooms. Mr Zeeshan is very humble, educated and provides timely responses.",
                author: "Business Traveler",
                property: "White House Executive",
              },
              {
                rating: 5,
                text: "Very clean, well furnished, all facilities available. Staff were so cooperative and friendly throughout our stay.",
                author: "Family Guest",
                property: "White House Residencia",
              },
              {
                rating: 4,
                text: "Great location in Bahria Town with easy access to main attractions. The security arrangements are excellent.",
                author: "Tourist",
                property: "White House Executive",
              },
              {
                rating: 5,
                text: "Host Talha was very responsive and helpful. The recently renovated rooms are beautiful and comfortable.",
                author: "Couple",
                property: "White House Residencia",
              },
              {
                rating: 4,
                text: "Perfect for families with children's playground and family rooms. Nabeel from staff was very cooperative.",
                author: "Family with Kids",
                property: "White House Executive",
              },
              {
                rating: 5,
                text: "The full kitchen facilities made our extended stay very convenient. Great value for money in Bahria Town.",
                author: "Extended Stay Guest",
                property: "White House Residencia",
              },
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <div className="border-t pt-3">
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <p className="text-sm text-blue-600">{review.property}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us directly or book online for the best rates</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 flex-1">
              WhatsApp Booking
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 flex-1 bg-transparent"
            >
              Call Now
            </Button>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
            <div>
              <h3 className="font-semibold mb-2">White House Executive</h3>
              <p className="text-sm opacity-90">Host: Zeeshan</p>
              <p className="text-sm opacity-90">Phase 3, Bahria Town</p>
              <p className="text-sm opacity-90">Rating: 8.5/10 (46 reviews)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">White House Residencia</h3>
              <p className="text-sm opacity-90">Host: Talha</p>
              <p className="text-sm opacity-90">Phase 5, Bahria Town</p>
              <p className="text-sm opacity-90">Rating: 7.2/10 (51 reviews)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">WH</span>
                </div>
                <span className="font-bold">White House Properties</span>
              </div>
              <p className="text-gray-400 text-sm">Premium guest houses in Bahria Town, Rawalpindi, Pakistan.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Properties</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>White House Executive</li>
                <li>White House Residencia</li>
                <li>Amenities</li>
                <li>Location</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Online Booking</li>
                <li>24/7 Support</li>
                <li>Airport Transfer</li>
                <li>Housekeeping</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Bahria Town, Rawalpindi</li>
                <li>WhatsApp Booking</li>
                <li>Email Support</li>
                <li>Phone: +92 330 1716287</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 White House Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
