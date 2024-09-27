import React, { useEffect, useState } from 'react';
import '../styles/Matches.css';
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); // Check if response is ok
                }

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    if (!products.length) {
        return <div>No products found.</div>; // Handle case where no products are returned
    }

    return (
        <div>
            {products.map((product) => (
                <div key={product.userId} className="card">
                    <h3>{product.name}</h3>
                    <h5>{product.phone}</h5>
                    <h5>{product.website}</h5>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
