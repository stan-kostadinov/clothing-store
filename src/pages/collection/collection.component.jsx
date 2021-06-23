import React from 'react';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';


const CollectionPage = ({ collection }) => {
    console.log(collection); 
    return(
    <div className="collection-page">
        <h2>ASD page</h2>
    </div>
)}

const mapStateToPros = ( state, ownProps ) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect (mapStateToPros) (CollectionPage);