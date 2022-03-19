import './Index.css';
import {Link} from "react-router-dom";

function AboutAuthor() {
  return (
    <>
    <div className="wrapper">
        <input type="checkbox" id="btn" hidden/>
        <label for="btn" className="menu-btn">
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
        </label>
        <nav id="sidebar">
            <ul className="list-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/about-app">About App</Link></li> 
                <li><Link to="/about/about-author">About Author</Link></li> 
            </ul>
        </nav>
    </div>

    <div className="content">
        <h1>About The Author</h1>
        <p>This App develop by someone a self taught by web developer and technical writer</p>
    </div>
    </>
  );
}

export default AboutAuthor;
