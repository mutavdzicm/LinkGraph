import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabProvider from '../context/TabContext';

function MyApp({Component, pageProps}) {
  return (
    <TabProvider>
      <Component {...pageProps} />
    </TabProvider>
  );
}

export default MyApp;
