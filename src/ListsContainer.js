import React from 'react';
import addImage from './images/add_list.svg';
import shoppingLists from './shopping_list.json';
import List from "./List";

class ListsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedListIndex: -1,
            lists: []
        }
        this.test = this.test.bind(this);
    }


    render() {

        for (let i = 0; i < shoppingLists.lists.length; i++) {
            this.state.lists.push(
                <List ref={React.createRef()} listIndex={i} listTitle={shoppingLists.lists[i].list_title} click={this.test}/>
            );
        }

        return <div className={'card shopping-lists-container'}>
            <div className={'card-header'}>
                <div className={'header-with-button'}>
                    <span>Listy zakupów</span>
                    <img alt={'add new list'} src={addImage}/>
                </div>
                <hr/>
            </div>

            <div className={'card-body'}>
                {this.state.lists}
            </div>

        </div>;
    }

    test(listIndex) {
        if (this.state.selectedListIndex !== -1) {
            this.state.lists[this.state.selectedListIndex].ref.current.unselectList();
        }
        this.state.selectedListIndex = listIndex;
    }

}

export default ListsContainer;