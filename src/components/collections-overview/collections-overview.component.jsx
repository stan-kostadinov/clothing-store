import React from 'react';
import CollectionPreview from '../preview/preview.component';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';


const CollectionsOverview = ({ collections }) => {
    console.log(collections)
    return(
    <div className="collections-overview">
        {
            collections.map( ({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)}


const mapStateToPros = createStructuredSelector ({
    collections: selectCollectionsForPreview
})

export default connect (mapStateToPros) (CollectionsOverview);