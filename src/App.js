import React, {useRef} from 'react';
import ListsContainer from "./ListsContainer";
import ShoppingList from "./ShoppingList";

import shoppingLists from './shopping_list.json';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedList: null,
            selectedId: -1,
            shoppingLists: null,
            listsContainerRef: React.createRef()
        };
        this.isDataExistsInStorage = this.isDataExistsInStorage.bind(this);
        this.getDataFromStorage = this.getDataFromStorage.bind(this);
        this.saveDataToStorage = this.saveDataToStorage.bind(this);
        this.selectList = this.selectList.bind(this);
        this.removeList = this.removeList.bind(this);
    }


    render() {

        if (this.state.shoppingLists === null) {
            if (this.isDataExistsInStorage()) {
                this.state.shoppingLists = this.getDataFromStorage();
            } else {
                this.state.shoppingLists = shoppingLists;
            }
        }

        return (<div className={'main-container'}>
                <ListsContainer ref={this.state.listsContainerRef} shoppingLists={this.state.shoppingLists} selectList={this.selectList} removeList={this.removeList}/>
                <ShoppingList selectedList={this.state.selectedList} id={this.state.selectedId}
                              removeList={this.removeList}/>
            </div>
        );
    }

    selectList = (listId) => {
        this.setState({
            selectedList: this.state.shoppingLists.lists[this.state.shoppingLists.lists.findIndex(l => l.list_id === listId)],
            selectedId: listId
        });
    }

    removeList(listId) {
        this.state.shoppingLists.lists.splice(this.state.shoppingLists.lists.indexOf(this.state.shoppingLists.lists.find(l => l.list_id === listId)), 1);
        this.setState({
            selectedList: null,
            selectedId: -1,
            shoppingLists: null
        });

        this.state.listsContainerRef.current.removeList(listId);
        this.saveDataToStorage();
    }

    saveDataToStorage() {
        localStorage.setItem('shopping_lists', JSON.stringify(this.state.shoppingLists));
    }

    isDataExistsInStorage() {
        return localStorage.getItem('shopping_lists') !== null;
    }

    getDataFromStorage() {
        return JSON.parse(localStorage.getItem('shopping_lists'));
    }

}

export default App;