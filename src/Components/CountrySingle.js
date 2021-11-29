import React, { Component } from 'react';

class CountrySingle extends Component {
    render() {
        return (
            <div>
                Hello! I am a {this.props.params.name}
            </div>
        );
    }
}

export default CountrySingle;