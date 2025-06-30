import React from 'react';
import { Heart, ShoppingCart, Trash2, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Wishlist: React.FC = () => {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const { items: wishlistItems, removeFromWishlist } = useWishlist();

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-8">Save items you love to your wishlist and shop them later.</p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
          <p className="text-gray-600">{wishlistItems.length} items</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                >
                  <Heart className="w-5 h-5 text-error-500 fill-current" />
                </button>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white px-3 py-1 rounded-md">
                      <span className="text-gray-800 font-semibold">Out of Stock</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-600 font-medium">{product.brand}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-800">
                      ₹{product.price}
                    </span>
                    {product.mrp > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.mrp}
                      </span>
                    )}
                  </div>
                  {product.mrp > product.price && (
                    <span className="text-sm text-success-600 font-medium">
                      {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center ${
                      product.inStock
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="p-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;