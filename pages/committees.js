import Link from 'next/link';
/* 
import './styles/Committees.css'; */
import LinkBicameral from '../components/LinkBicameral';
import LinkSecurity from '../components/LinkSecurity';
import LinkUnicameral from '../components/LinkUnicameral.js';



const Committees = () =>{
        return (

        <React.Fragment>
        
 
      <div className="Badges__container">
        <h1>Comites de Crisis Disponibles</h1> 
 
          <div className="Badges__buttons">
            <Link to="/comite/unicameral" >
                 <LinkUnicameral />
             </Link>
 
             <Link to="/comite/bicameral" >
                 <LinkBicameral />
             </Link>
 
             <Link to="/comite/security" >    
                 <LinkSecurity />
            </Link>
 
          </div>
      </div>
        <style jsx>{`
          .Badges__hero {
            width: 100%;
            padding: 2rem 0;
            background: url('../../images/stars.svg'), #1B1B25;
            background-repeat: repeat;
            margin-bottom: 1rem;
          }
          
          .Badges__hero>.Badges__container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .Badges__container {
            width: 100%;
            height: auto;
            padding: 0 20px 20px 20px;
            text-align: center;
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
          
          /* .Badges__buttons {
            margin: 50px 50px 50px 50px;
            display: grid ;
            justify-content: flex-start ;
            margin-bottom: 1rem;
          } */
          
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
        )

   }   

 
 
 export default Committees;