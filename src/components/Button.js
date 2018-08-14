import React from 'react';

class Button extends React.Component {
    value = '';
    
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.onClick(this.props.children);
    }

    render() {
        return(
            <button onClick={this.handleClick.bind(this)}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;