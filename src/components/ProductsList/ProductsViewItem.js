import React, { Component } from 'react'
import Styles from '../../styles'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Utils from '../../helpers/utils';
import { Stars } from '../common';
import Icon from 'react-native-vector-icons/FontAwesome'

const ProductsViewItem = ({ item }) => {
    // <Image source={{ uri: 'http://www.ruelo.com.ar/modulos/producto/10385.png' }} 
    // style={styles.image} />

    //<Image source={{ uri: "http://" + item.urlImage }} style={styles.image} />
    return (
        <View key={item.Id} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.fotoPerfil }}
                    style={styles.image} />
            </View >

            <View style={styles.detailContainer}>
                <View style={styles.header}>
                    <View style={styles.line}>
                        <Text style={styles.caravana} ellipsizeMode={'tail'}>{item.caravana}</Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.caravanaAuxiliar}>{item.caravanaAuxiliar}</Text>
                    </View>
                </View>
                <View style={styles.detailBody}>
                    <View style={[styles.line]}>
                        <Text style={styles.campoTitulo}>Tipo:</Text>
                        <Text style={styles.campoTexto}>{item.tipo.valor}</Text>
                    </View>
                    <View style={[styles.line]}>
                        <Text style={styles.campoTitulo}>Pelaje:</Text>
                        <Text style={styles.campoTexto}>{item.pelaje.valor}</Text>
                    </View>
                    <View style={[styles.line]}>
                        <Text style={styles.campoTitulo}>Madre:</Text>
                        <TouchableOpacity style={styles.parent}
                            activeOpacity={0.2} onPress={() => { Actions.verItem(item.madre.caravana) }}
                            disabled={item.madre === {} || item.madre === undefined}>
                            <Text style={styles.campoTexto}>{item.madre.caravana} <Icon name='caret-right' /></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.line]}>
                        <Text style={styles.campoTitulo}>Padre:</Text>
                        <TouchableOpacity style={styles.parent}
                            activeOpacity={0.2} onPress={() => { Actions.verItem(item.padre.caravana) }}
                            disabled={item.padre === {} || item.padre === undefined}>
                            <Text style={styles.campoTexto}>{item.padre.caravana} <Icon name='caret-right' /></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.line]}>
                        <Text style={styles.campoTitulo}>Campo:</Text>
                        <Text style={styles.campoTexto}>Feedlot</Text>
                    </View>
                    <View style={[styles.line]}>
                        <Text style={styles.campoTitulo}>Destino:</Text>
                        <Text style={styles.campoTexto}>{item.campo.valor}</Text>
                    </View>
                    <View style={[styles.line]}>
                        <Text style={styles.campoTitulo}>Estado:</Text>
                        <Text style={styles.campoTexto}>{item.estado.valor}</Text>
                    </View>
                    <View style={[styles.line]}>
                        <Text style={styles.campoTitulo}>Hijos:</Text>
                        <TouchableOpacity style={styles.childrens}
                            activeOpacity={0.2} onPress={() => { Actions.verHijos(item.hijos.caravana) }}
                            disabled={item.hijos === {} || item.hijos === undefined}>
                            <Text style={styles.campoTexto}>{item.hijos.length} <Icon name='caret-right' /></Text>
                        </TouchableOpacity>
                    </View>
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
        flex: 2.5,
        flexDirection: 'column',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Styles.colors.lightestGray,
        elevation: 2,
        marginBottom: 10,
    },
    detailBody: {
        paddingHorizontal: 10,
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
    caravanaAuxiliar: {
        fontSize: 12,
        color: Styles.colors.black,
        marginBottom: 5,
    },
    campoTitulo: {
        fontSize: 12,
        color: Styles.colors.black,
        fontWeight: '500',
    },
    campoTexto: {
        fontSize: 10,
        color: Styles.colors.darkGray,
    },
}

export { ProductsViewItem }