import React from 'react';
import deleteImage from './images/delete.svg';

class ShoppingList extends React.Component {

    render() {
        return <div className={'card list-items-container'}>

            <div className={'card-header'}>
                <div className={'header-with-button'}>
                    <span>Lista nr. 1</span>
                    <img alt={'add new list'} src={deleteImage}/>
                </div>
                <hr/>
            </div>

            <div className={'card-body'}>

            </div>

        </div>;
    }

}

export default ShoppingList;