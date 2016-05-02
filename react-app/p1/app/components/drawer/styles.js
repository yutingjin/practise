import { StyleSheet, PixelRatio, Dimensions } from 'react-native';

const baseHeight = 667;
const { height } = Dimensions.get('window');
let ratio = height / baseHeight;
if ( ratio > 1) {
    ratio = 1;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    drawerHeader: {
        backgroundColor: '#ebeef0',
        paddingVertical: 20 * ratio,
        marginBottom: 14
    },

    drawerHeaderTitle: {
        borderBottomWidth: 0
    },

    drawerHeadText: {
        fontSize: 18
    },

    drawerList: {
        flex: 1
    },

    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerItemTitle: {
        flex: 1,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1 /PixelRatio.get(),
        paddingVertical: 20 * ratio

    },
    titleText: {
        color: "#333",
        fontSize: 14
    },
    drawerItemIcon: {
        marginLeft: 14,
        marginRight: 12
    },

    drawerItemLogout: {
        marginTop: 15
    },

    drawerItemTitleLogin: {
        color: "#111"
    },
    drawerFooter: {
        padding: 15
    },
    drawerItemTitleLogout: {
        color: "#FF851B"
    },
    about: {
        marginTop: 10
    },
    aboutTitle: {
        borderBottomWidth: 0
    }
});

export default styles;