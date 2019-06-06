import React from 'react';
import ReactDOM from 'react-dom';
import MessageBlock from '../component/messageBlock';
import SearchBlock from '../component/searchBlock';

class MessageForm extends React.Component {
    constructor(props){
        super(props)
        this.state = ({name:''})
        this.changeState = this.changeState.bind(this)
    }
    changeState(event){
        this.setState({name:event.target.value})
    }
    render() {
        return (
          <div>
            <SearchBlock searchName={this.state.name}
                         changeState={this.changeState} />
            <hr/>
            <MessageBlock messageData={this.props.messageData}
                          searchName={this.state.name} />
          </div>
        )
    }
}


export default MessageForm
