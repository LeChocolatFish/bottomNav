import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, MaterialComuntyicons} from "@expo/vector-icons";

import Home from './Home.js';
import Search from './Search.js';
import Config from './Config.js';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#ffffff'
            }}
            >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon:({coler,size}) =>(
                    <MaterialCommunityIcons name='home' size={size}/>
                ),
            }}
            />
            <Tab.Screen
            name="Search"
            component={Search}
            options={{
                tabBarIcon:({coler,size}) =>(
                    <MaterialCommunityIcons name='search' size={size}/>
                ),
            }}
            />
            <Tab.Screen
            name="Config"
            component={Config}
            options={{
                tabBarIcon:({coler,size}) =>(
                    <MaterialCommunityIcons name='config' size={size}/>
                ),
            }}
            />
        </Tab.Navigator>
    );
}