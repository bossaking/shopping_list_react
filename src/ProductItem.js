import React from 'react';

class ProductItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: this.props.completed
        }

    }

    render() {
        return (
            <div className={ this.state.completed ? 'list-item completed' : 'list-item'} onClick={this.completeProduct.bind(this)} onDoubleClick={this.deleteProduct.bind(this)}>
                <span>{this.props.productName}</span>
            </div>
        );
    }

    completeProduct(){

        this.props.productCompleted(this.props.productId, !this.state.completed);

        this.setState({
            completed: !this.state.completed
        })
    }

    deleteProduct(){
        this.props.deleteProduct(this.props.productId);
    }

}

export default ProductItem;