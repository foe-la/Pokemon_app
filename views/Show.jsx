const React = require('react')

const myStyle = {
  color: "#purple",
  backgroundColor: "#grey"
};

    class Show extends React.Component {
       render () {
        const pokemon = this.props.pokemon;
        console.log(pokemon);

        return (
            <div style={ myStyle }>
          <h1> Gotta Catch Em All! </h1>
          <h2>{ pokemon.name }</h2>
          <img src={ pokemon.img + ".jpg" } alt="Pokemon IMG" />
          <a href='/pokemon'>back</a>
          </div>
         );
        }
     }
     module.exports  = Show;