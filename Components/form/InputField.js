import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity,onChangeText,Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';
import colors from '../../Styles/Colors/colors';

export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
          secureInput: !(props.inputType === 'text' || props.inputType === 'email'),
          scaleCheckmarkValue: new Animated.Value(0),
        };
        
      }
      scaleCheckmark(value) {
        Animated.timing(
          this.state.scaleCheckmarkValue,
          {
            toValue: value,
            duration: 400,
            easing: Easing.easeOutBack,
          },
        ).start();
      }
    render() {
        const { LabelText, 
            LabelTextSize, 
            LabelColor, 
            inputType, 
            marginLeft,
            onChangeText, 
            showCheckmark, 
            autoFocus,
            autoCapitalize,       
        } = this.props;
        const { scaleCheckmarkValue } = this.state;
        const fontSize = LabelTextSize || 20;
        const color = LabelColor;
        const keyboardType= inputType==='email' ? 'email-address' : 'default';

        const iconScale = scaleCheckmarkValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.01, 1.6, 1],
          });
      
          const scaleValue = showCheckmark ? 1 : 0;
          this.scaleCheckmark(scaleValue);
          
        return (
            <View style={styles.wrapper}>
                <Text style={[{ color }, { fontSize }, styles.label]}>{LabelText}</Text>
        <Animated.View style={[{ transform: [{ scale: iconScale }] }, styles.checkmarkWrapper]}>
                <Icon
            name="check"
            color={colors.white}
            size={20}
          />
        </Animated.View>
                <TextInput  style={[{ inputType },{marginLeft}, styles.inputField]}
                    secureTextEntry={inputType === "password"} 
                   onChangeText={onChangeText}
                   keyboardType={keyboardType}
                   autoFocus={true}
                   autoCapitalize={autoCapitalize}
                   />
            </View>
        );
    }
}
InputField.propTypes = {
    LabelText: PropTypes.string.isRequired,
    LabelTextSize: PropTypes.number.isRequired,
    LabelColor: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    marginLeft:PropTypes.number.isRequired,
    onChangeText: PropTypes.func,
    showCheckmark:PropTypes.bool.isRequired,
    autoFocus:PropTypes.bool,
    autoCapitalize:PropTypes.bool,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        marginLeft:15,
    },
    label: {
        fontWeight: '700',
        marginBottom: 10,
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: colors.white,
        color: colors.white,
        fontSize: 20,
        width:'80%', 
    },
    checkmarkWrapper:{
        position:'absolute',
        right:'20%',
        bottom:12,
    }
})
