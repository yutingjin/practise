import React, {Component, Platform, StatusBarIOS}  from 'react-native';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import DrawerContent from './drawer_content';
import { menu } from '../../actions/common';
import styles from './styles';


function mapStateToProps(state) {
    return {
        opened: state.menu,
        userInfo: state.userInfo,
        session: state.session
    };
}

class SideDrawer extends Component {

    componentDidMount() {
        console.log("SideDrawer mount!")
    }

    componentDidUpdate() {
        console.log("this.props.opened: ", this.props.opened)
        if (this.props.opened) {
            this.refs.drawer.open();
        }
    }

    shouldComponentUpdate(nextProps) {
        return this.props.opened || nextProps.opened;
    }

    onOpen() {
        this.props.dispatch(menu(true));
        console.log("Open Drawer props", this.props)
    }

    onClose() {
        this.props.dispatch(menu(false));
        console.log("Close Drawer props", this.props)
    }

    render() {
        return (
            <Drawer
                ref="drawer"
                type="displace"
                content={<DrawerContent />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closedDrawerOffset={0}
                styles={{
                    drawer: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 3, backgroundColor: '#fff'},
                }}
                style={styles.container}
                onOpenStart={this.onOpen.bind(this)}
                onCloseStart={this.onClose.bind(this)}
                tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })}
                tweenDuration={200}
            >
                {React.Children.map(this.props.children, c => React.cloneElement(c, {
                    route: this.props.route
                }))}
            </Drawer>
        )
    }
}

export default connect(mapStateToProps)(SideDrawer);
