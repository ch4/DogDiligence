import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppPage } from '../declarations';
import './Menu.css';


interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const Menu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  <IonMenu contentId="main" type="overlay">
    {/* <IonHeader>
      <IonToolbar>
        <IonTitle>Dog Diligence</IonTitle>
      </IonToolbar>
    </IonHeader> */}
    <IonContent>
      <div id="menu-content" >
      {/* <div className="profile-border">
    <div className="user-pic one"></div>
      </div> */}
      <IonList style={{backgroundColor: '#000'}}>
        {appPages.map((appPage, index) => {
          //clear disease
          // window.localStorage.removeItem('disease');
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem style={{backgroundColor: '#433E3F'}} routerLink={appPage.url} routerDirection="none">
                <IonIcon slot="start" icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonList>
      </div>
    </IonContent>
  </IonMenu>
);

export default withRouter(Menu);
