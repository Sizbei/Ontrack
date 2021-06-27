import error from '../res/images/Bigger icons/404.png'
import './styles/PageNotFound.css'

const PageNotFound = () => {
    return (
      <div class = "pnf-error">
          <div ><img src={error} alt="Error"/></div>
          <div class = "pnf-text">This is not the web page you were looking for!😢 </div>
      </div>
    );
  };
  
  export default PageNotFound;
  