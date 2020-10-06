import {Image, Row, Col, Card} from 'react-bootstrap';

export const renderPhotos = (photos) => {
  let rows = {};
  let counter = 1;
  photos.forEach((item, idx) => {
    rows[counter] = rows[counter] ? [...rows[counter]] : [];
    if (idx % 6 === 0 && idx !== 0) {
      counter++;
      rows[counter] = rows[counter] ? [...rows[counter]] : [];
      rows[counter].push(item);
    } else {
      rows[counter].push(item);
    }
  });

  return Object.keys(rows).map((row) => {
    return (
      <Row
        key={row}
        style={{marginBottom: 50}}
        className="show-grid"
        float="center"
      >
        {rows[row].map((item) => {
          return (
            <Col key={item.id} md={2} xs="auto">
              <Image fluid src={item.thumbnailUrl} roundedCircle />
            </Col>
          );
        })}
      </Row>
    );
  });
};

export const renderPosts = (posts) =>
  posts.map((item) => (
    <Card style={{width: '100%', marginBottom: 50}}>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.body}</Card.Text>
      </Card.Body>
    </Card>
  ));
