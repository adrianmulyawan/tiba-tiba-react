import React, { useEffect } from "react";

const CardProduct = (props) => {
  const { children } = props;
  useEffect(() => {
    document.title = 'Product';
  });
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card shadow">
        {/* header image */}
        {/* product desc */}
        { children }
      </div> 
    </div>
  );
};

const Header = (props) => {
  const { source } = props;
  return (
    <img src={ source } className="card-img-top img-fluid" alt="Product Image" style={{ height: '250px', objectFit: 'cover' }}/>
  );
};

const Body = (props) => {
  const { title, tags, price } = props;
  return (
    <div className="card-footer bg-gray-200 border-top border-gray-300 p-4">
      {/* product desc */}
      <div className="card-body">
        <a href="#" className="h5 text-decoration-none">
          { title }
        </a>
        <div className="d-flex mt-2">
          {
            tags.map((tag, index) => (
              <span key={ index } className="badge bg-primary me-2">{ tag }</span>
            ))
          }
        </div>
      </div>
      {/* product price */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span className="h6 mb-0 text-gray">${ price }</span> 
        <a className="btn btn-xs btn-primary" href="#">
          Add to cart
        </a>
      </div>
    </div>
  );
};

CardProduct.header = Header;
CardProduct.body = Body;

export default CardProduct;