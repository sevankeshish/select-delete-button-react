import "./navBar-styles.scss";

export const NavBar = (props) => {
  return (
    <header className="navBar">
      <h2>fronthooks.com shopping</h2>
      <span>{props.totalItems}</span>
    </header>
  );
};
