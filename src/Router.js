import React from 'react';
import {
    Scene,
    Router,
    Stack,
    Drawer
} from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import ProductsList from './components/ProductsList';
import Product from './components/Product';
import DrawerContent from './components/DrawerContent';

const RouterComponent = () => {
    return (
        <Router >
            <Stack key="root" hideNavBar>
                <Drawer key="drawer"
                    contentComponent={DrawerContent}
                    drawerWidth={400}
                >
                    <Stack
                        back={false}
                        key="main"
                        duration={0}
                        hideNavBar
                        initial>

                        <Scene
                            key="productsList"
                            component={ProductsList}
                            initial
                            hideNavBar
                        />

                        <Scene
                            key="product"
                            component={Product}
                            hideNavBar
                        />
                    </Stack>
                </Drawer>
            </Stack>
        </Router>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'blue',
        width: 300
    },
});

export default RouterComponent;
