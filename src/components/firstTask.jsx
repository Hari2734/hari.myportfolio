import React, { useState } from "react";
// import Header from "../../components/header";
// import Footer from "../../components/footer";

const FirstTask = () => {
  const [products, setproducts] = useState({productName:"",price:"",company:""});
//   const [productName, setproductName] = useState("");
//   const [price, setprice] = useState("");
//   const [company, setCompany] = useState("");

  const [product, setProduct] = useState([]);

  const addProduct = () => {
    if (products.productName) {
      let data = {
        name: products.productName,
        price: products.price,
        company: products.company,
      };

      let newData = [...product, data];
      setProduct(newData);
      setproducts({productName:"",price:"",company:""})
    } else {
      alert("please add all values");
    }
  };
  const deleteProduct = (index) => {
    let newData = [...product];
    newData.splice(index, 1);
    setProduct(newData);
  };
  return (
    <div className="text-center">
      {/* <Header product='hi,buddy'/> */}

      <div className="text-center">
        <h1>products</h1>
        <input
          type="text"
          placeholder="product name"
          onChange={(e) => {
            setproducts({productName:e.target.value});
          }}
          value={products.productName}
        />
        <br />
        <input
          type="text"
          placeholder="price"
          onChange={(e) => {
            setproducts({price:e.target.value});
          }}
          value={products.price}
        />
        <br />
        <input
          type="text"
          placeholder="company"
          onChange={(e) => {
            setproducts({company:e.target.value});
          }}
          value={products.company}
        />
        <br />
        <button className="btn btn-primary" onClick={addProduct}>
          Add
        </button>
      </div>
      <div>
        <h1 className="text-center">buckets</h1>
        <div>
          {product.map((data, index) => {
            return (
              <div key={index}>
                <h6>productname:{data.name}</h6>
                <h6>price:{data.price}</h6>
                <h6>company:{data.company}</h6>
                {/* <button
                  onClick={(e) => {
                    deleteProduct(index);
                  }}
                >
                  delete
                </button> */}
              </div>
            );
          })}
        </div>
        {/* <Footer className="text-center" name='always welcome'/> */}
      </div>
    </div>
  );
};
export default FirstTask;
