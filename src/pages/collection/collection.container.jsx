import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionIsLoaded } from '../../redux/shop/shop.selectors';

import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';



const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionIsLoaded(state)
});

const CollectionPageContainer = connect( mapStateToProps ) (WithSpinner(CollectionPage));

export default CollectionPageContainer;