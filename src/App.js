import React, { Component } from 'react';

export default class App extends Component {
    state = {
        clicks: 0,
        show: true
    }

    AddItem = () => {
        this.setState({ clicks : this.state.clicks +1 });
    }

    MinusItem = () => {
        this.setState({ clicks: this.state.clicks -1 });
    }

    Validation = () => {
        this.setState({ show : !this.state.show });
    }

    render() {
        return (
            <div>
                <button
                    onClick = { this.AddItem }
                    title = "Click to add 1"
                />
                <button
                    onClick = { this.MinusItem }
                    title = "Click to minus 1"
                />
                <button onClick = { this.Validation }></button>
                { this.state.show ? <h1>{ this.state.clicks } </h1> : '' }
            </div>
        );
    }
}


// const FullView = styled.View`
//     align-items: center;
//     justify-contents: center;
// `

// const StyledButton = styled.Button`
//     background-color: #505050;
//     align-items: center;
//     justify-content: center;
// `
