import "./product-style.scss";

export const Product = (props) => {
  console.log(props);
  return (
    <div className="product-style">
      {/* <p>product name : {props.name}</p>
      <p>product price : {props.price}</p>
      <button onClick={props.onDelete}>Delete</button> */}
      <p>product name : {props.items.title}</p>
      <p>product price : {props.items.price}</p>
      <span className="value">{props.items.quantity}</span>
      <input type="text" onChange={props.onChange} />
      <button onClick={props.onIncrement} className="increment">
        Increment
      </button>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};
