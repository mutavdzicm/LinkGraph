import Head from 'next/head';
import Navigation from './Navbar';

const Layout = ({children}) => {
  return (
    <div> 
      <Head>
        <title>LinkGraph</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
