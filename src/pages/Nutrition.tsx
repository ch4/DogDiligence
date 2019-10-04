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
    IonButton,
    IonNote
} from '@ionic/react'
import { book, build, colorFill, grid } from 'ionicons/icons'
import NutritionData from './../dataset/nutrition.json'

const limit = 100
let page = 0

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
        {NutritionData.slice(limit*page, limit*(page+1)).map(({data: {calories, name, packaging }, id}, key) => {
          return <IonItem key={key}>
            <IonLabel>{name}</IonLabel>
            <IonNote slot="end">Calories: {calories}</IonNote>
          </IonItem>
        })}
      </IonList>
    </IonContent>
  </IonPage>
)

export default Nutrition

