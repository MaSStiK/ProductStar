import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from "./images/logo.jpg"

  
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: "ФИО",
            userData: ""
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidUpdate(prevProp) {
        if (this.state.helptext !== "Help") {
            console.log("not help");
        }
    }

    render() {
        return (
        <>
            <Header title="Шапка сайта" />
            <Header title="Хедер" />

            <h2>{this.state.userData}</h2>

            <input type="text" placeholder={this.state.helpText}
                onClick={this.handleClick}
                onChange={event => this.setState({userData: event.target.value})}
             />
            <h3>{this.state.helpText}</h3>

            <Image image={logo} />
        </>
        )
    }

    handleClick() {
        this.setState({ helpText: "Олег" })
    }
}

export default App