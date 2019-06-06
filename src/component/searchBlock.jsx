import React from 'react';
import ReactDOM from 'react-dom';



class SearchBlock extends React.Component {
    render() {
        return (
          <div>
            <span>搜尋留言人：</span>
            <input type="text"
                   value={this.props.searchName}
                   onChange={this.props.changeState}/>
          </div>
        )
    }
}


export default SearchBlock
