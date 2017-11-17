import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Text, ListView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles'
import { ProductsViewItem } from './ProductsViewItem'
import { ProductsSearch } from './ProductsSearch'
import { Spinner, Header } from '../common';

class ProductsView extends Component {

    onProductPress(item) {
        this.props.productFetch(item.Id);
        Actions.product();
    }

    renderItem({ item }) {
        return (
            <ProductsViewItem item={item} onPress={this.onProductPress.bind(this, item)} />
        )
    }

    onSearchChanged(text) {
        //text = 'cereal fort manz'
        this.props.searchChanged({ text });
    }

    render() {
        const title = <Header headerText={"Lista de productos"} />;

        if (this.props.listFetching) {
            return (
                <View style={styles.screen}>
                    {title}
                    <Spinner size="small" />
                </View>
            )
        }

        if (this.props.error !== '') {
            return (
                <View style={styles.screen}>
                    {title}
                    <View style={styles.errorContainer}>
                        <Text style={{marginHorizontal: 20}}> {this.props.error} </Text>
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.screen}>
                {title}
                <View style={styles.container}>
                    <ProductsSearch onSearchChanged={this.onSearchChanged.bind(this)} />
                    <View style={styles.listContainer}>
                        <FlatList
                            style={{ flexDirection: 'column' }}
                            data={this.props.filterdList}
                            keyExtractor={(item, index) => item.Id}
                            numColumns={3}
                            renderItem={this.renderItem.bind(this)}
                        />
                    </View>
                    <Text style={styles.quantityText}>
                        {"Se encontraron " + this.props.filterdList.length + " productos."}
                    </Text>
                </View>


            </View>
        )
    }
}

export default ProductsView;

const styles = {
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    listContainer: {
        flex: 1,
    },
    errorContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityText: {
        flex: 1,
        backgroundColor: Styles.colors.lightestGray,
        position: 'absolute',
        bottom: 0,
        left: 10,
        right: 10,
        fontSize: 14,
        color: Styles.colors.black,
        paddingHorizontal: 10,
    },
}