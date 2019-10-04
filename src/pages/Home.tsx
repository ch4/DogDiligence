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
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Select from 'react-select';
import DogList from '../dataset/dogceo.json'
import './Home.css';
import { any } from 'prop-types';


// const options = DogList.dogs.map((name) => {return {'value': name, 'label': name}})

const HomePage: React.FC = () => {
  // clear local storage on first launch
  window.localStorage.clear();

  
  let options = DogList.dogs.map((name) => {return {'value': name, 'label': name}})
  let breed:any;
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dog Diligence</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      
      <IonContent fullscreen>
        <div className="home-content">
          <div className="all-content">
            <div className="logo-img">
              <img src="assets/logo.png"/>
            </div>
          {/* <IonCard> */}
          {/* <img src="" /> */}
          <IonCardSubtitle>What is your dog's breed? If you have a mix, list all the breed types.</IonCardSubtitle>
            <Select
              placeholder={"Select Your Dog"}
              onChange={ionChange}
              options={options}
              isMulti
              // value={breed}
              
            />
          {/* </IonCard> */}
          <IonCardSubtitle>Enter the birthdate of your dog.</IonCardSubtitle>
          <IonItem>
            <IonLabel>MM DD YY</IonLabel>
            <div id="datePicker">  
            < IonDatetime displayFormat="MMMM DD YYYY" placeholder="Select Date" onIonChange={timeChange}>
            </IonDatetime>
            </div>
          </IonItem>
          <IonButton id="homePageSubmit" expand="block" routerLink="/home/list" >Submit</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

function timeChange(this: any) {
  
  window.localStorage.setItem('birthday', this.value ? JSON.stringify(this.value): "");

}
let ionChange = (val:any) => {
  let mainBreed = val && val[0] && val[0].value;
  let mixed = val && Array.isArray(val) && val.length > 1;
  window.localStorage.setItem('breed', mainBreed ? JSON.stringify(mainBreed): "");
  window.localStorage.setItem('mixed', JSON.stringify(mixed));


  //save dog to state. 
}

export default HomePage;
