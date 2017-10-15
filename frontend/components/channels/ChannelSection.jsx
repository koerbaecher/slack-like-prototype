import React, {Component} from 'react';
import ChannelList from './ChannelList.jsx';
import ChannelForm from './ChannelForm.jsx';

class ChannelSection extends Component{
    render(){
        return(
            <div>
                <ChannelList {...this.props} />
                <ChannelForm {...this.props} />
                
            </div>
        )
    }
}

ChannelSection.prototype={
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    addChannel: React.PropTypes.func.isRequired
}

export default ChannelSection