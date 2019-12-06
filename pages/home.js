
import Layout from '../components/Layout';
import Committees from './committees';
import api from './api/api';


const Home = (props) => {


    return ( 
        <Layout>

            <Committees />

            <style jsx global>{`
                body {
                    margin: 0;
                    overflow:hidden;
                    font-family: system-ui;
                }
            `}</style>
        </Layout>

     );
}


 
export default Home;