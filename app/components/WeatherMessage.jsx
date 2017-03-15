var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>Dabar mieste {location} yra {temp} laipsniai</h3>
  )
};

module.exports = WeatherMessage;
