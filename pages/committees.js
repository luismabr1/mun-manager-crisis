import Link from 'next/link';
import LinkBicameral from '../components/LinkBicameral';
import LinkSecurity from '../components/LinkSecurity';
import LinkUnicameral from '../components/LinkUnicameral.js';



const Committees = () =>{
        return (

     <React.Fragment>
       <div className="container">
          <h1>Comites disponibles</h1>
          <div className="Badges__container">
            

                  <Link ><a href="/comite/unicameral">
                      <LinkUnicameral />
                  </a>
                  </Link>
      
                  <Link ><a href="/bicameral">
                      <LinkBicameral />

                  </a>
                  </Link>
      
                  <Link><a href="/comite/security">
                      <LinkSecurity />
                    </a>    
                  </Link>
            </div>
 

        <style jsx>{`  
        
          .container h1{
            text-align: center;
          }
          .Badges__container {
            width: 100%;
            display: grid ;
            grid-template-columns: repeat(auto-fill, minmax(480px, 1fr)); 
            height: auto;
            text-align: center;
          }  
          
          
          .Badges_conf-logo {
            margin-bottom: 2rem;
            width: 260px;
          }

          
           a {
            width: 100%;
            text-decoration: none;
          }
          

        `}</style>
      </div>
       </React.Fragment> 
        )

   }   

 
 
 export default Committees;