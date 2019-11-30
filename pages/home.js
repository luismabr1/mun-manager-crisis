
import Layout from '../components/Layout';
import Committees from './committees';


const Home = () => {
    return ( 
        <Layout>

            <Committees />

            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}</style>
        </Layout>

     );
}
 
export default Home;