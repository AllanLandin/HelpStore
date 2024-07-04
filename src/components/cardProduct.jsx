function cardProduct({ product }) {
  return (
    <>
      <div className="p-3 bg-purple-500 rounded">
        <h2>{product.title}</h2>
        <p>{product.price}</p>
      </div>
    </>
  );
}

export default cardProduct;
