var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Keletas pavyzdziu!</p>
    <ol>
      <li>
        <Link to='/?location=Kaunas'>Kaunas</Link>
      </li>
      <li>
        <Link to='/?location=London'>London</Link>
      </li>
    </ol>
    </div>
  )
};

module.exports = Examples;
