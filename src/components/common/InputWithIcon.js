import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import IconIonic from 'react-native-vector-icons/Ionicons';
import Styles from '../../styles'

const InputWithIcon = (props) => {
    return (
        <View style={[styles.inputGroup(props.fieldText), props.style]}>
            <IconIonic
                name="ios-search"
                size={20}
                color={props.fieldText === '' ? Styles.colors.gray : Styles.colors.black}
                style={{ marginRight: 10 }}
            />
            <TextInput
                onChangeText={searchTerm => props.fieldTextChanged(searchTerm)}
                placeholder={props.placeholder}
                placeholderTextColor={props.fieldText === '' ? Styles.colors.gray : Styles.colors.black}
                underlineColorAndroid="transparent"
                style={[props.fieldText === '' ? { fontSize: 16 } : { fontSize: 22 }, { flex: 1}]}
            />
            <TouchableOpacity onPress={() => props.fieldTextChanged('')}>
                <IconIonic
                    name="ios-close-circle-outline"
                    style={[styles.indicator(props.fieldText), { paddingLeft: 15, paddingRight: 15 }]}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    inputGroup: (text) => {
        var style = {
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 16,
          backgroundColor: Styles.colors.lightBlue,
        }
        if (text !== '') {
          style.backgroundColor = Styles.colors.blue
        }
        return style;
      },
      indicator: (text) => {
        var style = {
          fontSize: 20,
          color: Styles.colors.black,
        }
        if (text === '') {
          style.color = Styles.colors.transparent
        }
        return style;
      }

};

export { InputWithIcon };
