import React from 'react'
import Newsfeed from '../screens/Newsfeed';
import Members from '../screens/Members';
import Groups from '../screens/Groups';
import Forums from '../screens/Forums';
import Timeline from '../screens/Timeline';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Feather,MaterialIcons} from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
<Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: 'lightblue'
      },
      headerStyle: {
        backgroundColor: 'lightblue'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'tomato'
      }
    }}>
      <Tab.Screen name={'Newsfeed'} component={Newsfeed} options={{
        tabBarIcon: ({focused}) => (<Feather name={'activity'} size={25} color={focused ? 'tomato' : 'black'}/> )
      }} />
      <Tab.Screen name={'Members'} component={Members} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="card-membership" size={25} color={focused ? 'tomato' : 'black'}/>
          )
        }}/>
      <Tab.Screen name={'Forums'} component={Forums} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={'forum'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }} />
      <Tab.Screen name={'Groups'} component={Groups} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={'group'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }} />
      <Tab.Screen name={'Timeline'} component={Timeline} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={'face'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          )
        }} />
    </Tab.Navigator>

    )
}

export default Tabs;