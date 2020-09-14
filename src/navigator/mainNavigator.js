import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen6101329Navigator from '../features/BlankScreen6101329/navigator';
import BlankScreen595148Navigator from '../features/BlankScreen595148/navigator';
import CopyOfBlankScreen194935Navigator from '../features/CopyOfBlankScreen194935/navigator';
import BlankScreen494693Navigator from '../features/BlankScreen494693/navigator';
import BlankScreen394692Navigator from '../features/BlankScreen394692/navigator';
import BlankScreen292863Navigator from '../features/BlankScreen292863/navigator';
import BlankScreen192023Navigator from '../features/BlankScreen192023/navigator';
import BlankScreen092002Navigator from '../features/BlankScreen092002/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen6101329: { screen: BlankScreen6101329Navigator },
BlankScreen595148: { screen: BlankScreen595148Navigator },
CopyOfBlankScreen194935: { screen: CopyOfBlankScreen194935Navigator },
BlankScreen494693: { screen: BlankScreen494693Navigator },
BlankScreen394692: { screen: BlankScreen394692Navigator },
BlankScreen292863: { screen: BlankScreen292863Navigator },
BlankScreen192023: { screen: BlankScreen192023Navigator },
BlankScreen092002: { screen: BlankScreen092002Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
