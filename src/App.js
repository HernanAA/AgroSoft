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
	statusBarColor: 'white',
	statusBarTextColorScheme: 'dark',
	navigationBarColor: 'white',
	navBarBackgroundColor: 'dark',
	navBarTextColor: 'black',
	navBarButtonColor: 'black',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'black',
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


Navigation.startSingleScreenApp({
	screen: {
		screen: 'AgroSoft.ProductsList',
		title: 'Animales',
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


