import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet, Text, View,
  ViewPropTypes, TouchableOpacity, Button,
  TextInput, ScrollView
} from 'react-native';
import Utils from '../../helpers/utils'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIonic from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles'
import { Multiselect, InputWithIcon } from '../common';
import { Spinner } from '../common';

export default class DrawerView extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <LinearGradient colors={[Styles.colors.darkerBlue,
          '#4c669f', '#3b5998',
          Styles.colors.darkerBlue]}
          style={styles.headerContainer}>
          <Text style={styles.headerText}></Text>
        </LinearGradient> */}
        {(this.props.brandFetching || this.props.categoryFetching || this.props.subCategoryFetching) &&
          <Spinner style={styles.spinner} size="small" />
        }
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={require('./../../Images/logo.png')} />
        </View>

        <InputWithIcon
          style={{ height: 50 }}
          {...this.props}
          placeholder={"Código"}
          fieldText={this.props.selectedCode}
          fieldTextChanged={this.props.selectedCodeChanged}
        />

        <InputWithIcon
          style={styles.inputWithIcon}
          {...this.props}
          placeholder={"Descripción"}
          fieldText={this.props.selectedDescription}
          fieldTextChanged={this.props.selectedDescriptionChanged}
        />

        <View style={styles.multiselectContainer(this.props.selectedBrand.length)}>
          <Multiselect {...this.props}
            items={this.props.brandsList}
            uniqueKey={"id"}
            onSelectedItemsChange={this.props.selectedBrandChanged}
            selectedItems={this.props.selectedBrand}
            selectText={"Seleccione las Marcas"}
            searchInputPlaceholderText={"Buscar marcas..."}
          />
        </View>
        <View style={styles.multiselectContainer(this.props.selectedCategory.length)}>
          <Multiselect {...this.props}
            items={this.props.categoryList}
            uniqueKey={"id"}
            onSelectedItemsChange={this.props.selectedCategoryChanged}
            selectedItems={this.props.selectedCategory}
            selectText={"Seleccione los Rubros"}
            searchInputPlaceholderText={"Buscar Rubros..."}
          />
        </View>
        <View style={styles.multiselectContainer(this.props.selectedSubCategory.length)}>
          <Multiselect {...this.props}
            items={this.props.subCategoryList}
            uniqueKey={"id"}
            onSelectedItemsChange={this.props.selectedSubCategoryChanged}
            selectedItems={this.props.selectedSubCategory}
            selectText={"Seleccione los SubRubros"}
            searchInputPlaceholderText={"Buscar SubRubros..."}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              Actions.drawerClose()
              this.props.filteredProductListFetch()
            }}
          >
            <Text style={styles.buttonText}>BUSCAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Styles.colors.darkGray
  },
  spinner: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0
  },
  headerContainer: {
    height: 132,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Styles.colors.white,
    marginBottom: 8,
  },
  headerImage: {
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: Styles.colors.whiteYellow,
    paddingVertical: 20,
  },
  inputWithIcon: {
    height: 50,
    marginVertical: 10
  },
  buttonContainer: {
    height: 50,
    paddingTop: 10,
  },
  button: {
    height: 40,
    backgroundColor: Styles.colors.lighterBlue,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    fontSize: 20,
    fontWeight: '500'
  },
  multiselectContainer: (selectedItems) => {
    var style = {
      height: 200,
      backgroundColor: Styles.colors.lightestGray
    }
    if (selectedItems > 0) {
      style.backgroundColor = Styles.colors.white;
      style.borderBottomWidth = 2;
      style.borderBottomColor = Styles.colors.lightestGray;
    }
    return style;
  },
};

