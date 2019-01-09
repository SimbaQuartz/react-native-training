import React from 'react'
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"

import { Router, Stack, Scene } from 'react-native-router-flux'

const Routes = () => (
    <Router>
        <Stack key="root" hideNavBar>
            <Scene key="profile" component={ProfileScreen} />
            <Scene key="home" component={HomeScreen} initial />
        </Stack>
    </Router>
)

export default Routes