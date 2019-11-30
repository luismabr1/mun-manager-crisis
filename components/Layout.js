import Navbar from './Navbar';
import confLogo from '../static/LOGO-MOVENU-BLANCO.png';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Navbar />
      <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>


      {props.children}

  <style jsx>{`
    .Badges{
      width: 100%;
    }

      .Badges__hero {
        width: 100%;
        padding: 2rem 0;
        background: url('../static/stars.svg'), #1B1B25;
        background-repeat: repeat;
        margin-bottom: 1rem;
        padding: 15px;
      }
      
      .Badges__hero>.Badges__container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .Badges__container {
        width: 100%;
        height: auto;
        text-align: center;
        margin: 0;
      }  
      
      
      .Badges__list__container>.form-group{
        display: inline-block;
        width: 50%;
        padding: 10px;
      }
      
      
      .Badges_conf-logo {
        margin-bottom: 2rem;
        width: 260px;
      }
      
      .Badges__buttons a {
        padding: 10px 10px 10px 10px; 
        width: 33%;
        text-decoration: none;
      }
      
      
      .Badges__buttons_two {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
      }
  `}</style>
    </React.Fragment>
  );
}

export default Layout;