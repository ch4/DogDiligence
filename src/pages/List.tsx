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
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Screen Immediately</IonCardTitle>
            <IonCardSubtitle>At your soonest convenience, please talk to your vet about the following:</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <ListItems />
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Screen Later</IonCardTitle>
            <IonCardSubtitle>See your doctor about this within the next 3 years:</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <ListItems />
          </IonCardContent>
        </IonCard>
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

  const items = [1, 2, 3, 4].map(x => {
    return (
      <IonItem key={x}>
        <IonIcon icon={icons[x - 1]} slot="start" />
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
