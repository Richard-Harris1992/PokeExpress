const React = require('react');

const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
}

const inputStyle = {
    backgroundColor: "green",
    borderRadius: "3px",
    marginTop: "5px",
    color: "white",
    width: "75px",
    height: "35px",
    textDecoration: "none"
}

const hrefStyle = {
    textDecoration: "none",
    color: "white"
}

class Show extends React.Component {
    render() {
        const { pokemon } = this.props;
        
        return (
            <div>
                <h1>Gotta Catch 'Em All!</h1>
                <h2>{pokemon.name.substring(0,1).toUpperCase() + pokemon.name.substring(1)}</h2>
                <img src={pokemon.img}></img>
                <form style={formStyle} action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST" >
                    <input type="submit" value="DELETE" style={inputStyle} />
                </form>
                <button style={inputStyle}><a href={`/pokemon/${pokemon.id}/edit`} style={hrefStyle}>EDIT</a></button><br />
                
                <a href = "/pokemon">Back</a>
            </div>
        )
    }
}
module.exports = Show
