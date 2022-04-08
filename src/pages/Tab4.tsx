import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const History: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">History</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
           <IonItem>
             <IonLabel>
               <h2>Farmer Package Policy</h2>
               <p>2022 Jan 01</p>
               <h3>RM15,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Livestock Insurance</h2>
               <p>2022 Jan 15</p>
               <h3>RM1,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Poultry Insurance</h2>
               <p>2022 Feb 13</p>
               <h3>RM1,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Rural Insurance</h2>
               <p>2022 Mar 10</p>
               <h3>RM20,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Rural Daily Accident Policy</h2>
               <p>2022 Mar 10</p>
               <h3>RM1,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Rural Daily Accident Policy</h2>
               <p>2022 Mar 10</p>
               <h3>RM1,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Rural Daily Accident Policy</h2>
               <p>2022 Mar 10</p>
               <h3>RM1,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Rural Daily Accident Policy</h2>
               <p>2022 Mar 10</p>
               <h3>RM1,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Poultry Insurance</h2>
               <p>2022 Feb 13</p>
               <h3>RM30,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Rural Insurance</h2>
               <p>2022 Mar 10</p>
               <h3>RM10,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Rural Daily Accident Policy</h2>
               <p>2022 Mar 10</p>
               <h3>RM1,000.00</h3>
             </IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel>
               <h2>Rural Daily Accident Policy</h2>
               <p>2022 Mar 10</p>
               <h3>RM1,000.00</h3>
             </IonLabel>
           </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default History;
