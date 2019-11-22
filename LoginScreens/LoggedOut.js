import React,{Component} from 'react';
import { StyleSheet, View,Image, Text,TouchableHighlight} from 'react-native';
import colors from '../Styles/Colors/colors';

export default class LoggedOut extends Component {
    _onPressFacebookButton() {
        alert('Facebook!')
      }
      _onPressCreateAccountButton() {
        alert('Create Account!')
      }
    
    render() {
    return(
    <View style={styles.wrapper}>
           <Image source={require('../img/parklogo.png')} 
           style={styles.logo}/>
                <View style={styles.welocmetext}>
            <Text style={styles.welocmetextinsider}>WELCOME TO PARKSHARE</Text>
            </View>
      <TouchableHighlight style={styles.FaceBookbutton} onPress={this._onPressFacebookButton}>
          <Text style={styles.FacebookButtonText} >Continue with Facebook</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.CreateAccount} onPress={this._onPressCreateAccountButton}>
          <Text style={styles.CreateAccountText} >Create Account</Text>
      </TouchableHighlight>
      
    </View>
    );
}
}
const styles=StyleSheet.create({
    wrapper:{
    flex:1,
    display:'flex',
    backgroundColor:colors.green00,
    },
    logo:{
        width:60,
        height:60,
        margin:50,
    },
    welcometext:{
        flex:1,
    },
    welocmetextinsider:{
     fontSize:25,
     marginLeft:20,
     color:colors.white,
    },
    FaceBookbutton:{
        display:'flex',
        padding:15,
        borderColor:colors.white,
        borderRadius:40,
        width:'80%', 
        borderWidth:1,
        backgroundColor:colors.white,
        marginTop:30,
        marginLeft:40, 
       } ,
    FacebookButtonText:{
        fontSize:18,
        width:'100%',
        textAlign:'center',
        
    },
    CreateAccount:{
        display:'flex',
        padding:15,
        borderColor:colors.white,
        borderRadius:40,
        width:'80%', 
        borderWidth:1,
        backgroundColor:colors.green00,
        marginTop:20,
        marginLeft:40,
    } ,
    CreateAccountText:{
        fontSize:18,
        width:'100%',
        textAlign:'center',
        color:colors.white, 

    }

});