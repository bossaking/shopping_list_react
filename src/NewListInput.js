import React from 'react';

class NewListInput extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
          listName: ''
        };

        this._handleKeyDown = this._handleKeyDown.bind(this);

    }


    render() {
        return(
            <input type={'text'} placeholder={'Nowa lista'} onKeyDown={this._handleKeyDown} />
        );
    }

    _handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            this.props.newListAdded(e.target.value);
            e.target.value = '';
        }
    };

}

export default NewListInput;