import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import Characters from '../pages/Characters';
import Planets from '../pages/Planets';
import Residents from '../pages/Residents';
// import { Container } from './styles';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{
    headerShown: true, cardStyle: { backgroundColor: '#312e38' }, title: 'Página Inicial', headerTintColor: '#fff', headerStyle: { backgroundColor: '#7159c1' },
  }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Characters" component={Characters} />
    <App.Screen name="Planets" component={Planets} />
    <App.Screen name="Residents" component={Residents} />
  </App.Navigator>
);

export default AppRoutes;
