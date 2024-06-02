import styles from './Footer.module.scss';
import logo from '../../static/images/BTM.svg'
import tg from "../../static/icons/tg.svg";
import vk from "../../static/icons/vk.svg";
import ok from "../../static/icons/ok.svg";
import dz from "../../static/icons/dz.svg";
import rt from "../../static/icons/rt.svg";
import phone from "../../static/icons/phone.svg";
import search from "../../static/icons/search.svg";
import React from "react";
import { isMobile } from 'react-device-detect';

const months = ['Июнь', 'Июль', 'Август'];

interface HeaderProps {
    scrollToSection: (index: number) => void;
}

const Footer = ({ scrollToSection }: HeaderProps) => {
    return <div className={styles.root}>
        {
            isMobile && <div className={styles.mobilePanel}>
                {
                    months.map((el, index) => <button key={index} onClick={() => scrollToSection(index)}>
                        {el}
                    </button>)
                }
            </div>
        }
        <div className={styles.top}>
            {
                isMobile ? <div className={styles.mobileMMM}>
                    <a href={'https://gctm.ru'}><img src={logo} alt={logo} className={styles.logo}/></a>

                    <div className={styles.telephone}>
                        <img src={phone} alt="Phone"/>
                        <div className={styles.col}>
                            <a href="tel:+74994847777">+7 /499/ 484-77-77</a>
                            <a href="tel:+79636594088">+7 963 659 40 88</a>
                        </div>
                    </div>
                </div> : <a href={'https://gctm.ru'}><img src={logo} alt={logo} className={styles.logo}/></a>
            }


            {
                isMobile ? <div className={styles.contacts}>
                    <img src={search} alt={search}/>
                    <div>
                        <a href={'https://yandex.ru/maps/-/CDf0UVP6'}>Дом-музей М.С. Щепкина
                            Москва, ул. Щепкина, д. 47, стр. 2
                        </a>
                        <a href={'https://yandex.ru/maps/-/CDf0U6mn'} style={{
                            position: 'absolute',
                            marginTop: '50px',
                            right: 0,
                            color: '#828282',
                            textDecoration: 'none'
                        }}>
                            Дом-музей М.Н. Ермоловой
                            Москва, Тверской бульвар, д. 11
                        </a>
                    </div>
                </div> : <div className={styles.contacts}>
                    <div className={styles.first}>
                        <img src={search} alt={search}/>
                        <a href={'https://yandex.ru/maps/-/CDf0UVP6'}>Дом-музей М.С. Щепкина
                            Москва, ул. Щепкина, д. 47, стр. 2
                        </a>
                    </div>
                    <a href={'https://yandex.ru/maps/-/CDf0U6mn'} style={{
                        position: 'absolute',
                        marginTop: '50px',
                        right: 0,
                        color: '#828282',
                        textDecoration: 'none'
                    }}>
                        Дом-музей М.Н. Ермоловой
                        Москва, Тверской бульвар, д. 11
                    </a>
                </div>
            }
            {
                !isMobile && <div className={styles.telephone}>
                    <img src={phone} alt="Phone"/>
                    <div className={styles.col}>
                        <a href="tel:+74994847777">+7 /499/ 484-77-77</a>
                        <a href="tel:+79636594088">+7 963 659 40 88</a>
                    </div>
                </div>
            }
        </div>
        <div className={styles.bottom}>

            <div className={styles.menu}>
                <a href={'https://t.me/bakhrushinmuseum'}><img src={tg} alt="Telegram"/></a>
                <a href={'https://vk.com/bahrushinmuseum'}><img src={vk} alt="VK"/></a>
                <a href={'https://ok.ru/bakhrushinmuseum'}><img src={ok} alt="OK"/></a>
                <a href={'https://dzen.ru/bahrushinmuseum'}><img src={dz} alt="DZ"/></a>
                <a href={'https://rutube.ru/channel/23745556/'}><img src={rt} alt="RT"/></a>
            </div>


        </div>
    </div>
};

export default Footer;