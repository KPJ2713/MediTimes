import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Package } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useLanguage } from '../../context/LanguageContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { t } = useLanguage();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discountPercentage = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group ${className}`}>
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-error-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
              {discountPercentage}% OFF
            </div>
          )}
          {product.isPrescriptionRequired && (
            <div className="absolute top-2 right-2 bg-warning-500 text-white px-2 py-1 rounded-md text-xs">
              Rx
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white px-3 py-1 rounded-md">
                <span className="text-gray-800 font-semibold">Out of Stock</span>
              </div>
            </div>
          )}
          <button 
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100"
          >
            <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'text-error-500 fill-current' : 'text-gray-600'}`} />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-primary-600 font-medium">{product.brand}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-gray-600">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviewCount})</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-800">
                {t('currency.symbol')}{product.price}
              </span>
              {product.mrp > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  {t('currency.symbol')}{product.mrp}
                </span>
              )}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Package className="w-4 h-4 mr-1" />
              <span>{product.stockCount} left</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                product.inStock
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="w-4 h-4 inline mr-2" />
              {t('common.add_to_cart')}
            </button>
            <Link
              to={`/products/${product.id}`}
              className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              {t('common.view_details')}
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;