'use client'

import Link from 'next/link'
import { ArrowRightIcon, ShoppingBagIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Amazing 
              <span className="block text-yellow-400">Products</span>
              at Unbeatable Prices
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Shop the latest trends with fast, free shipping and a 30-day money-back guarantee. 
              Your perfect product is just a click away.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link 
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors text-lg group"
              >
                Shop Now
                <ShoppingBagIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/categories"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg group"
              >
                Browse Categories
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <TruckIcon className="h-8 w-8 text-yellow-400" />
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-blue-200 text-sm">Orders over $50</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <ShieldCheckIcon className="h-8 w-8 text-yellow-400" />
                <div>
                  <div className="font-semibold">30-Day Returns</div>
                  <div className="text-blue-200 text-sm">Money back guarantee</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">24/7</span>
                </div>
                <div>
                  <div className="font-semibold">Customer Support</div>
                  <div className="text-blue-200 text-sm">Always here to help</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🛍️</div>
                <h3 className="text-2xl font-bold mb-4">Special Launch Offer</h3>
                <div className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg text-xl mb-4">
                  50% OFF
                </div>
                <p className="text-blue-100 mb-6">
                  Use code <span className="font-bold text-yellow-400">LAUNCH50</span> at checkout
                </p>
                <div className="text-sm text-blue-200">
                  Limited time offer • Valid until supplies last
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 p-3 rounded-full font-bold text-sm animate-bounce">
              NEW!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full font-bold text-sm">
              ✓ Verified
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 0C1440 0 1200 80 720 80C240 80 0 0 0 0L0 120Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}