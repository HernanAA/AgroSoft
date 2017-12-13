import React, { Component } from 'react'
import Styles from '../../styles'
import { View, Image, Text } from 'react-native'
import Utils from '../../helpers/utils';
import { Stars } from '../common';

const ProductsViewItem = ({ item }) => {
    // <Image source={{ uri: 'http://www.ruelo.com.ar/modulos/producto/10385.png' }} 
    // style={styles.image} />

    //<Image source={{ uri: "http://" + item.urlImage }} style={styles.image} />
    return (
        <View key={item.Id} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'http://estaticos01.elmundo.es/elmundo/imagenes/2009/04/23/1240508553_0.jpg' }}
                    style={styles.image} />
            </View >

            <View style={styles.detailContainer}>
                <View style={styles.line}>
                    <Text style={styles.caravana} ellipsizeMode={'tail'}>A024-501</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.segundaCaravana}>BLANCA-062</Text>
                </View >
                <View style={[styles.line]}>
                    <Text style={styles.campoTitulo}>Tipo:</Text>
                    <Text style={styles.campoTexto}>Vaquillona</Text>
                </View >
                <View style={[styles.line]}>
                    <Text style={styles.campoTitulo}>Pelaje:</Text>
                    <Text style={styles.campoTexto}>Pampa Colorado</Text>
                </View >
                <View style={[styles.line]}>
                    <Text style={styles.campoTitulo}>Madre:</Text>
                    <Text style={styles.campoTexto}>A024-501</Text>
                </View >
                <View style={[styles.line]}>
                    <Text style={styles.campoTitulo}>Padre:</Text>
                    <Text style={styles.campoTexto}>Inseminado</Text>
                </View >
                <View style={[styles.line]}>
                    <Text style={styles.campoTitulo}>Campo:</Text>
                    <Text style={styles.campoTexto}>Feedlot</Text>
                </View >
                <View style={[styles.line]}>
                    <Text style={styles.campoTitulo}>Destino:</Text>
                    <Text style={styles.campoTexto}>Feedlot</Text>
                </View >
                <View style={[styles.line]}>
                    <Text style={styles.campoTitulo}>Estado:</Text>
                    <Text style={styles.campoTexto}>Activa</Text>
                </View >
            </View>
        </View >
    )
}

const styles = {
    container: {
        height: 200,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: Styles.colors.white,
        borderColor: Styles.colors.lighterGray,
        borderWidth: 1,
        elevation: 2,
        flex: 1,
        margin: 5,
        maxWidth: Utils.getWindowDimensions().width,
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
    detailContainer: {
        flex: 1.5,
        flexDirection: 'column',
        //justifyContent: 'space-between',
        paddingHorizontal: 10,
        //paddingVertical: 5,
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    caravana: {
        fontSize: 14,
        color: Styles.colors.black,
        fontWeight: '500',
    },
    segundaCaravana: {
        fontSize: 12,
        color: Styles.colors.black,
        marginBottom: 5,
    },
    campoTitulo: {
        fontSize: 12,
        color: Styles.colors.black,
    },
    campoTexto: {
        fontSize: 12,
        color: Styles.colors.darkGray,
    },
}

export { ProductsViewItem }