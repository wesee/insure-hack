import { IonCard, IonCardTitle, IonIcon, IonCardHeader, IonCardSubtitle, IonCardContent, IonText, IonGrid, IonRow, IonCol, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { add, ellipse, square, triangle, list, warning, umbrella, options } from 'ionicons/icons';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Customised Product</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Customised Product</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>



<IonRow >
	<IonCol size="12" >
		<IonCard >

			<IonCardContent>

				<IonRow>
					<IonCol size="4" vertical-align="middle">
						<img src="/assets/alan.jpg" alt="avatar"/>
					</IonCol>

					<IonCol size="8">
						<IonRow >
							<IonCol size="12">
								<IonText color="dark" >
									<p>Eddie Chin</p>
								</IonText>
								<IonText color="medium">
									<p>Bridge Builder</p>
								</IonText>
							</IonCol>
						</IonRow>

						<IonRow >

							<IonCol >
								
								<IonCardTitle>109</IonCardTitle>
								<IonCardSubtitle>Blood Pressure</IonCardSubtitle>
							</IonCol>

							<IonCol >
								
								<IonCardTitle>60</IonCardTitle>
								<IonCardSubtitle>Blood Sugar Level</IonCardSubtitle>
							</IonCol>
						</IonRow>
					</IonCol>
				</IonRow>		

			</IonCardContent>
		</IonCard>
	</IonCol>
</IonRow>  

          <IonRow>
          	<IonCol size="12">
	          	<IonCard >
		          	<IonCardHeader>
			          	<IonRow>
				          	<IonIcon icon={ add } />
          					<IonCardSubtitle>Smoker</IonCardSubtitle>
	          			</IonRow>
		          	</IonCardHeader>
          			<IonCardContent>
	          			<IonText>
		          			<p>Heavy smoker.  smoke 2 package of cigarrette per day.</p>
			          	</IonText>
          			</IonCardContent>
	          	</IonCard>
          	</IonCol>
          </IonRow>

          <IonRow>
          	<IonCol size="12">
	          	<IonCard >
		          	<IonCardHeader>
			          	<IonRow>
				          	<IonIcon icon={ add } />
          					<IonCardSubtitle>Renovation Worker</IonCardSubtitle>
	          			</IonRow>
		          	</IonCardHeader>
          			<IonCardContent>
	          			<IonText>
		          			<p>Work in dangarous construction site.</p>
			          	</IonText>
          			</IonCardContent>
	          	</IonCard>
          	</IonCol>
          </IonRow>

          <IonRow>
          	<IonCol size="12">
	          	<IonCard >
		          	<IonCardHeader>
			          	<IonRow>
				          	<IonIcon icon={ add } />
          					<IonCardSubtitle>Transport via motorcycle</IonCardSubtitle>
	          			</IonRow>
		          	</IonCardHeader>
          			<IonCardContent>
	          			<IonText>
		          			<p>Ride a motorcycle to work.</p>
			          	</IonText>
          			</IonCardContent>
	          	</IonCard>
          	</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
