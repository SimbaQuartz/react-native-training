import React from 'react'
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"

import { Router, Stack, Scene } from 'react-native-router-flux'

const Routes = () => (
    <Router>
        <Stack key="root">
            <Scene key="profile" component={ProfileScreen} title="profile" />
            <Scene key="home" component={HomeScreen} title="home" />
        </Stack>
    </Router>
)

export default Routes