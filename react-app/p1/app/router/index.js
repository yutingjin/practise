/* @flow */
import React, {Text, View, Navigator, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {Router, Route, Schema, Animations} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import App from '../views/app';
import Home from '../views/home';
import History from '../views/history';
import About from '../views/about';
import Info from '../views/info';
import SideDrawer from '../components/drawer';
import { menu, reset } from '../actions/common';
import BarTitle from '../components/navbar/bar_title';

let ReduxRouter = connect()(Router);

class AppRouter extends React.Component {

    openMenu() {
        this.props.dispatch(menu(true));
    }

    renderLeftButton() {
            //<Icon.Button name="android-menu" backgroundColor="#424c53" size={28} style={{paddingLeft: 10}} onPress={this.openMenu.bind(this)} />
        return (
            <Text>Left Button</Text>
        )
    }

    render() {
        return (
            <ReduxRouter
                name="root"
                navigationBarStyle={{backgroundColor: '#434c54'}}
                titleStyle={{color: '#fff', fontSize: 18, fontWeight: '200'}}
                barButtonTextStyle={{opacity: 0}}
                barButtonIconStyle={{tintColor: '#fff'}}
            >
                <Schema name="default" type="push" sceneConfig={Animations.FlatFloatFromRight} />
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="drawer" type="reset" title="p1" renderLeftButton={this.renderLeftButton.bind(this)} />
                <Route name="entry" component={App} schema="drawer" hideNavBar={true} initial={true} />
                <Route name="main" type="reset" hideNavBar={true}>
                    <SideDrawer>
                        <Router
                            name="drawerRouter"
                            navigationBarStyle={{backgroundColor: '#424c53'}}
                            titleStyle={{color: '#fff'}}
                            barButtonTextStyle={{opacity: 0}}
                            barButtonIconStyle={{tintColor: '#fff'}}
                        >
                            <Route name="info" component={Info} type="push" title="个人资料" hideNavBar={false} initial={true}/>
                            <Route name="medicalRecord" component={About} type="push" title="病历" hideNavBar={false}/>
                            <Route name="appointment" component={About} type="push" title="预约" hideNavBar={false}/>
                            <Route
                                name="home"
                                component={About}
                                schema="drawer"

                                hideNavBar={true}
                                renderTitle={(route) => {
                                    if (route.props.router.delegate.state != null) {
                                        if (route.props.router.delegate.state.title) {
                                            return route.props.router.delegate.state.title;
                                        }
                                    }
                                    return <BarTitle title="bar title" />;
                                }}
                                renderLeftButton={(route) => {
                                        if (route.props.router.delegate.state != null) {
                                            if (route.props.router.delegate.state.downButton) {
                                                return route.props.router.delegate.state.downButton;
                                            }
                                        }
                                        return this.renderLeftButton();
                                    }
                                }
                            />
                        </Router>
                    </SideDrawer>
                </Route>
                <Route name="history" component={History} type="push" title="History"/>
                <Route name="about" component={About} type="push" title="about"/>
            </ReduxRouter>
        )
    }
}

export default connect()(AppRouter);
