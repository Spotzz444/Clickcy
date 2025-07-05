'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, ShoppingCartIcon, FunnelIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { formatPrice, calculateDiscountPercentage } from '@/lib/utils'

export default function ProductGrid() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  // Sample product data - in a real app, this would come from an API
  const allProducts = [
    {
      id: '1',
      name: 'Wireless Bluetooth Headphones',
      description: 'Premium quality wireless headphones with noise cancellation',
      price: 79.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 124,
      category: 'Electronics',
      featured: true,
      trending: false
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      description: 'Track your fitness goals with this advanced smartwatch',
      price: 199.99,
      originalPrice: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      rating: 4.6,
      reviewCount: 89,
      category: 'Wearables',
      featured: true,
      trending: true
    },
    {
      id: '3',
      name: 'Portable Phone Charger',
      description: 'Fast-charging portable battery pack for all devices',
      price: 29.99,
      originalPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
      rating: 4.7,
      reviewCount: 156,
      category: 'Accessories',
      featured: false,
      trending: true
    },
    {
      id: '4',
      name: 'Premium Coffee Maker',
      description: 'Brew the perfect cup every time with this smart coffee maker',
      price: 149.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1572119437660-3ca0d8b0fce2?w=400&h=400&fit=crop',
      rating: 4.9,
      reviewCount: 67,
      category: 'Home & Kitchen',
      featured: true,
      trending: false
    },
    {
      id: '5',
      name: 'Wireless Gaming Mouse',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
      rating: 4.7,
      reviewCount: 98,
      category: 'Electronics',
      description: 'High-precision gaming mouse with customizable buttons',
      featured: false,
      trending: true
    },
    {
      id: '6',
      name: 'LED Desk Lamp',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      rating: 4.5,
      reviewCount: 76,
      category: 'Home & Kitchen',
      description: 'Adjustable LED desk lamp with multiple brightness levels',
      featured: false,
      trending: false
    },
    {
      id: '7',
      name: 'Bluetooth Speaker',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 142,
      category: 'Electronics',
      description: 'Portable Bluetooth speaker with premium sound quality',
      featured: false,
      trending: true
    },
    {
      id: '8',
      name: 'Yoga Mat',
      price: 24.99,
      originalPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
      rating: 4.6,
      reviewCount: 203,
      category: 'Sports & Fitness',
      description: 'Non-slip yoga mat for all your workout needs',
      featured: false,
      trending: false
    }
  ]

  const categories = ['all', 'Electronics', 'Wearables', 'Accessories', 'Home & Kitchen', 'Sports & Fitness']

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return 0 // Would sort by creation date in real app
        default: // featured
          return b.featured ? 1 : -1
      }
    })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        {/* Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FunnelIcon className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        {/* Filters */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <span className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {allProducts.length} products
            </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.originalPrice && (
                  <div className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                    {calculateDiscountPercentage(product.originalPrice, product.price)}% OFF
                  </div>
                )}
                {product.featured && (
                  <div className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-bold">
                    FEATURED
                  </div>
                )}
                {product.trending && (
                  <div className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                    TRENDING
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="mb-2">
                <span className="text-xs text-blue-600 font-medium">{product.category}</span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-sm">
                  <ShoppingCartIcon className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
                <Link
                  href={`/products/${product.id}`}
                  className="bg-gray-200 text-gray-800 py-2 px-3 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <MagnifyingGlassIcon className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria to find what you&apos;re looking for.
          </p>
        </div>
      )}
    </div>
  )
}