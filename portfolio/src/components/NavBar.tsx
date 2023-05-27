import { IonToolbar, IonButton} from "@ionic/react";
import style from "./NavBar.module.css"
import logo from "/images/fatmonkeeLogo.jpeg";

const NavBar: React.FC = () => {
    return (

        <IonToolbar className={style.navigaion}>
        <img src={logo} className={style.logo}/>
        <IonButton>Home</IonButton>
        <IonButton>Resume</IonButton>
        <IonButton>Portfolio</IonButton>
        <IonButton>Contact</IonButton>
        <IonButton>Login</IonButton>
        </IonToolbar>
    );
  };
  
  export default NavBar;