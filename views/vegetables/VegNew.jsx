const React = require("react")

class VegNew extends React.Component {
    render() {
        return (
            <div>
                <h1>New Vegetables Page</h1>
                <nav>
                    <a href="/vegetables">Go Back to Vegetables Page</a>
                </nav>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action="/vegetables" method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Color: <input type="text" name="color" /><br/>
                    Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                    <input type="submit" name="" value="Create Vegetable" />
                </form>
            </div>
        )
    }
}

module.exports = VegNew