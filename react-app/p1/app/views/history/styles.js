import { StyleSheet } from 'react-native';
import variables from '../../components/global/variables';

const styles = StyleSheet.create({
    container : {
      flexDirection: "column"
    },
    separator: {
        height: 1,
        backgroundColor: variables.$gray
    },

    row: {
        borderRadius: 5,
        flexDirection: "column"
    },
    rowChild: {
        height: 60,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10
    },
    rowSeparator: {
    },
    text: {
        fontSize: 16
    },
    finished: {
        fontSize: 14
    },
    inProgress: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 14,
        color: variables.$green
    },
    abnormal: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 14,
        color: variables.$orange,
    },
    bought: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 14,
        color: '#888'
    },
    fixedPriceWrapper: {
        position: 'absolute',
        top: 30,
        right: 15,
        width: 60,
        height: 60,
        borderRadius: 40,
        borderColor: variables.$gray,
        borderWidth: variables.onePixel,
        backgroundColor: '#fff'
    },
    orderSection: {
        backgroundColor: "#fff",
        borderRadius: 5,
        flexDirection: "row",
        flexWrap: 'wrap',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10
    },
    orderSectionRent: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    orderSectionReturn: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTopWidth: 1,
        borderTopColor: '#cccccc'
    },
    help: {
        height: 44,
        justifyContent: 'center',
        flex: 1,
        marginTop: 10
    },
    helpText: {
        flex: 1,
        fontSize: 17,
        color: '#0093f3'
    },
    helpLink: {
        paddingTop: 0,
        color: variables.$gray
    },
    spentPriceWrapper: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderRadius: 30,
        borderWidth: variables.onePixel,
        top: 30,
        right: 15,
        height: 60,
        width: 60,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spentPriceHead: {
        fontSize: 9
    },
    spentPrice: {
        fontSize: 16
    },

    detailContainer: {
        flex: 1,
        backgroundColor: '#EBEEF0',
        justifyContent: 'space-between'
    },

    detailContent: {
        backgroundColor: '#fff'
    },

    detailFooter: {
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 14
    }
});

export default styles;
