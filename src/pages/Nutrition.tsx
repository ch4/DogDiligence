import './Home.css'
import React from 'react'
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
} from '@ionic/react'
import { book, build, colorFill, grid } from 'ionicons/icons'
import NutritionData from './../dataset/nutrition.json'

const Nutrition: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Nutrition</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {NutritionData.map(({data: {calories, name, packaging }, id}, key) => {
          return <IonItem key={key}>
            {console.log(key)}
            {name}
          </IonItem>
        })}
      </IonList>
    </IonContent>
  </IonPage>
)

export default Nutrition

