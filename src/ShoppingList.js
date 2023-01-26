import React from 'react';
import deleteImage from './images/delete.svg';

class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
        this.deleteList = this.deleteList.bind(this);
    }

    render() {

        if(this.props.selectedList === null){
            return <div className={'card list-items-container'}></div>;
        }else{
            return <div className={'card list-items-container'}>

                <div className={'card-header'}>
                    <div className={'header-with-button'}>
                        <span>{this.props.selectedList?.list_title}</span>
                        <img alt={'add new list'} src={deleteImage} onClick={this.deleteList}/>
                    </div>
                    <hr/>
                </div>

                <div className={'card-body'}>
                    <div className={'list-items'}>
                        <div className={'list-item'}>
                            <span>Produkt 1</span>
                        </div>
                        <div className={'list-item'}>
                            <span>Produkt 1</span>
                        </div>
                        <div className={'list-item'}>
                            <span>Produkt 1</span>
                        </div>
                        <div className={'list-item'}>
                            <span>Produkt 1</span>
                        </div>
                    </div>
                </div>

            </div>;
        }


    }

    deleteList(){
        this.props.removeList(this.props.id);
    }

}

export default ShoppingList;