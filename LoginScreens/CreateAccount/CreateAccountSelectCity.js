import React,{Component} from 'react';
import { StyleSheet, View,Image, Text,TouchableHighlight,ScrollView,KeyboardAvoidingView} from 'react-native';
import InputField from '../../Components/form/InputField';
import colors from '../../Styles/Colors/colors';
import NextArrowButton from '../../Components/Button/NextArrowButton';

export default class CreateAccountSelectCity extends Component {
    render(){
         return(
             <KeyboardAvoidingView style={styles.Wrapper} behavior="padding">
            <ScrollView style={styles.Content}>
                <Text style={styles.NameQuestion}></Text>
                
                <InputField 
                LabelText="PLEASE ENTER YOUR CITY"
                LabelTextSize={20}
                LabelColor={colors.white}
                inputType=""
                /> 
              
           
            </ScrollView>
            <View><NextArrowButton/></View>
            </KeyboardAvoidingView>
       );
    }
}

const styles=StyleSheet.create({
    Wrapper:{
    display:'flex',
    flex:1,
    backgroundColor:colors.green00,
    },
    Content:{
        paddingLeft:20,
    },
   NameQuestion:{
       paddingTop:40, 
       paddingLeft:30,
       paddingBottom:20,
       fontSize:30,
       color:colors.white,
   }

})