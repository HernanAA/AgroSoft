import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import ProductView from './ProductView'

class Product extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <ProductView {...this.props} />
            </View>
        );
    }

}

const styles = {
    screen: {
        flex:1,
    },
};

const mapStateToProps = ({ products }) => {
    const product = products.selectedProduct;
    const { productFetching, error } =  products

    return { product, productFetching, error}
};

export default connect(mapStateToProps, )(Product);

