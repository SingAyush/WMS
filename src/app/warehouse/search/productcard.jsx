const Products = ({ productName, size, productId, area }) => {
  return (
    <div className="movie mx-5" key={productId}>
      <p className="text-center">{productName}</p>
      <p className="text-center">{size}</p>
      <h3 className="text-center">{area}</h3>
    </div>
  );
};

export default Products;
