import React from 'react';
import Key from './key';

const keysStr = '1234567890';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.keys = keysStr.split('');
    }

    render() {
        let keyArr =  this.keys.map((value) => {
            return <Key value={value} key={value} onKeyPress={this.props.onKeyPress}>{value}</Key>
        });
        const helpKey = (
            <Key value="help" key="help" reverse={true} className="kb-key--switch" onKeyPress={this.props.onSwitch}>ABC</Key>
        );
        keyArr = [...keyArr.slice(0, 9), helpKey, ...keyArr.slice(9)];
        keyArr.push(<Key value="del" key="del" reverse={true} className="kb-key--del" onKeyPress={this.props.onKeyPress}><i className="iconfont icon-del"/></Key>);
        return (
            <div className="">
                <div className="kb kb-num">{keyArr}</div>
            </div>
        )
    }
}

export default Keyboard;
