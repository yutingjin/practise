import React, { PropTypes, Component, StyleSheet, View, ListView, Text, Image, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class DrawerContent extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired
    };

    home() {
        this.context.drawer.close()
    }

    info() {
        Actions.info();
        this.context.drawer.close()
    }

    history() {
        Actions.history();
        this.context.drawer.close()
    }

    about() {
        Actions.about();
        this.context.drawer.close()
    }

    message() {
        //
    }

    me() {
        Actions.me();
        this.context.drawer.close()
    }

    record(){
      //
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawerHeader}>
                    <TouchableOpacity onPress={()=>{}}>
                        <View style={styles.drawerItem}>
                            <Image source={require('./images/login.png')} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.drawerHeaderTitle]}>
                                <Text style={[styles.titleText, styles.drawerHeadText]}>登录</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerList}>
                    <TouchableHighlight onPress={this.me.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Image source={require('./images/home.png')} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>我的</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.record.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Image source={require('./images/history.png')} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>电子病历</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.history.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Image source={require('./images/history.png')} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>预约记录</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.message.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Image source={require('./images/history.png')} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>消息</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.about.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Image source={require('./images/help.png')} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>帮助</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.drawerFooter}>
                    <Image source={require('./images/about.png')} style={styles.drawerItemIcon} />
                </View>
            </View>
        )
    }
}

export default DrawerContent;
