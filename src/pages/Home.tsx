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
import Dogs from '../dataset/dogs.json'
import './Home.css';


console.log(Dogs)
const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        Breed: 
        <IonSearchbar animated></IonSearchbar>
        Birthday:
        <IonItem>
          <IonLabel>MM DD YY</IonLabel>
          <IonDatetime displayFormat="MMMM DD YYYY" placeholder="Select Date"></IonDatetime>
        </IonItem>
        <IonButton expand="block">Block Button</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
