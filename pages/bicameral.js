import 'isomorphic-unfetch';
import Link from 'next/link';
import confLogo from '../static/LOGO-MOVENU-BLANCO.png';
import BicameralList from '../components/BicameralList';
import BicameralListTwo from '../components/BicameralListTwo';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';


const Bicameral = (props) =>  {
    const {data, statusCode, loading} = props;
    if (!data) {
      return <PageLoading />;
    }

    if (statusCode!== 200) {
      return <PageError/*  error={error} */ />;
    }

    return (
    <div>
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


      <div className="Badges__container">

      <div className="Badges__list__container">
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/comite/bicameral/new" className="btn btn-primary">
              Nuevo delegado
            </Link>
            <Link to="/directive/new" className="btn btn-secondary">
             Nueva Directiva
            </Link>
          </div>

          <BicameralList badges={data}/>

          {loading && <MiniLoader />}
       </div>

       </div>
       <div className="Badges__list__container">
        <div className="Badges__container">
          <div className="Badges__buttons_two">
            <Link to="/comite/bicameral/new" className="btn btn-primary">
              Nuevo delegado
            </Link>
            <Link to="/directive/newTwo" className="btn btn-secondary">
              Nueva Directiva
            </Link>
          </div>
          <BicameralListTwo badges={data}/>

          {loading && <MiniLoader />}
        </div>
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
        padding: 0 1rem;
      }  
      
      .Badges__list__container {
        width: 50%;
        height: auto;
        max-width: 1080px;
        padding: 0 1rem;
        display: inline-table;
       
      }
      
      .Badges__list__container>.form-group{
        display: inline-block;
        width: 50%;
        padding: 10px;
      }
      /*---------------------------BOTONES---------------------------------------------*/
      
      .Badges__list__container>.Badges__buttons{
        display: inline-block;
        width: 50%;
        padding: 10px;
      }
      .Badges__list__container>.Badges__buttons_two{
        display: inline-block;
        width: 50%;
        padding: 10px;
      }
      
      /*---------------------------BOTONES---------------------------------------------*/
      
      .Badges_conf-logo {
        margin-bottom: 2rem;
        width: 260px;
      }
      
      .Badges__buttons {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 1rem;
      }
      .Badges__buttons_two {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
      }
    `}</style>
      </div>

    
    )
  }

  Bicameral.getInitialProps = async ({ res }) => {

    try {
      let req = await fetch('https://rickandmortyapi.com/api/character/');
      /* let req = await api.badges.list(); */
      let data = await req.json();

      return {data , statusCode: 200, loading: true}

    } catch (error) {
        res.statusCode = 503
        return{data: null, statusCode: 503 }
    }
}


export default Bicameral;