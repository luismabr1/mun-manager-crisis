import React from 'react';
/* import './styles/LinkSecurity.css'; */
import CrisisYemen from '../static/crisisyemen.jpg';

class CommitteesList extends React.Component {
    render() {
      return (
        <div className="Security__face">
            <div className="div-img">
                <img className="img" src={CrisisYemen} alt="Crisis en Yemen"></img>
                <div className="title">Hola Mundo Bicameral</div>  
            </div>
      <style>{`
          .Security__face{
            width:100%;
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
              display:block;
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
              display:block;
              text-align: center;   
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