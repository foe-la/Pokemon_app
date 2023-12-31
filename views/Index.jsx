const React = require('react');

const myStyle = {
    color: 'purple',
    backgroundColor: 'grey',
    };
    
class Index extends React.Component {
    render () {
        const pokemon =this.props.pokemon;
        return (
            <div style={myStyle}>
                <h1> See All The Pokemon! </h1>
                <ul>
                    { pokemon.map((pokemon, i) => {
                        return (
                            <li>
                                <a href={`/pokemon/${i}`}>
                                    {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1).toLowerCase()} 
                                </a>
                            </li>
                        )
                    }) }
                </ul>
                <nav>
                <a href="/pokemon/new">Create a Pokemon! </a>
                </nav>
            </div>
        );
    }
}

module.exports = Index;