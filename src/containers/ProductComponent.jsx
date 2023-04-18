import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // allProducts are coming frm reducer of index.js and products are coming frm productReducer.js
  console.log(products);

  // const { id, title } = products[0];

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt="{title}" />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    // <div className="four column wide">
    //   <div className="ui link cards">
    //     <div className="card">
    //       <div className="image"></div>
    //       <div className="content">
    //         {/* <div className="header">{title}</div> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>{renderList}</>
  );
};
