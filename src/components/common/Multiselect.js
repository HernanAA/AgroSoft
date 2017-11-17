import React from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import Styles from '../../styles'

const Multiselect = ( props ) => {
  return (
    <View style={styles.container}>
      <MultiSelect
          items={props.items}
          uniqueKey="id"
          onSelectedItemsChange={(itemValue) => props.onSelectedItemsChange(itemValue)}
          selectText={"seleccionadas"}
          selectedItems={props.selectedItems}  
          selectText={props.selectText}
          searchInputPlaceholderText={props.searchInputPlaceholderText}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor={Styles.colors.gray}
          tagBorderColor={Styles.colors.gray}
          tagTextColor={Styles.colors.gray}
          selectedItemTextColor={Styles.colors.gray}
          selectedItemIconColor={Styles.colors.gray}
          itemTextColor="#000"
          searchInputStyle={{fontSize: 24}}
          submitButtonColor={Styles.colors.darkGray}
          submitButtonText="Aceptar"
          //Color texto Titulo.
          textColor={props.selectedItems.length === 0 ? Styles.colors.gray : Styles.colors.darkestGray} 
          fontSize={17} //Tamaño texto titulo cuando no esta desplegada la lista
          maxHeight={160} // este valor debe ser el height de todo el componente menos 40 (para el submit de abajo)
        />
    </View>
  );
};

const styles = {
  container: {
    flex:1,
  },
  searchInputStyle:{
    position:'absolute',
    top:10,
  }

};

export { Multiselect };
