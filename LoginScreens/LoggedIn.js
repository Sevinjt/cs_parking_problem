import React,{Component} from 'react';
import { StyleSheet, View,Image, Text,TouchableHighlight,ScrollView,KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../Redux/actions';
import colors from '../Styles/Colors/colors';
import {PropTypes} from 'prop-types';
import InputField from '../Components/form/InputField';
import NextArrowButton from '../Components/Button/NextArrowButton';
import Notification from './Notification';
import Loader from '../Components/form/Loader';
import LoggedOut from './LoggedOut';

class LoggedIn extends Component {
    constructor(props){
        super(props);
        this.state={
            formValid:true,
            validEmail: false,
            emailAddress:'',
            password:'',
            validPassword:false,
            loadingVisible:false,
        }
        this.handleCloseNotification=this.handleCloseNotification.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleNextButton= this.handleNextButton.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
    }
    handleNextButton(){
        this.setState({loadingVisible:true});

        setTimeout(() => {
       const {emailAddress, password}=this.state;
        if(this.props.logIn(emailAddress,password)){
            this.setState({formValid:true,loadingVisible:false});
        }else{
            this.setState({formValid:false, loadingVisible: false});
        }
          }, 2000);
    }
    handleCloseNotification(){
        this.setState({formValid:true});
    }
    handleEmailChange(email){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({emailAddress:email});

        if(!this.state.validEmail){
          if(emailCheckRegex.test(email)){
              this.setState({validEmail:true});
          }

        }else{
              if(!emailCheckRegex.test(email)){
                  this.setState({validEmail:false});
              }
          }
    }
    handlePasswordChange(password){
        const { validPassword } = this.state;
        this.setState({ password });
        if(!validPassword){
        if(password.length > 4){
            this.setState({validEmail:true});
        }
    }
    else if (password<= 4){
        this.setState({validPassword: false});
    }
    }

    toggleNextButtonState(){
        const{ validEmail, validPassword}= this.state;
        if(validEmail && validPassword){
            return false;
        }
         return true;
    }

    
    render(){
        const {formValid, loadingVisible, validEmail, validPassword}=this.state;
        const showNotification=formValid ? false:true;
        const background= formValid ? colors.green00 : colors.darkOrange;
        const notificationMarginTop= showNotification ? 10:0;
           return(
               
               <KeyboardAvoidingView style={[styles.wrapper,{backgroundColor:background}]}
               behavior='padding'>
                   <View style={styles.scrollViewWrapper}> 
                       <ScrollView style={styles.ScrollView}>
                           <Text style={styles.LoginHeader}>
                               LOG IN
                           </Text>
                            <InputField LabelText="EMAIL ADDRESS"
                                        LabelTextSize={20}
                                        LabelColor={colors.white}
                                        inputType="email" 
                                        onChangeText={this.handleEmailChange}
                                        showCheckmark={validEmail}/> 
                            <InputField LabelText="PASSWORD"
                                        LabelTextSize={20}
                                        LabelColor={colors.white}
                                        inputType="password"
                                        onChangeText={this.handlePasswordChange} 
                                        showCheckmark={validPassword}
                                        /> 
                       </ScrollView>
                       
                           <NextArrowButton handleNextButton={this.handleNextButton} />
                          
                           <View style={[styles.notificationWrapper,{marginTop:notificationMarginTop}]}>
                               <Notification
                           type="Error"
                           firstLine="Those credentials don't look right."
                           secondLine="Please try again."
                           showNotification={showNotification}
                           handleCloseNotification={this.handleCloseNotification}
                           /></View>
                   </View>
                   <Loader
                   animationType="fade"
                   modalVisible={loadingVisible}
                   />
               </KeyboardAvoidingView>
           );
     }

}

const styles=StyleSheet.create({
    wrapper:{
     display:'flex',
     flex:1,
    },
    scrollViewWrapper:{
      marginTop:70,
      flex:1,   
    }, 
    LoginHeader:{
         fontSize:30,
         color:colors.white,
         fontWeight:'300',
         marginBottom:30,
         marginLeft:15,
    },
    notificationWrapper:{
         bottom:0,         
         
    },
    scrollView:{ 
           paddingLeft:30,
           paddingRight:30,
           paddingTop:20,
           flex:1,
    },
});

const mapStateToProps =(state)=>{
    return{
        loggedInStatus: state.loggedInStatus,
    }
};

const mapDispatchToProps =(dispatch)=>{
    return bindActionCreators(ActionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);