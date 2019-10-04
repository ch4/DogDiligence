import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonDatetime,
    IonButton
    } from '@ionic/react';
  import { book, build, colorFill, grid } from 'ionicons/icons';
  import React from 'react';
  import './Home.css';
  
  const HomePage: React.FC = () => {
    class MyComponent extends React.Component {
        render() {
            return <iframe src="http://dogdiligence.herokuapp.com/" height="100%" width="100%"></iframe>;
        }
    }
    return (
      <IonPage>
        <IonContent>
        <MyComponent></MyComponent>
        </IonContent>
      </IonPage>
    );
  };
  
  export default HomePage;
  