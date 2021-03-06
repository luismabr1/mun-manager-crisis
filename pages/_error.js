import Layout from "../components/Layout";
import Link from 'next/link';

const Error = (props) => {
    const statusCode = props.statusCode;
    return ( 
        <Layout title="Oh no :(">
        { statusCode === 404 ?
          <div className="message">
            <h1>Esta página no existe :(</h1>
            <p><Link href="/"><a>Volver a la home</a></Link></p>
          </div>
          :
          <div className="message">
            <h1>Hubo un problema :(</h1>
            <p>Intenta nuevamente en unos segundos</p>
          </div>
         }
         <style jsx>{`
          .message {
            padding: 100px 30px;
            text-align: center;
          }
          h1 {
            margin-bottom: 2em;
          }
          a {
            color: #8756ca;
          }
         `}</style>
           <style jsx global>{`
              body {
                  margin: 0;
                  overflow-x:hidden;
                  font-family: system-ui;
              }
          `}</style>
      </Layout>
     )
   }
        Error.getInitialProps = async ({res, err}) =>{
            const statusCode = res ? res.statusCode : err ?
            err.statusCode : null;
            return {statusCode}
        }
 
export default Error;