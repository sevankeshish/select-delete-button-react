import "./product-style.scss";

export const Product = (props) => {
  return (
    <div className="product-style">
      {/* <p>product name : {props.name}</p>
      <p>product price : {props.price}</p>
      <button onClick={props.onDelete}>Delete</button> */}
      <p>product name : {props.product.name}</p>
      <p>product price : {props.product.price}</p>
      <span className="value">{props.product.quantity}</span>
      <button className="increment">Increment</button>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};
