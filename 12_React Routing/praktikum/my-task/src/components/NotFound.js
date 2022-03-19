import './Index.css';
import notFound from "../asset/notfound.svg"


function NotFound() {
  return (
      <>
        <div className='box'>
            <img src={notFound} alt="img" className='img-responsive'/>
        <h1 style={{fontSize:'50px'}}>Page Not Found !!!</h1>
        </div>
    </>
  );
}

export default NotFound;
