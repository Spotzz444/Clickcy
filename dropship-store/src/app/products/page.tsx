import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductGrid from '@/components/ProductGrid'

export const metadata = {
  title: 'Products - DropShip Store',
  description: 'Browse our complete collection of amazing products at unbeatable prices',
}

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                All Products
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our complete collection of carefully selected products. 
                From electronics to home essentials, find everything you need in one place.
              </p>
            </div>
          </div>
        </div>

        <ProductGrid />
      </div>
      <Footer />
    </main>
  )
}