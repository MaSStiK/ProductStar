import React from "react"

class Header extends React.Component {
    render() {
        return (
            <img src={this.props.image} alt="img" />
        )
    }
}

export default Header