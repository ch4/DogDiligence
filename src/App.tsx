import React, {useState, useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import List from './pages/List';
import Information from './pages/Information';
import Map from './pages/Map';
import Finance from './pages/Finance';
import Plaid from './pages/Plaid';
import Nutrition from './pages/Nutrition';
import { home, list, map, information, cash, nutrition } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { string } from 'prop-types';

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'Screenings',
    url: '/home/list',
    icon: list
  },
  {
    title: 'Map',
    url: '/map',
    icon: map
  },
  {
    title: 'Finances',
    url: '/plaid',
    icon: cash
  },
  {
    title: 'Nutrition',
    url: '/nutrition',
    icon: nutrition
  },
  {
    title: "More Info",
    url: 'moreInfo',
    icon: information
  }
];

// // clear local storage on first launch
// window.localStorage.clear();


const App: React.FC = () => {

  //temp react hook store
  const [store, setStore] = useState({});
  const [route, setRoute] = useState(null);
  // schema
  /*{
    breed: string,
    picture: string, //url
    disorders: [...string]
    myClinics: string
  }*/

  useEffect(() => console.log('hi'));

  return(
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu appPages={appPages} />
          <IonRouterOutlet id="main">
            <Route path="/home" component={Home} exact={true} />
            <Route path="/home/list" component={List} exact={true} />
            <Route path="/information" component={Information} exact={true} />
            <Route path="/map" component={Map} exact={true} />
            <Route path="/finance" component={Finance} exact={true} />
            <Route path="/nutrition" component={Nutrition} exact={true} />
            <Route path="/plaid" component={Plaid} exact={true} />

            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
