'use client'

import Image from 'next/image'
import { StarIcon, FireIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { formatPrice } from '@/lib/utils'

export default function TrendingProducts() {
  const trendingProducts = [
    {
      id: '5',
      name: 'Wireless Gaming Mouse',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
      rating: 4.7,
      reviewCount: 98,
      trending: true
    },
    {
      id: '6',
      name: 'LED Desk Lamp',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      rating: 4.5,
      reviewCount: 76,
      trending: true
    },
    {
      id: '7',
      name: 'Bluetooth Speaker',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 142,
      trending: true
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FireIcon className="h-8 w-8 text-red-500 mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Trending Now
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These products are flying off our virtual shelves! Don&apos;t miss out on what everyone&apos;s talking about.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingProducts.map((product) => (
            <div key={product.id} className="group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <FireIcon className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-red-600 font-semibold text-sm">TRENDING</span>
              </div>
              
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
              
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({product.reviewCount})</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors">
                  <ShoppingCartIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}