import styles from './Slider.module.scss';
import Logo from "./Logo/Logo";



const Slider = () => {
    return <div className={styles.root}>
        <a href={'https://gctm.ru'}><Logo/></a>
        <p className={styles.text}>
            Проведи свое лето с пользой!<br/>
            <span style={{ color: '#A41930'}}>Арт-Лето в Бахрушинском музее</span> — программа <br/> мастер-классов для детей
        </p>
    </div>
};

export default Slider;