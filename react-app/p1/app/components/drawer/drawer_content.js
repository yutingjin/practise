import React from 'react';
import { PropTypes, Component, StyleSheet, View, ListView, Text, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const menu_icon_size = 30

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

    consult() {
        Actions.consult();
        this.context.drawer.close();
    }

    me() {
        Actions.me();
        this.context.drawer.close()
    }

    record(){
        console.log("Push to records")
        Actions.records();
        this.context.drawer.close();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawerHeader}>
                    <TouchableOpacity onPress={()=>{}}>
                        <View style={styles.drawerItem}>
                            <Icon name={'android-person'} size={40} color={'#009af1'} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.drawerHeaderTitle]}>
                                <Text style={[styles.titleText, styles.drawerHeadText]}>登录</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.drawerList}>
                    <TouchableHighlight onPress={this.me.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Icon name={'ios-home'} size={menu_icon_size} color={'#009af1'} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>我的</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.consult.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Icon name={'ios-medkit'} size={menu_icon_size} color={'#009af1'} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>图文咨询</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.record.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Icon name={'ios-paper'} size={menu_icon_size} color={'#009af1'} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>电子病历</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.history.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Icon name={'ios-list'} size={menu_icon_size} color={'#009af1'} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>预约记录</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.message.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Icon name={'chatbox-working'} size={menu_icon_size} color={'#009af1'} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>消息</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.about.bind(this)} underlayColor='#E2E2E2'>
                        <View style={[styles.drawerItem, styles.about]}>
                            <Icon name={'help-circled'} size={menu_icon_size} color={'#009af1'} style={styles.drawerItemIcon} />
                            <View style={[styles.drawerItemTitle, styles.aboutTitle]}>
                                <Text style={styles.titleText}>帮助</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default DrawerContent;
