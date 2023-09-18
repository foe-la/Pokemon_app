const React = require('react');

const myStyle = {
    color: 'purple',
    backgroundColor: 'grey',
    };
    
class Index extends React.Component {
    render () {
  
        return (
            <div style={myStyle}>
                <h1> See All The Pokemon! </h1>
            </div>
        );
    }
}

module.exports = Index;