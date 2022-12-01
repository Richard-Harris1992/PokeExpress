const React = require('react');



const style = {
    color: 'blue',
    fontSize: '35px',
    border: '1px solid red',
    textAlign: 'center'
}

const pokeList = (pokemon) => {
            let result = [];
            for(let i = 0; i < pokemon.length; i++) {
                let href = `./pokemon/${i}`;
                let pokeName = pokemon[i].name.substring(0,1).toUpperCase() + pokemon[i].name.substring(1);
                result.push(<li key={i}><a href={href}> {pokeName} </a></li>)
            }
            
            return result;
        }

class Index extends React.Component {
    render() {
        const pokemon = this.props.poke;
        
        return (
        <div> 
            <h1 style={style}> See All The Pokemon! </h1>
            <ul>{pokeList(pokemon)}</ul>
        </div>     
         );
    }
}
module.exports = Index;