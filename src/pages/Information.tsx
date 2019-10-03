import { IonButton, IonLabel, IonToggle, IonButtons, IonContent, IonCard, IonCardHeader, IonCardSubtitle,IonCardTitle, IonCardContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import React from 'react';

const InformationPage: React.FC = () => {
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
            <IonCardTitle>DISEASE A</IonCardTitle>
            <IonCardSubtitle>OMG YOUR DOG IS GOING TO DIE...</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </IonCardContent>

            <IonList>
                <IonItem>
                    <IonLabel>Set Reminder to see Doctor at 2/4/20?</IonLabel>
                    <IonToggle value="pepperoni" color="danger" onChange={() => {}} />
                </IonItem>
                <IonItem>
                    <IonButton expand="block" color="success" routerLink="/map">Find Vet Nearby</IonButton>
                </IonItem>
            </IonList>

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

export default InformationPage;
