import "./product-style.scss";

export const Product = (props) => {
  return (
    <div className="product-style">
      <p>product name : {props.name}</p>
      <p>product price : {props.price}</p>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};
