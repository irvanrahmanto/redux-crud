import "../../App.css";

const NavLayout = () => {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div style={{paddingLeft: '16px'}}>
        <h2>Top Navigation Example</h2>
        <p>Some content..</p>
      </div>
    </>
  );
};

export default NavLayout;
