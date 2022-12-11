const React = require('react');



const style = {
    color: 'blue',
    fontSize: '35px',
    border: '1px solid red',
    textAlign: 'center'
}




class Index extends React.Component {
    render() {
        return (
        <div> 
            <h1 style={style}> See All The Pokemon! </h1>
            <ul>
            {this.props.pokemon.map((poke, i) => {
                return (
                    <li><a href={`/pokemon/${poke.id}`}>{poke.name.substring(0,1).toUpperCase() + poke.name.substring(1)}</a></li>
                )
            })}    
            </ul>
            <nav>
                <a href="/pokemon/new">Add a new pokemon</a>
            </nav>
        </div>     
         );
    }
}
module.exports = Index;