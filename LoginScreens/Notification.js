import React,{Component} from 'react';
import { StyleSheet, View,Image, Text,TouchableHighlight,TouchableOpacity,Easing,Animated,KeyboardAvoidingView} from 'react-native';
import colors from '../Styles/Colors/colors';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Notification extends Component {
    constructor(props){
        super(props);
        this.state={
            positionValue: new Animated.Value(60),
        };
        this.closeNotification=this.closeNotification.bind(this);
        this.animatedNotification=this.animatedNotification.bind(this);
    }
      animatedNotification(value){
          const {positionValue}=this.state;
          Animated.timing(
              positionValue,
              {
                 toValue: value,
                 duration:600,
                 velocity:3,
                 tension:2,
                 friction:8,
                 easing:Easing.easeOutBack,
              }
          ).start();
      }
    closeNotification(){
        this.props.handleCloseNotification();
    }
    render(){
        const {type,firstLine,secondLine, showNotification}=this.props;
        const {positionValue}=this.state;
        showNotification ? this.animatedNotification(0) : this.animatedNotification(60);
       return(
<Animated.View style={[{transform:[{translateY:positionValue}]},styles.NotificationContent]}>
    <Text style={styles.errorText}>{type}</Text>
    <Text style={styles.errorMessage}>{firstLine}</Text>
    <Text style={styles.errorMessage}>{secondLine}</Text>
    <TouchableOpacity style={styles.closeButton} onPress={this.closeNotification}>
        <Icon name='times' size={25} color={colors.lightGrey}/>
    </TouchableOpacity>
</Animated.View>
       );
    }
}

Notification.PropTypes={
    type: PropTypes.string.isRequired,
    firstLine:PropTypes.string,
    secondLine: PropTypes.string,
    handleCloseNotification:PropTypes.func,
    showNotification:PropTypes.bool.isRequired,
}

const styles=StyleSheet.create({
      NotificationContent:{
          flexDirection:'row',
          flexWrap:'wrap',
          alignItems:'flex-start', 
          backgroundColor:colors.white,
        width:'100%',
        paddingLeft:10,
      },
       errorText:{
        color:colors.darkOrange, 
        fontSize:20,
        marginRight:5,
        marginBottom:2,
       },
       errorMessage:{
         fontSize:20,
         marginBottom:2,
       },
       closeButton:{
           position:'absolute',
           right:10,
       }
})