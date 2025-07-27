"use client"

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
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-lg">WH</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-gray-900">White House Properties</h1>
                <p className="text-xs md:text-sm text-gray-600">Premium Guest Houses</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-base font-bold text-gray-900">White House</h1>
                <p className="text-xs text-gray-600">Properties</p>
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
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:+923301716287"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  // Force the phone dialer to open
                  const phoneNumber = '+923301716287';
                  
                  // Method 1: Direct navigation
                  window.location.href = `tel:${phoneNumber}`;
                  
                  // Method 2: Fallback - create and click a link
                  setTimeout(() => {
                    const link = document.createElement('a');
                    link.href = `tel:${phoneNumber}`;
                    link.click();
                  }, 50);
                }}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-600 text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-xs md:text-sm px-2 md:px-4 py-2"
              >
                <span className="hidden md:inline">Call Us: +92 330 1716287</span>
                <span className="md:hidden">Call: +92 330 1716287</span>
              </a>
              <a 
                href="tel:+923301716287"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  // Force the phone dialer to open
                  const phoneNumber = '+923301716287';
                  
                  // Method 1: Direct navigation
                  window.location.href = `tel:${phoneNumber}`;
                  
                  // Method 2: Fallback - create and click a link
                  setTimeout(() => {
                    const link = document.createElement('a');
                    link.href = `tel:${phoneNumber}`;
                    link.click();
                  }, 50);
                }}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 text-xs md:text-sm px-2 md:px-4 py-2 min-w-fit"
              >
                <span className="hidden sm:inline">Book Now</span>
                <span className="sm:hidden">Book</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Premium Guest Houses in
            <span className="text-blue-600 block">Bahria Town, Rawalpindi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Experience luxury and comfort at our two exceptional properties. Perfect for business travelers, families,
            and tourists visiting Islamabad/Rawalpindi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <a 
              href="tel:+923301716287"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Force the phone dialer to open
                const phoneNumber = '+923301716287';
                
                // Method 1: Direct navigation
                window.location.href = `tel:${phoneNumber}`;
                
                // Method 2: Fallback - create and click a link
                setTimeout(() => {
                  const link = document.createElement('a');
                  link.href = `tel:${phoneNumber}`;
                  link.click();
                }, 50);
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 px-6 md:px-8 py-3 w-full sm:w-auto text-lg"
            >
              <Plane className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Book Your Stay
            </a>
            <Button
              size="lg"
              variant="outline"
              className="px-6 md:px-8 py-3 bg-transparent w-full sm:w-auto"
              onClick={() => {
                const section = document.getElementById('properties');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Properties
            </Button>
          </div>
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-600 px-4">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
              <span className="hidden sm:inline">31-32 km from Airport</span>
              <span className="sm:hidden">Airport</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
              24/7 Security
            </div>
            <div className="flex items-center">
              <Wifi className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
              Free WiFi
            </div>
            <div className="flex items-center">
              <Car className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
              <span className="hidden sm:inline">Free Parking</span>
              <span className="sm:hidden">Parking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Premium Properties</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Choose from our two exceptional guest houses, each offering unique amenities and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* White House Executive */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/images/white-house-executive.png"
                  alt="White House Executive - Premium Guest House Room"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-xs">
                    <Star className="w-2 h-2 md:w-3 md:h-3 mr-1 fill-current" />
                    8.5/10 Very Good
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl text-gray-900">White House Executive</CardTitle>
                <CardDescription className="text-gray-600 text-sm md:text-base">Guest House Islamabad - Phase 3 Bahria Town</CardDescription>
                <div className="flex items-center text-xs md:text-sm text-gray-500 mt-2">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  <span className="hidden sm:inline">2078 Street 66 Phase 3, Bahria Town</span>
                  <span className="sm:hidden">Phase 3, Bahria Town</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    <Badge variant="secondary" className="text-xs">Private Bathrooms</Badge>
                    <Badge variant="secondary" className="text-xs">Balconies</Badge>
                    <Badge variant="secondary" className="text-xs">Kitchenette</Badge>
                    <Badge variant="secondary" className="text-xs">Work Desk</Badge>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm">
                    <div className="flex items-center">
                      <Plane className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
                      <span className="hidden sm:inline">31 km from Airport</span>
                      <span className="sm:hidden">Airport</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
                      Family Rooms
                    </div>
                    <div className="flex items-center">
                      <Utensils className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
                      Room Service
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
                      24/7 Security
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    "Excellent facilities, location, security, staff and rooms" - Recent Guest Review
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href="tel:+923301716287"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Force the phone dialer to open
                        const phoneNumber = '+923301716287';
                        
                        // Method 1: Direct navigation
                        window.location.href = `tel:${phoneNumber}`;
                        
                        // Method 2: Fallback - create and click a link
                        setTimeout(() => {
                          const link = document.createElement('a');
                          link.href = `tel:${phoneNumber}`;
                          link.click();
                        }, 50);
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm text-white py-2 px-4 rounded-md inline-flex items-center justify-center"
                    >
                      Book Now
                    </a>
                    <Button variant="outline" className="flex-1 bg-transparent text-sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* White House Residencia */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/images/white-house-residencia.png"
                  alt="White House Residencia - Modern Guest House Room"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-xs">
                    <Star className="w-2 h-2 md:w-3 md:h-3 mr-1 fill-current" />
                    7.2/10 Good
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl text-gray-900">White House Residencia</CardTitle>
                <CardDescription className="text-gray-600 text-sm md:text-base">Recently Renovated - Phase 5 Bahria Town</CardDescription>
                <div className="flex items-center text-xs md:text-sm text-gray-500 mt-2">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  <span className="hidden sm:inline">House No 1077, Street 23, Phase 5</span>
                  <span className="sm:hidden">Phase 5, Bahria Town</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    <Badge variant="secondary" className="text-xs">6 Rooms</Badge>
                    <Badge variant="secondary" className="text-xs">Full Kitchen</Badge>
                    <Badge variant="secondary" className="text-xs">Sun Terrace</Badge>
                    <Badge variant="secondary" className="text-xs">Pet-Friendly</Badge>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm">
                    <div className="flex items-center">
                      <Plane className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
                      <span className="hidden sm:inline">32 km from Airport</span>
                      <span className="sm:hidden">Airport</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
                      Family Friendly
                    </div>
                    <div className="flex items-center">
                      <Utensils className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
                      Full Kitchen
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-blue-600" />
                      Private Check-in
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    "Very clean, well furnished, all facilities available" - Recent Guest Review
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href="tel:+923301716287"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Force the phone dialer to open
                        const phoneNumber = '+923301716287';
                        
                        // Method 1: Direct navigation
                        window.location.href = `tel:${phoneNumber}`;
                        
                        // Method 2: Fallback - create and click a link
                        setTimeout(() => {
                          const link = document.createElement('a');
                          link.href = `tel:${phoneNumber}`;
                          link.click();
                        }, 50);
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm text-white py-2 px-4 rounded-md inline-flex items-center justify-center"
                    >
                      Book Now
                    </a>
                    <Button variant="outline" className="flex-1 bg-transparent text-sm">
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
      <section id="amenities" className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Premium Amenities</h2>
            <p className="text-base md:text-lg text-gray-600">Everything you need for a comfortable stay</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
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
                className="text-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <amenity.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{amenity.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{amenity.desc}</p>
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
      <section id="contact" className="py-12 md:py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Ready to Book Your Stay?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 px-4">Contact us directly or book online for the best rates</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto px-4">
            <a 
              href="tel:+923301716287"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Force the phone dialer to open
                const phoneNumber = '+923301716287';
                
                // Method 1: Direct navigation
                window.location.href = `tel:${phoneNumber}`;
                
                // Method 2: Fallback - create and click a link
                setTimeout(() => {
                  const link = document.createElement('a');
                  link.href = `tel:${phoneNumber}`;
                  link.click();
                }, 50);
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-600 hover:bg-gray-100 flex-1 text-sm md:text-base px-6 md:px-8 py-3 text-lg"
            >
              WhatsApp Booking
            </a>
            <a 
              href="tel:+923301716287"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Force the phone dialer to open
                const phoneNumber = '+923301716287';
                
                // Method 1: Direct navigation
                window.location.href = `tel:${phoneNumber}`;
                
                // Method 2: Fallback - create and click a link
                setTimeout(() => {
                  const link = document.createElement('a');
                  link.href = `tel:${phoneNumber}`;
                  link.click();
                }, 50);
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-blue-600 flex-1 bg-transparent text-sm md:text-base px-6 md:px-8 py-3 text-lg"
            >
              Call Now
            </a>
          </div>
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto text-left px-4">
            <div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">White House Executive</h3>
              <p className="text-xs md:text-sm opacity-90">Host: Zeeshan</p>
              <p className="text-xs md:text-sm opacity-90">Phase 3, Bahria Town</p>
              <p className="text-xs md:text-sm opacity-90">Rating: 8.5/10 (46 reviews)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">White House Residencia</h3>
              <p className="text-xs md:text-sm opacity-90">Host: Talha</p>
              <p className="text-xs md:text-sm opacity-90">Phase 5, Bahria Town</p>
              <p className="text-xs md:text-sm opacity-90">Rating: 7.2/10 (51 reviews)</p>
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
