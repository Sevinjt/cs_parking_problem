import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import InputField from '../Components/form/InputField';
import NextArrowButton from '../Components/Button/NextArrowButton';
import Notification from './Notification';
import Loader from '../Components/form/Loader';
import colors from '../Styles/Colors/colors';


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          formValid: true,
          loadingVisible: false,
          validEmail: false,
          emailAddress: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.goToNextStep = this.goToNextStep.bind(this);
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        
      }
    
      handleEmailChange(email) {
        // eslint-disable-next-line
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validEmail } = this.state;
    
        this.setState({ emailAddress: email });
    
        if (!validEmail) {
          if (emailCheckRegex.test(email)) {
            this.setState({ validEmail: true });
          }
        } else if (!emailCheckRegex.test(email)) {
          this.setState({ validEmail: false });
        }
      }

      goToNextStep() {
        const { emailAddress } = this.state;
        this.setState({ loadingVisible: true });
        setTimeout(() => {
          if (emailAddress === 'wrong@list.ru') {
            this.setState({
              loadingVisible: false,
              formValid: false,
            });
          } else {
            this.setState({
              loadingVisible: false,
              formValid: true,
            });
          }
        }, 2000);
      }

      handleCloseNotification() {
        this.setState({ formValid: true });
      }

    render(){
        const {loadingVisible, formValid, validEmail}=this.state;
        const background = formValid ? colors.black : colors.darkOrange;
        const showNotification= formValid ? false:true;
         return(
            <KeyboardAvoidingView
            style={styles.wrapper}
            style={[{ backgroundColor: background }, styles.wrapper]}
            behavior="padding"
            >
                   <View style={styles.scrollViewWrapper}> 
                       <ScrollView style={styles.ScrollView}>
             <Text style={styles.forgotPasswordHeading}>Forgot your password?</Text>  
             <Text style={styles.forgotPasswordSubheading}>Enter your mail to find your account</Text>
             <InputField
              customStyle={{ marginBottom: 30 }}
              textColor={colors.white}
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
            />
                </ScrollView>
            
                
                    <NextArrowButton
                     handleNextButton={this.goToNextStep}
                     disabled={!validEmail}
                     />
        
                <View style={styles.notificationWrapper}>
                 <Notification
                      showNotification={showNotification}
                      handleCloseNotification={this.handleCloseNotification}
                      type="Error"
                      firstLine="No account exists for the requested"
                      secondLine="email address."
          />
                 </View>
         </View>
                      <Loader
                      modalVisible={loadingVisible}
                      animationType="fade"
                     />
            </KeyboardAvoidingView> 
         );
    }
}

const styles = StyleSheet.create({
      wrapper:{
          display:'flex',
          flex:1,
        
      },
      forgotPasswordHeading:{
          fontSize:28,
          color:colors.white,
          fontWeight:'300',
      },
      forgotPasswordSubheading:{
          color:colors.white,
          fontWeight:'600',
          fontSize:15,
          marginTop:10,
          marginBottom:60,
      },
      nextButtonWrapper:{
            alignItems:'flex-end',
            right:20,
            bottom:-60,
      },
      scrollView:{ 
        paddingLeft:30,
        paddingRight:30,
        paddingTop:20,
        flex:1, 
 },
 scrollViewWrapper:{
    marginTop:70,
    flex:1,   
  }, 
  notificationWrapper:{
    bottom:0,         
    
},
});