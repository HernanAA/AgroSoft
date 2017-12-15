import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger'
import { StatusBar, View, Platform } from 'react-native';
import { registerScreens } from './Screens';
import { Navigation } from 'react-native-navigation';

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

registerScreens(store, Provider);

Number.prototype.thousandDot = function () {
    return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

const Style = {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0
}

// const App = () => (
//     <Provider store={store}>
//         <View style={Style}>
//             <StatusBar hidden />

//         </View>
//     </Provider>
// )

Navigation.startSingleScreenApp({
	screen: {
		screen: 'AgroSoft.ProductsList',
		title: 'Movies',
		navigatorStyle,
		leftButtons: [
			{
				id: 'sideMenu'
			}
		]   
	},
	drawer: {
		left: {
			screen: 'AgroSoft.DrawerContent'
		}
	}
});


//export default App