import React from 'react';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer/drawer';
import Loading from '../../components/loading/loading';
import { menu } from '../../actions/common';

function mapStateToProps(state) {
    return {
        menu: state.menu,
        session: state.session,
        userInfo: state.userInfo,
    };
}

class App extends React.Component {

    componentDidMount() {
        //
    }

    menu(isOpen) {
        this.props.dispatch(menu(isOpen));
    }

    render() {
        return (
            <div>
                <Drawer
                    open={this.props.menu}
                    session={this.props.session}
                    currentUser={this.props.userInfo}
                    onMenuClick={this.menu.bind(this, false)}
                />
                {React.cloneElement(React.Children.only(this.props.children), {showMenu: this.menu.bind(this, true)})}
            </div>
        )
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
