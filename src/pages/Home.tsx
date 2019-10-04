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
import { observer, inject } from 'mobx-react';
import Select from 'react-select';
import DogList from '../dataset/dogceo.json'
import './Home.css';

import { RouterStore } from 'mobx-react-router'
interface Props {
  UserStore?: RouterStore
}

const options = DogList.dogs.map((name) => {return {'value': name, 'label': name}})


@inject('UserStore')
@observer
class HomePage extends React.Component<Props> {
  render () {
    const user = this.props.UserStore
    console.log(1, user)

    return <IonPage>
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
            />
          {/* </IonCard> */}
          <IonCardSubtitle>Enter the birthdate of your dog.</IonCardSubtitle>
          <IonItem>
            <IonLabel>MM DD YY</IonLabel>
            <div id="datePicker">
            < IonDatetime displayFormat="MMMM DD YYYY" placeholder="Select Date">
            </IonDatetime>
            </div>
          </IonItem>
          <IonButton expand="block" routerLink="/home/list" onChange={()=>submit()}>Submit</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  }
};

let submit= () => {
   //information about dog

}

let ionChange = () => {
  console.log('changed')
  //save dog to state.
}

export default HomePage;
