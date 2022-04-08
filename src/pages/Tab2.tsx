import { IonButton, IonButtons, IonCard, IonCardContent, IonModal, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { arrowForward, arrowUndoOutline, contractOutline, closeCircle, checkmarkCircle } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {



  const features = [

    {
      label: "Total Cholesterol",
      icon: closeCircle
    },
    {
      label: "HDL (Good)",
      icon: checkmarkCircle
    },
    {
      label: "LDL (Bad)",
      icon: checkmarkCircle
    },
    {
      label: "TC/HDL Ratio",
      icon: checkmarkCircle
    },
    {
      label: "Triglycerides (Fat)",
      icon: closeCircle
    }
  ];

  const factors = [
    {
      label: "Safty in workplace",
      icon: closeCircle
    },
    {
      label: "Safty signs, symbols, and labels",
      icon: closeCircle
    },
    {
      label: "Hazardous materials",
      icon: closeCircle
    },
  ];

  const Feature = ( { feature }: any ) => (

    <IonItem lines="none">
      <IonIcon icon={ feature.icon } />
      <IonLabel >{ feature.label }</IonLabel>
    </IonItem>
  );  



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Risk Reasoning</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Risk Reasoning</IonTitle>
          </IonToolbar>
        </IonHeader>


<IonCard>
  <IonCardContent>

    <IonRow >
      <IonCol size="3">
        <img src="/assets/icons/dashboard_ionicreacthub.png" width="80" height="80" alt="icon" />
      </IonCol>

      <IonCol size="9">
        <IonCardTitle>Health Scorecard</IonCardTitle>
        <p>Track your helath scores</p>
      </IonCol>
    </IonRow>

    <IonList>
      { features.map((feature, index) => <Feature key={ index } feature={ feature } /> )}
    </IonList>
  </IonCardContent>
</IonCard>


<IonCard>
  <IonCardContent>

    <IonRow >
      <IonCol size="3">
        <img src="/assets/icons/dashboard_ionicreacthub.png" width="80" height="80" alt="icon" />
      </IonCol>

      <IonCol size="9">
        <IonCardTitle>Occupational Scorecard</IonCardTitle>
        <p>Environmental safety matrix</p>
      </IonCol>
    </IonRow>

    <IonList>
      { factors.map((feature, index) => <Feature key={ index } feature={ feature } /> )}
    </IonList>
  </IonCardContent>
</IonCard>


<IonCard>
  <IonCardContent>
    <p>Proposed package:</p>
    <IonCardTitle>Personal Accident Package</IonCardTitle>
    <h2>Premium  RM12,000.00</h2>
  </IonCardContent>
</IonCard>	

<IonCard>
  <IonCardContent>
    <IonCardTitle>Ready to go onboard?</IonCardTitle>
    <IonButton expand="block">GET PROTECTED</IonButton>
  </IonCardContent>
</IonCard>	

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
