import Layout from '../components/Layout';
import {Container} from 'react-bootstrap';

import {renderPosts} from '../utils/util';

function Blog({posts}) {

  return (
    <Layout>
      <Container style={{paddingTop: 50, width: '100%'}}>
        {renderPosts(posts)}
      </Container>
    </Layout>
  );
}
Blog.getInitialProps = async () => {
  let postsData;
  postsData = await fetch('https://jsonplaceholder.typicode.com/posts/');
  postsData = await postsData.json();
  // slice the first 100 items since the API doesn't have this option
  return {
    posts: postsData,
  };
};
export default Blog;
