import { IonButtons, IonContent, IonCard, IonCardHeader, IonCardSubtitle,IonCardTitle, IonCardContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import React from 'react';

const ListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
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
            <ListItems />
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
  const icons = [
    flask,
    wifi,
    beer,
    football,
    basketball,
    paperPlane,
    americanFootball,
    boat,
    bluetooth,
    build
  ];

  const items = [1, 2].map(x => {
    return (
      <IonItem key={x} routerLink="/information">
        {/* <IonIcon icon={icons[x - 1]} slot="start" /> */}
        Dog HIV {x}
        <div className="item-note" slot="end">
          {/* This is item # {x} */}
          Dog HIV is caused by...
        </div>
      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default ListPage;
