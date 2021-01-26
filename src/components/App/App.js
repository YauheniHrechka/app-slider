import React from 'react';
import './App.css';

import Slider from '../Slider/Slider';

function App() {

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
      <Slider slides={slides} />
    </div>
  );
}

export default App;
