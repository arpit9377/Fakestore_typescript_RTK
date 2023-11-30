
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById, selectSelectedProduct } from '../Redux/ProductSlice';
import {  AppDispatch } from '../Redux/Store';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const selectedProduct = useSelector(selectSelectedProduct);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='heading'>Product Details</div>
      <div className="product-detail-container">
        <h2 className="product-detail-title">{selectedProduct.title}</h2>
        <img src={selectedProduct.image} alt={selectedProduct.title} className="product-detail-image" />
        <p className="product-detail-description">{selectedProduct.description}</p>
        <p className="product-detail-price">Price: ${selectedProduct.price}</p>
      </div>
    </>
  );
};

export default ProductDetail;
