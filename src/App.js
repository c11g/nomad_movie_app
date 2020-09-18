import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    rating: 10,
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    rating: 8,
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    rating: 6,
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id: 4,
    name: "Doncasu",
    rating: 4,
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    rating: 7
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  picture: PropTypes.string,
};

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>rating: {rating}/10</h3>
      { picture && <img src={picture} alt={name} />}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      Hello
      {
        foodILike.map(({id, name, image, rating}) => <Food key={id} name={name} picture={image} rating={rating} />)
      }
    </div>
  );
}

export default App;
