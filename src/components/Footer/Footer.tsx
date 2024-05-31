import styles from './Footer.module.scss';
import logo from '../../static/images/BTM.svg'

const Footer = () => {
    return <div className={styles.root}>
        <div className={styles.top}>
            <img src={logo} alt={logo}/>
            <div className={styles.contacts}>

            </div>
        </div>
        <div className={styles.bottom}></div>
    </div>
};

export default Footer;