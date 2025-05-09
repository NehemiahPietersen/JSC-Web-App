import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

// Dummy product data
const products = [
    {
        id: 1,
        name: 'Background Check Package',
        price: '$299',
        image: '../../assets/products/check.png',
        description: 'Comprehensive personal or professional background verification'
    },
    {
        id: 2,
        name: 'Surveillance Kit',
        price: '$499',
        image: '../../assets/products/surveillance.png',
        description: '48-hour professional surveillance with detailed report'
    },
    {
        id: 3,
        name: 'Fraud Detection Audit',
        price: '$899',
        image: '../../assets/products/fraud-alert.png',
        description: 'Financial forensic examination for businesses'
    },
    {
        id: 4,
        name: 'Asset Search',
        price: '$399',
        image: '../../assets/products/asset-search.png',
        description: 'Comprehensive search for hidden or undisclosed assets'
    },
    {
        id: 5,
        name: 'Digital Footprint Analysis',
        price: '$349',
        image: '../../assets/products/digital-footprint.png',
        description: 'Complete online presence investigation'
    },
    {
        id: 6,
        name: 'Executive Protection',
        price: '$1,200/day',
        image: '../../assets/products/executive-protection.png',
        description: 'Personal security detail services'
    }
];

const Products = () => {
    return (
        <div className="products-page">
        <section className="products-hero">
            <h1>Our Investigative Solutions</h1>
            <p>Professional tools and services for your security needs</p>
        </section>

        <section className="product-grid">
            {products.map((product) => (
            <Link 
                to={`/products/${product.id}`} 
                className="product-card" 
                key={product.id}
            >
                <div className="product-image-container">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                    onError={(e) => {
                    e.target.src = '/assets/products/placeholder.jpg'; // Fallback image
                    }}
                />
                </div>
                <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                </div>
            </Link>
            ))}
        </section>
        </div>
    );
};

export default Products;