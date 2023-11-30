
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, fetchProductById, selectProducts } from '../Redux/ProductSlice';
import {  AppDispatch } from '../Redux/Store';

const Products: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductClick = async (product: any) => {
    await dispatch(fetchProductById(String(product.id)));
  };

  return (
        <div className="container mt-5">
          <h1 className="mb-4">Product List</h1>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100"> 
                  <Link to={`/product/${product.id}`} onClick={() => handleProductClick(product)}>
                    <img src={product.image} alt={product.title} className="card-img-top h-5 w-5" />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">${product.price}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Products;