import React,{Component} from 'react';
import { StyleSheet, View,Text,Image, Icon,TouchableOpacity,TouchableHighlight,ScrollView,KeyboardAvoidingView} from 'react-native';
import colors from '../../Styles/Colors/colors';
import {PropTypes} from 'prop-types';

export default class NextArrowButton extends Component {
    render(){
        const{handleNextButton}=this.props;
           return( 
               <View style={styles.nextWrapper}>
             <TouchableOpacity style={ styles.NextArrowButton}
              onPress={handleNextButton}
             >
               <Image source={require('../../img/next.png')} style={styles.NextArrowButtonImage}/>
               </TouchableOpacity>    
               </View>
           );
    }
}

NextArrowButton.propTypes = {
    disabled:PropTypes.bool,
    handleNextButton:PropTypes.func, 
};


const styles=StyleSheet.create({
    buttonWrapper:{

    },
    NextArrowButton:{
     alignItems:'flex-end',
     marginRight:50,
    
    },
    NextArrowButtonImage:{
       width:50,
       height:50,
       marginBottom:20, 
       backgroundColor:colors.white,
    },
    
}
)