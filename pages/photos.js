import Layout from '../components/Layout';
import {Container} from 'react-bootstrap';

import {renderPhotos} from '../utils/util';

function Photos({photos}) {

  return (
    <Layout>
      <Container style={{padding: 50}} fluid >{renderPhotos(photos)}</Container>
    </Layout>
  );
}

Photos.getInitialProps = async () => {
  let photosData;
  photosData = await fetch('https://jsonplaceholder.typicode.com/photos');
  photosData = await photosData.json();
  // slice the first 100 items since the API doesn't have this option
  photosData = photosData.slice(0, 100);
  return {
    photos: photosData,
  };
};
export default Photos;
