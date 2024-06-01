import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../static/images/BTM.svg';
import tg from '../../static/icons/tg.svg';
import vk from '../../static/icons/vk.svg';
import ok from '../../static/icons/ok.svg';
import dz from '../../static/icons/dz.svg';
import rt from '../../static/icons/rt.svg';
import phone from '../../static/icons/phone.svg';

interface HeaderProps {
    scrollToSection: (index: number) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const months = [
        { title: 'Июнь', color: '#F8B501' },
        { title: 'Июль', color: '#A31A30' },
        { title: 'Август', color: '#038388' }
    ];

    return (
        <div className={styles.root}>
            <img className={styles.logo} src={logo} alt="Logo" />
            <ul className={styles.menu}>
                {months.map((month, i) => (
                    <li
                        key={i}
                        onClick={() => scrollToSection(i)}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{ backgroundColor: hoveredIndex === i ? month.color : '#F8B501' }}
                    >
                        {month.title}
                    </li>
                ))}
            </ul>
            <div className={styles.menu}>
                <a href={'https://t.me/bakhrushinmuseum'}><img src={tg} alt="Telegram" /></a>
                <a href={'https://vk.com/bahrushinmuseum'}><img src={vk} alt="VK" /></a>
                <a href={'https://ok.ru/bakhrushinmuseum'}><img src={ok} alt="OK" /></a>
                <a href={'https://dzen.ru/bahrushinmuseum'}><img src={dz} alt="DZ" /></a>
                <a href={'https://rutube.ru/channel/23745556/'}><img src={rt} alt="RT" /></a>
            </div>
            <div className={styles.telephone}>
                <img src={phone} alt="Phone" />
                <div className={styles.col}>
                    <a href="tel:+74994847777">+7 /499/ 484-77-77</a>
                    <a href="tel:+79636594088">+7 963 659 40 88</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
