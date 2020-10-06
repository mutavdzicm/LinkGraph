import Link from 'next/link';
import {TabContext} from '../context/TabContext';
import {useContext} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
  const {activeTab, setActiveTab} = useContext(TabContext);

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">LinkGraph</Navbar.Brand>
      <Nav
        className="mr-auto"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
      >
        <Link href="/" passHref>
          <Nav.Link eventKey="home" href="/">
            Home
          </Nav.Link>
        </Link>
        <Link href="/photos" passHref>
          <Nav.Link eventKey="photos">Photos</Nav.Link>
        </Link>
        <Link href="/blog" passHref>
          <Nav.Link eventKey="blog">Blog</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
