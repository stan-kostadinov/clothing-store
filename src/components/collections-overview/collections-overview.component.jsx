import React from 'react';
import Preview from '../preview/preview.component';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors.js';


const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map( ({ id, ...otherCollectionProps }) => (
                <Preview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)


const mapStateToPros = state => createStructuredSelector ({
    collections: selectCollections
})

export default connect (mapStateToPros) (CollectionsOverview);