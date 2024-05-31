import styles from './Header.module.scss';
import logo from '../../static/images/BTM.svg';
import tg from '../../static/icons/tg.svg';
import vk from '../../static/icons/vk.svg';
import ok from '../../static/icons/ok.svg';
import dz from '../../static/icons/dz.svg';
import rt from '../../static/icons/rt.svg';
import phone from '../../static/icons/phone.svg';


const Header = () => {
    const months = ['Июнь', 'Июль', 'Август']
    return <div className={styles.root}>
        <img className={styles.logo} src={logo} alt={logo}/>
        <ul className={styles.menu}>
            {
                months.map((month, i) => <li>{month}</li>)
            }
        </ul>
        <div className={styles.menu}>
            <a><img src={tg} alt={tg}/></a>
            <a><img src={vk} alt={vk}/></a>
            <a><img src={ok} alt={ok}/></a>
            <a><img src={dz} alt={dz}/></a>
            <a><img src={rt} alt={rt}/></a>
        </div>
        <div className={styles.telephone}>
            <img src={phone} alt={phone}/>
            <div className={styles.col}>
                <a>+7 /499/ 484-77-77</a>
                <a>+7 963 659 40 88</a>
            </div>
        </div>

    </div>
};

export default Header;