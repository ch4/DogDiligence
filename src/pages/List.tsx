import { IonButtons, IonContent, IonCard, IonCardHeader, IonCardSubtitle,IonCardTitle, IonCardContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import React from 'react';
import disorders from './../dataset/disorders.json';

const ListPage: React.FC = () => {
  let breed = window.localStorage.getItem('breed')
  let mixed = window.localStorage.getItem('mixed');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{breed} {mixed === "true" ? 'mixed' : ""} dog care</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="list-content">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Breed Screening</IonCardTitle>
            <IonCardSubtitle>-Breed- dogs are recommended to be screened for the disorders below to maintain their quality of life.</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <ListItems />
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>General Screening</IonCardTitle>
            <IonCardSubtitle>Good for dogs of all breeds.</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <GeneralItems />
          </IonCardContent>
        </IonCard>
        <div>
            <img src="assets/report.png"/>
          </div>
        </div>
      </IonContent>


    </IonPage>
  );
};


const ListItems = () => {

  let breed = window.localStorage.getItem('breed')
  let breedNoQuote = breed ? JSON.parse(breed) : "";

  if(!disorders.dogs.hasOwnProperty(breedNoQuote ? breedNoQuote: "")){
    return(<div></div>)
  } 

  let disordersObj: any = disorders.dogs
  let disordersArr: any = disordersObj[breedNoQuote]
  let items = disordersArr.map((x: any,i: any) => {
    return (
      <IonItem key={i} routerLink="/information">
        <div className="item-note" onClick={(e) => itemClick(e)}>
          {x}
        </div>
      </IonItem>
    );
  });
  

  return <IonList>{items}</IonList>;
};


function itemClick(e: any){
  if(e && e.target && e.target.textContent){
    window.localStorage.setItem('disease', e.target.textContent);

  }
}

const GeneralItems = () => {

  let disordersArr:Array<String> = ["Bordetella Bronchiseptica", "Canine Distemper", "Canine Hepatitis", "Canine Parainfluenza"]

  let items = disordersArr.map((x,i) => {
    return (
      <IonItem key={i} routerLink="/information">

        <div className="item-note">
          {x}
        </div>
      </IonItem>
    );
  });
  

  return <IonList>{items}</IonList>;
};

export default ListPage;
