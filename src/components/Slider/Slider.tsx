import styles from './Slider.module.scss';
import Logo from "./Logo/Logo";



const Slider = () => {
    return <div className={styles.root}>
        <Logo/>
        <p className={styles.text}>
            Проведи свое лето с пользой!<br/>
            Арт-Лето в Бахрушинском музее — программа <br/> мастер-классов для детей
        </p>
    </div>
};

export default Slider;