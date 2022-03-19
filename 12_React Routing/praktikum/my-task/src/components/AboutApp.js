import './Index.css';
import {Link} from "react-router-dom";

function AboutApp() {
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
        <h1>About The App</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
    </div>
    </>
  );
}

export default AboutApp;
