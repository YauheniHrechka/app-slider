import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Slider from '../Slider/Slider';

const App = ({ startIndexSlide }) => {

  const [slides, setSlides] = React.useState([]);

  const updateItems = (items) => {

    let finalItems = [
      items[items.length - 1],
      ...items,
      items[0]
    ];
    setSlides(finalItems);
  }

  React.useEffect(() => {

    fetch('http://localhost:3000/db.json')
      .then(response => response.json())
      .then(response => updateItems(response.items));

  }, []);

  return (
    <div className="app">
      {slides.length &&
        <Slider
          slides={slides}
          startIndexSlide={startIndexSlide + 1}
        />
      }
    </div>
  );
}

App.propTypes = {
  startIndexSlide: PropTypes.number
}

App.defaultProps = {
  startIndexSlide: 0
}

export default App;