import React, { Component } from 'react'
import Styles from '../../styles'
import { View, Image, Text } from 'react-native'
import Utils from '../../helpers/utils';
import { Stars } from '../common';

const ProductsViewItem = ({ item }) => {
    // <Image source={{ uri: 'http://www.agrosoft.com.ar/modulos/producto/10385.png' }} 
    // style={styles.image} />
    return (
        <View key={item.Id} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: "http://" + item.urlImage }} style={styles.image} />
            </View >

            <View style={styles.bottomContainer}>
                <View style={styles.line}>
                    <Text style={styles.productName} numberOfLines={2} ellipsizeMode ={'tail'}>{item.Descripcion} </Text>
                </View>
                <View style={styles.line}>
                    <View style={styles.internalCode}>
                        <Text style={styles.internalCodeText}>Codigo interno {item.Id}</Text>
                    </View>
                </View >
            </View>
        </View >
    )
}

const styles = {
    container: {
        height: 240,
        marginBottom: 10,
        flexDirection: 'column',
        backgroundColor: Styles.colors.white,
        borderColor: Styles.colors.lighterGray,
        borderWidth: 1,
        elevation: 2,
        flex: 1,
        margin: 5,
        maxWidth: Utils.getWindowDimensions().width / 3,
    },
    imageContainer: {
        flex: 4,
        overflow: 'hidden',
        borderBottomColor: Styles.colors.lighterGray,
        borderBottomWidth: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    bottomContainer: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 3,
    },
    priceText: {
        alignSelf: 'flex-end',
        fontSize: 9,
        color: Styles.colors.lighterGray,
    },
    productName: {
        fontSize: 14,
        color: Styles.colors.black,
        fontWeight: '500',
    },
    internalCode: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    internalCodeText: {
        fontSize: 13,
        fontWeight: '500'
    },
}

export { ProductsViewItem }