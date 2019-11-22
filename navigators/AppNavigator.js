import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { createStackNavigator} from 'react-navigation-stack';
import LoggedOut from '../LoginScreens/LoggedOut';
import LoggedIn from '../LoginScreens/LoggedIn';
import ForgotPassword from '../LoginScreens/ForgotPassword';

export const AppNavigator = createStackNavigator({
    LoggedOut:{screen:LoggedOut},
    LoggedIn:{screen:LoggedIn},
    ForgotPassword: {screen: ForgotPassword},
});

const AppWithNavigationState= ({dispatch,nav,listener})=>(
   <AppNavigator navigation={{dispatch,state:nav,addListener:listener}} />
);

AppWithNavigationState.propTypes={
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state =>(
    {
        nav: state.nav,
    }
);

export default connect(mapStateToProps)(AppWithNavigationState);