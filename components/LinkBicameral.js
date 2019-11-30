
/* import './styles/LinkBicameral.css'; */
import FotoFBI from '../static/fbi.jpg';
import LaComision from '../static/mafia.jpg';

class CommitteesList extends React.Component {
    render() {
      return (
        <div className="Bicameral__face">
            <div className="div-img">
                <img className="img" src={FotoFBI} alt="Crisis Bicameral: FBI"></img>
                <img className="img" src={LaComision} alt="Crisis Bicameral: La comision"></img>
                <div className="title">Hola Mundo Bicameral</div>  
            </div>
        </div>
      );
    }
  }
  
  
  
  
  export default CommitteesList;