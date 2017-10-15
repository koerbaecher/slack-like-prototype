import React, {Component} from 'react';
import Channel from './Channel.jsx';

class ChannelList extends Component{
    render(){
        return(
            <ul>{
                this.props.channels.maps( chan =>{
                    <Channel
                    channel={chan}
                    setChannel={this.props.setChannel} />
                })
            }</ul>
        )
    }
}

ChannelList.prototype={
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired
}

export default ChannelList