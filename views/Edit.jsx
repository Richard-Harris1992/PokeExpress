const React = require("react");
const { render } = require("react-dom");

class Edit extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return(
            
                <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={pokemon.name}/><br />
                    Image <input type="text" name="img" defaultValue={pokemon.img}/><br />
                    <input type="submit" value="Edit Pokemon" />
                </form>
            
        )
    }
}

module.exports = Edit;