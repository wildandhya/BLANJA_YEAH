import React from "react";
import { useSelector } from "react-redux";

import "../../../pages/page-product/page-product.css";

import star from "../../../assets/image/Star.png";

const ProductInforamtion = () => {
  const { product } = useSelector((state) => state);
  const productDetail = product.detailProduct;

  return (
    <>
      {product.isPending ? null : (
        <div className='col-12'>
          <h2 className='product-info-title'>Informasi Produk</h2>
          <div className='product-condition'>
            <h4 style={{ fontWeight: "600" }}>Condition</h4>
      <h4 className='condition-status'>{productDetail[0].product_condition}</h4>
          </div>
          <div className='description-text'>
            <h4 style={{ fontWeight: "600" }}>Description</h4>
            <p>
             {productDetail[0].description}
            </p>
          </div>
          <div className='product-review'>
            <h2 className='product-review-title'>Product review</h2>
            <div className='row rating-review'>
              <div className='col-12 col-md-6 rating-number'>
                <p>5.0</p>
                <div>
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                  <img src={star} alt='' />
                </div>
              </div>
              <div className='col-12 col-md-6 rating-description'>
                <div className='rating-star-number'>
                  <div className='rating-star'>
                    <img src={star} alt='' />
                  </div>
                  <div className='rating-number-right'>1</div>
                </div>
                <div className='rating-progress'></div>
                <div className='rating-number-end'>4</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductInforamtion;
