import React,{Component} from 'react';
import { StyleSheet, View,Image, Text,TouchableHighlight,ScrollView,Picker,KeyboardAvoidingView} from 'react-native';
import InputField from '../../Components/form/InputField';
import colors from '../../Styles/Colors/colors';
import NextArrowButton from '../../Components/Button/NextArrowButton';

export default class CreateAccountPhoneNumber extends Component {
    state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
    render(){
         return(
             <KeyboardAvoidingView style={styles.Wrapper} behavior="padding">
             <ScrollView style={styles.Content}>
                <Text style={styles.NameQuestion}></Text>
                <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                <Picker.Item disabled={true} label = "CODE" />
               <Picker.Item label = "Azerbaijan" value = "994" />
               <Picker.Item label = "USA" value = "7" />
               <Picker.Item label = "Russia" value = "maria" />
            </Picker>
                <InputField 
                LabelText="PLEASE ENTER YOUR PHONE NUMBER"
                LabelTextSize={20}
                LabelColor={colors.white}
                inputType="number"
                marginLeft={20}
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
        display:'flex',
        flex:1,
        flexDirection:'row',
    },
   NameQuestion:{
       paddingTop:40, 
       paddingLeft:30,
       paddingBottom:20,
       fontSize:30,
       color:colors.white,
   },
   PickerWrapper:{
     width:70, 
     backgroundColor:colors.white,
   }

})