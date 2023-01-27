import React from 'react';

class NewProductInput extends React.Component{

    constructor(props) {
        super(props);

        this._handleKeyDown = this._handleKeyDown.bind(this);
    }


    render() {
        return(
            <input type={'text'} placeholder={'Dodaj produkt'} onKeyDown={this._handleKeyDown} />
        );
    }

    _handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            this.props.newProductAdded(e.target.value);
            e.target.value = '';
        }
    };

}

export default NewProductInput;