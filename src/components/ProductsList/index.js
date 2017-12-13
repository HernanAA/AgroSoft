import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import { productListFetch, productFetch, searchChanged } from '../../actions/ProductActions';
import {brandListFetch, categoryListFetch, subcategoryListFetch } from '../../actions/ProductFiltersActions';
import ProductsView from './ProductsView'

class ProductList extends Component {

    componentWillMount() {
        this.props.productListFetch();
        this.props.brandListFetch();
        this.props.categoryListFetch();
        this.props.subcategoryListFetch();
    }

    render() {
        return (
            <View style={styles.screen}>
                <ProductsView {...this.props} />
            </View>
        );
    }

}

const styles = {
    screen: {
        flex:1
    },
};

const mapStateToProps = ({ products, productFilters }) => {
    return { filterdList, listFetching } = products;
};

export default connect(mapStateToProps, { 
        productListFetch, 
        productFetch,
        searchChanged,
        brandListFetch,
        categoryListFetch,
        subcategoryListFetch
    })(ProductList);

