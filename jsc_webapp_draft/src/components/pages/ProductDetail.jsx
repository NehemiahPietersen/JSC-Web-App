import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    // In a real app, you'd fetch product data based on ID
    const product = {
        id: 1,
        name: 'Sample Product',
        price: '$299',
        image: '/assets/products/sample.jpg',
        description: 'Detailed product description here...',
        features: ['Feature 1', 'Feature 2', 'Feature 3']
    };

    return (
        <div className="product-detail">
        <div className="product-images">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
            <h1>{product.name}</h1>
            <p className="price">{product.price}</p>
            <p className="description">{product.description}</p>
            <ul className="features">
            {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
            </ul>
            <button className="cta-button">Request Service</button>
        </div>
        </div>
    );
};

export default ProductDetail;