import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList159543Navigator from '../features/ArticleList159543/navigator';
import ArticleList159542Navigator from '../features/ArticleList159542/navigator';
import ArticleList159541Navigator from '../features/ArticleList159541/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList159543: { screen: ArticleList159543Navigator },
ArticleList159542: { screen: ArticleList159542Navigator },
ArticleList159541: { screen: ArticleList159541Navigator },

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
