import React from 'react';
import Preview from '../../components/preview/preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors.js';

const ShopPage = ({ collections }) => ( 
    <div className="shop-page">
        <h1>SHOP</h1>
        {collections.map( ({ id, ...otherCollectionProps }) => (
            <Preview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToPros = state => createStructuredSelector ({
    collections: selectCollections
})

export default connect (mapStateToPros) (ShopPage);