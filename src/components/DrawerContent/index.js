import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View, ViewPropTypes, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
  selectedBrandChanged,
  selectedCategoryChanged,
  selectedCodeChanged,
  selectedDescriptionChanged,
  selectedSubCategoryChanged,
} from '../../actions/ProductFiltersActions';
import { filteredProductListFetch } from '../../actions/ProductFiltersActions';
import Utils from '../../helpers/utils'
import Icon from 'react-native-vector-icons/FontAwesome'
import Styles from '../../styles'
import { Actions } from 'react-native-router-flux';
import DrawerView from './DrawerView'

class DrawerContent extends Component {

  render() {
    return (
      <View style={styles.screen}>
        <DrawerView {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

const mapStateToProps = ({ productFilters }) => {
  return {
    brandsList, selectedBrand,
    categoryList, selectedCategory,
    subCategoryList, selectedSubCategory,
    selectedCode, selectedDescription,
    brandFetching, categoryFetching, subCategoryFetching
  } = productFilters;
};

export default connect(mapStateToProps, {
  selectedBrandChanged,
  selectedCategoryChanged,
  selectedCodeChanged,
  selectedDescriptionChanged,
  selectedSubCategoryChanged,
  filteredProductListFetch
})(DrawerContent);
