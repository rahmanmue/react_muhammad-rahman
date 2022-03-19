import {Link} from "react-router-dom";
import imageTodos from "../asset/imagetodos.jpeg";
import './Index.css'
function Home() {
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
                <li><Link to="/about">About</Link></li>  
            </ul>
        </nav>
    </div>

    <div className="content">
        <img src="asset/imagetodos.jpeg"/>
    </div>
    </>
  );
}

export default Home;
