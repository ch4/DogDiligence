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
import Select from 'react-select';
import DogList from '../dataset/dogceo.json'
import './Home.css';


const options = DogList.dogs.map((name) => {return {'value': name, 'label': name}})
const HomePage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dog Diligence</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonCard> */}
        {/* <img src="" /> */}
        <IonCardSubtitle>Breed:</IonCardSubtitle>
          <Select
            placeholder={"Select Your Dog"}
            onChange={ionChange}
            options={options}
          />
        {/* </IonCard> */}
        Birthday:
        <IonItem>
          <IonLabel>MM DD YY</IonLabel>
          <IonDatetime displayFormat="MMMM DD YYYY" placeholder="Select Date"></IonDatetime>
        </IonItem>
        <IonButton expand="block">Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};


let ionChange = () => {
  console.log('changed')
  //save dog to state. 
}

export default HomePage;
