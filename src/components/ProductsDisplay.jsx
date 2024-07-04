import Slider from "./Slider";
function ProductsDisplay() {
  return (
    <>
      <div>
        <Slider query="celular" />
        <Slider query="computador" />
        <Slider query="televisão" />
      </div>
    </>
  );
}

export default ProductsDisplay;
