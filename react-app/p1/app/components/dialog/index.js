import React, {
  Alert,
  View,
  Component
} from 'react-native';
import DialogAndroid from 'react-native-dialogs';
import config from '../global/config';

class Dialog extends Component {

    componentDidMount() {
        if (config.os === 'ios') {
            Alert.alert(
                this.props.title || '',
                this.props.message,
                this.props.actions.map((action, index) => {
                    return {text: action.name, onPress: () => action.action()};
                })
            );
        } else {
            var dialog = new DialogAndroid();
            let options = {
                title: this.props.title || null,
                content: this.props.message || '',
                cancelable: false
            };
            let actions = this.props.actions;
            if (actions.length == 1) {
                options.positiveText = actions[0].name;
                options.onPositive = () => { actions[0].action() };
            } else if (actions.length == 2) {
                options.negativeText = actions[0].name;
                options.onNegative = () => { actions[0].action() };
                options.positiveText = actions[1].name;
                options.onPositive = () => { actions[1].action() };
            }
            dialog.set(options);
            dialog.show();
        }
    }

    render() {
        return null;
    }
}

export default Dialog;
