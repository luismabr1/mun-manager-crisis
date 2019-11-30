
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

      <style>{`
            .Bicameral__face{
                width: 90%;
                position: relative; 
              }
              
              .div-img{
                  display: inline; 
                  margin-left: auto;
                  margin-right: auto; 
              }
              
              .img{
                  -webkit-border-radius: 10px;
                  -moz-border-radius: 10px;
                  border-radius: 10px;
/*                   display:block; */
                  width: 90%;   
                  margin-left: auto;
                  margin-right: auto;
                  transform:scale(1);
                  -ms-transform:scale(1); 
                  -moz-transform:scale(1); 
                  -webkit-transform:scale(1); 
                  -o-transform:scale(1); 
                  -webkit-transition: all 500ms ease-in-out;
                  -moz-transition: all 500ms ease-in-out; 
                  -ms-transition: all 500ms ease-in-out; 
                  -o-transition: all 500ms ease-in-out;       
              }     
              
              .div-img > .title{
                  font-family: 'Open Sans';
                  padding-top: 100px;
/*                   display:block; */
                  text-align: center;
                  width: 100%;   
                  font-size: 40px;
                  transform:translate(0px);
                  -webkit-transition: all 500ms ease-in-out;
                  -moz-transition: all 500ms ease-in-out;
                  -ms-transition: all 500ms ease-in-out;
                  -o-transition: all 500ms ease-in-out;
                  opacity: 0;
                  transition: transfom opacity 1.5s;
              }
              
              .img:hover{
                      transform:scale(0.8);
                      -ms-transform:scale(0.8); 
                      -moz-transform:scale(0.8); 
                      -webkit-transform:scale(0.8);  
                      -o-transform:scale(0.8);
              }
              .div-img:hover >.title:hover{
                  transform:translate(0px,-20px);
                  opacity: 1;
                  
                  }
              
      `}</style>
        </div>
      );
    }
  }
  
  
  
  
  export default CommitteesList;