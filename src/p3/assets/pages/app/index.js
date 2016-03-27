import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        session: state.session,
        message: state.message
    };
}

class App extends React.Component {

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default connect(mapStateToProps)(App);
