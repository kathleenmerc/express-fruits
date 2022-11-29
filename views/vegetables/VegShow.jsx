const React = require("react");

class VegShow extends React.Component {
    render() {
        const {name, color, readyToEat} = this.props.vegetable
        //console.log(this.props.vegetable)
        return (
            <div>
                <h1>Show Page</h1>
                <p> The {name} is {color}.</p>
                {readyToEat ? "It is ready to eat!" : "It is not ready to eat... don't touch that"}
            </div>
        )
    }
}

// We can write javascript code within the curly brackets 


module.exports = VegShow