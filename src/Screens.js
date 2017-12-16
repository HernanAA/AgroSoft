/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import ProductsList from './components/ProductsList';
import Product from './components/Product';
import DrawerContent from './components/DrawerContent';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('AgroSoft.ProductsList', () => ProductsList, store, Provider);
	// Navigation.registerComponent('movieapp.Movies', () => Movies, store, Provider);
	// Navigation.registerComponent('movieapp.MoviesList', () => MoviesList, store, Provider);
	// Navigation.registerComponent('movieapp.Search', () => Search, store, Provider);
	 Navigation.registerComponent('AgroSoft.DrawerContent', () => DrawerContent, store, Provider);
}