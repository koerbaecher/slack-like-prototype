import React, {Component} from 'react';
import ChannelList from './ChannelList.jsx';
import ChannelForm from './ChannelForm.jsx';

class ChannelSection extends Component{
    render(){
        return(
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong> Channels </strong>
                </div>
                <div className='panel-body channels'>
                    <ChannelList {...this.props} />
                    <ChannelForm {...this.props} />
                </div>
            </div>
        )
    }
}

ChannelSection.PropTypes={
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    addChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
}

export default ChannelSection