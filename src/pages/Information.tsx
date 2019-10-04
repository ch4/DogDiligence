import { IonButton, IonLabel, IonToggle, IonButtons, IonContent, IonCard, IonCardHeader, IonCardSubtitle,IonCardTitle, IonCardContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import React from 'react';
import disordersInformation from './../dataset/disordersInfo.json';
import './Home.css';

const InformationPage: React.FC = () => {
  let disease = window.localStorage.getItem('disease')
  let diseaseObj: any = disease && disordersInformation.disorderInfo;
  let specificDiseaseObj: any = null;
  if(disease !== null){
    specificDiseaseObj = diseaseObj[disease];
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Screening Details</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="info-content">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{disease ? disease : ""}</IonCardTitle>
              {/* <IonCardSubtitle>OMG YOUR DOG IS GOING TO DIE...</IonCardSubtitle> */}
              
            </IonCardHeader>

            <IonCardContent>
            
            {/* Degenerative myelopathy (DM) is a relatively uncommon neurological disease characterized by progressive weakness and loss of normal function in the hind limbs of affected dogs. In DM, the loss of myelin (the tissue surrounding the nerves) and the degeneration of axons (nerve endings) leads to the symptoms seen in this disease. Ultimately, the origin of these symptoms is unknown but a genetic predisposition is assumed. An aberrant immune response may be responsible but is as yet merely hypothesized. The mode of inheritance is also unknown. */}
            {specificDiseaseObj ? specificDiseaseObj.Desc : ""}
            </IonCardContent>

            <IonCardContent>
            <div style={{marginBottom: '1em'}}>
            <img src="assets/steth.png"/>
          </div>
              <div>
                <span><strong>Treatment Cost: </strong></span>
                {/* <span>$2000</span> */}
                <span>{specificDiseaseObj ? '$ ' +specificDiseaseObj.Cost : ""}</span> 
              </div>
            </IonCardContent>
            <IonCardContent color="secondary">
              <div>
                <span><strong><a id="disLink" style={{color: '#433E3F', fontWeight: 200, fontStyle: 'italic'}} href={specificDiseaseObj ? specificDiseaseObj.Link : ""}>More Information</a></strong></span>
              </div>
            </IonCardContent>

              <IonList>
                  <IonItem>
                      <IonLabel>Set Appointment at 2/4/20?</IonLabel>
                      <IonToggle value="pepperoni" color="danger" onChange={() => {}} />
                  </IonItem>
                  <IonItem>
                      <IonButton class="info_buttons" expand="block" color="tertiary" routerLink="/plaid">Plan Payment</IonButton>
                      <IonButton class="info_buttons" expand="block" color="success" routerLink="/map">Find Vet Nearby</IonButton>
                  </IonItem>
              </IonList>

          </IonCard>
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
