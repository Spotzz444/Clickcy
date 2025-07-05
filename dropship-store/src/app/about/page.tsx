import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { CheckCircleIcon, TruckIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'About Us - DropShip Store',
  description: 'Learn more about DropShip Store, our mission, values, and commitment to providing you with the best shopping experience.',
}

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircleIcon,
      title: 'Quality Guarantee',
      description: 'We carefully select every product to ensure the highest quality standards for our customers.'
    },
    {
      icon: TruckIcon,
      title: 'Fast Shipping',
      description: 'Quick and reliable delivery worldwide with real-time tracking for all your orders.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure Shopping',
      description: 'Your privacy and security are our top priority with SSL encryption and secure payments.'
    },
    {
      icon: HeartIcon,
      title: 'Customer First',
      description: 'Our dedicated customer service team is here to help you 24/7 with any questions or concerns.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'With over 10 years in e-commerce, Sarah leads our vision to make quality products accessible to everyone.'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Mike ensures our supply chain runs smoothly and that every order reaches customers quickly and safely.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Experience Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Emily is dedicated to making sure every customer has an amazing shopping experience with us.'
    }
  ]

  return (
    <main>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About DropShip Store
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                We&apos;re passionate about bringing you the best products from around the world, 
                with a commitment to quality, affordability, and exceptional customer service.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L1440 120L1440 0C1440 0 1200 80 720 80C240 80 0 0 0 0L0 120Z" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2020, DropShip Store started with a simple mission: to make 
                    high-quality products accessible to everyone, anywhere in the world. What 
                    began as a small online store has grown into a trusted destination for 
                    millions of customers.
                  </p>
                  <p>
                    We believe that great products shouldn&apos;t come with great price tags. 
                    That&apos;s why we work directly with manufacturers and suppliers to bring 
                    you the best deals on everything from electronics to home essentials.
                  </p>
                  <p>
                    Today, we&apos;re proud to serve customers in over 50 countries, with a 
                    growing catalog of thousands of products and a team dedicated to your 
                    satisfaction.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                  alt="Our team working together"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we serve our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate people behind DropShip Store who work hard to bring you the best shopping experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              &quot;To democratize access to quality products by connecting customers worldwide 
              with the best manufacturers, while providing an exceptional shopping experience 
              that exceeds expectations every time.&quot;
            </p>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}