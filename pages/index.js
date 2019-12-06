import movenuLogoImage from '../static/LOGO-MOVENU-ABRA-NORMAL.png';
import astronautsImage from '../static/LOGO-MOVENU-BLANCO.png';
import Head from 'next/head';
import Link from 'next/link';

const Index = () => {
    return (
        <div className="Home">
             <Head>
                 <title>Movenu 2020</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div className="container">

                <div className="container-item">
                        <img
                            src={astronautsImage}
                            alt="Astronauts"
                            className="banner"
                        /> 
                </div>

            <div className="container-item-2">
                   <img
                        src={movenuLogoImage}
                        alt="MOVENU Logo"
                    />
                        <h3>Base de Datos Crisis</h3>
                        <Link href="/home"><a className="btn btn-primary">Entrar</a></Link>
                        
                    
                </div> 
            </div> 



          <style jsx>{`
            .Home {
                width: 100%;
                min-height: calc(100vh - 60px);
                background: url('../static/stars.svg'), #1B1B25;
                background-repeat: repeat;
                color: #ffffff;
                padding: 15px;
              }

              container{
                display: grid;
                grid-gap: 20px;
                border: 1px solid black;
                grid-template-area: 'container-item' 'container-item-2';
                height: 100%;
              }
              .container-item{
                padding: 20px;
                margin-top: 20px;
                text-align: center;
              }
              .container-item img{
                   width: 50%;
              }

              @media only screen and (max-width: 1000px) {

                 .container-item{
                     padding: 20px;
                     margin-top: 40px;
                     text-align: center;
                     }
                     .container-item img{
                         width: 80%;
                     }
              }
              @media only screen and (max-width: 800px) {

                 .container-item{
                     padding: 20px;
                     margin-top: 100px;
                     text-align: center;
                     }
                     .container-item img{
                         width: 80%;
                     }
              }
              @media only screen and (max-width: 600px) {
                .container-item{
                    padding: 20px;
                    margin-top: 120px;
                    text-align: center;
                    }
                    .container-item img{
                        width: 70%;
                    }
             }
             @media only screen and (max-width: 400px) {
                .container-item{
                    padding: 20px;
                    margin-top: 120px;
                    text-align: center;
                    }
                    .container-item img{
                        width: 100%;
                    }
             }

            .container-item-2{
                padding: 20px;
                margin-top: 20px;
                text-align: center;
                grid-area: container-item-2;
              }

              .container-item-2 img{
                   width: 20%;
              }
              @media only screen and (max-width: 1000px) {

                .container-item-2{
                    padding: 20px;
                    text-align: center;
                    grid-area: container-item-2;
                  }

                  .container-item-2 img{
                       display: none;
                  }
                }
              @media only screen and (max-width: 800px) {

                .container-item-2{
                    padding: 20px;
                    margin-top: 20px;
                    text-align: center;
                    grid-area: container-item-2;
                  }

                  .container-item-2 img{
                       display: none;
                  }
                }
                @media only screen and (max-width: 600px) {

                .container-item-2{
                    padding: 20px;
                    margin-top: 20px;
                    text-align: center;
                    grid-area: container-item-2;
                  }

                  .container-item-2 img{
                       display: none;
                  }
                }


              .btn {
                display: inline-block;
                text-decoration: none;
                font-weight: 400;
                color: #212529;
                text-align: center;
                vertical-align: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                background-color: transparent;
                border: 1px solid transparent;
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                line-height: 1.5;
                border-radius: 0.25rem;
                transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
              }
              .btn-primary {
                color: #fff;
                background-color: #007bff;
                border-color: #007bff;
              }
              
              .btn-primary:hover {
                color: #fff;
                background-color: #0069d9;
                border-color: #0062cc;
              }
              
              .btn-primary:focus, .btn-primary.focus {
                box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
              }
              
              .btn-primary.disabled, .btn-primary:disabled {
                color: #fff;
                background-color: #007bff;
                border-color: #007bff;
              }
              
              .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,
              .show > .btn-primary.dropdown-toggle {
                color: #fff;
                background-color: #0062cc;
                border-color: #005cbf;
              }
              
              .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,
              .show > .btn-primary.dropdown-toggle:focus {
                box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
              }
 

          `}

          </style>

          <style jsx global>{`
           
                body{
                    margin: 0;
                    font-family: system-ui;
                    background: white;
                }

          `}

          </style>
        </div>
      );
    }
 
  export default Index;