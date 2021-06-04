import React from 'react';
import SHOP_DATA from './shop.data.js';
import Preview from '../../components/preview/preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };


    }

    render(){

        const { collections } = this.state;

        return ( 
        <div className="shop-page">
            <h1>SHOP</h1>
            {collections.map( ({ id, ...otherCollectionProps }) => (
                    <Preview key={id} {...otherCollectionProps} />
                ))}
        </div>
        );
    }
}

export default ShopPage;