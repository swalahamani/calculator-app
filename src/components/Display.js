import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <input
                value={this.props.value} >
            </input>
        );
    }
}

export default Display;