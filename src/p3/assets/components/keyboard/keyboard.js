import './keyboard.scss';
import React from 'react';
import NumberKeyboard from './number_keyboard';
import AlphabetKeyboard from './alphabet_keyboard';
import Key from './key';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kb: 'number'
        }
    }

    onSwitch(value) {
        this.setState({
            kb: value
        })
    }

    render() {
        return (
            <div className="kb-container">
                {
                    this.state.kb === 'alphabet' &&
                    <AlphabetKeyboard onKeyPress={this.props.onKeyPress} onSwitch={this.onSwitch.bind(this, 'number')} />
                }
                {
                    this.state.kb === 'number' &&
                    <NumberKeyboard onKeyPress={this.props.onKeyPress} onSwitch={this.onSwitch.bind(this, 'alphabet')} />
                }
            </div>
        )
    }
}

export default Keyboard;
