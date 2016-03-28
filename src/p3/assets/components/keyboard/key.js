import React from 'react';
import cx from 'classnames';

export default class Key extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyState: 'ready'
        };
    }

    onKeyPressed(value) {
        this.setState({
            keyState: 'ready'
        });
        this.props.onKeyPress && this.props.onKeyPress(value);
    }

    onKeyPress() {
        this.setState({
            keyState: 'pressed'
        });
    }

    render() {
        return (
            <div
                className={cx("kb-key", this.props.className)}
                onTouchStart={this.onKeyPress.bind(this)}
                onTouchEnd={this.onKeyPressed.bind(this, this.props.value)}
            >
                <div className={cx("kb-key--inner", "kb-key--inner--" + this.state.keyState  + (this.props.reverse ? '--reverse' : ''), {"kb-key--inner--reverse": this.props.reverse})}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
