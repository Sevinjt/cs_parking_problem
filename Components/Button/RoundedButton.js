import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text,TouchableHighlight,StyleSheet,} 
    from 'react-native';
 
    export default class RoundedButton extends Component{
        render() {
            const { text } = this.props;
            return(
                <TouchableHighlight style={styles.wrapper} hand>
                    <Text style={styles.wrapperText}>{ text }</Text>
                </TouchableHighlight> 
            );
        }
    }
      
    RoundedButton.PropTypes={
        text: PropTypes.string.isRequired,
       };
    const styles =StyleSheet.create({
            wrapper:{
                display:'flex',
                padding:15,
                borderColor:'white',
                borderRadius:40,
                borderWidth:1,
                backgroundColor:'white',
                marginTop:30,
            },

            wrapperText:{
                fontSize:18,
                width:'100%',
                textAlign:'center',
        
            },
    }
    )
