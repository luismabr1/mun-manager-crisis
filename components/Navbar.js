import Link from 'next/link';

import logo from '../static/LOGO-MOVENU-BLANCO.png';

const Navbar = () => {
    return (
      <div className="Navbar">
        <div className="container-fluid">
        <div className="Navbar__brand">
          <Link href="/"><a className="Navbar__brand">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Crisis</span>
            <span className="font-weight-bold">Staff</span>
          </a></Link>

          <Link  href="/comite/unicameral">
              <span className="font-weight-light Navbar__items">
                Crisis Unicameral
              </span>
          </Link>  
          <Link  href="/comite/bicameral">
              <span className="font-weight-light Navbar__items">
                Crisis Bicameral
              </span>
          </Link>  
          <Link  href="/comite/security">
              <span className="font-weight-light Navbar__items">
                Security Council
              </span>
           </Link>  

            </div> 
        </div>

        <style>{`
            .Navbar {
                width: 100%;
                padding: 0.5rem 0;
                background-color: #1C3643;
              }
              
              .Navbar__brand {
                color: #ffffff;
                display: inline-flex;
                align-items: center;
              }
              
              .Navbar__brand:hover {
                color: #ffffff;
                text-decoration: none;
              }
              
              .Navbar__brand-logo {
                margin-right: 0.5rem;
                width: 50px;
              }
              
              .Navbar__items{
                padding-left: 30px;
                color: #ffffff;
                text-decoration: none;
              }
              
              .Navbar__items:hover {
                color: #ffffff;
                text-decoration: none;
              }
        `}</style>
      </div>
    );
  }


export default Navbar;
