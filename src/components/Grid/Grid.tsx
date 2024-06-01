import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Grid.module.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import { IEvent } from '../../types';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

// Устанавливаем плагины
dayjs.extend(advancedFormat);
dayjs.extend(updateLocale);

// Настраиваем локализацию для отображения месяцев в родительном падеже
dayjs.updateLocale('ru', {
    months: [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ]
});

interface GridProps {
    events: IEvent[]
}

const Grid = ({ events }: GridProps) => {
    // const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    //     console.error('Image failed to load:', e.currentTarget.src);
    //     e.currentTarget.src = '/path/to/default/image.jpg'; // Путь к изображению-заглушке
    // };

    return (
        <div className={styles.root}>
            {events.map((event, index) => (
                <a href={event.eventLink} className={styles.event} key={index}>
                    <div>
                        <div className={styles.imageContainer}>
                            <LazyLoadImage
                                src={event.imageLink}
                                alt={event.title}
                                // effect='blur'
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.panel}>
                            <div className={styles.dateTime}>
                                <span>{dayjs(event.dateTime).locale('ru').format('DD MMMM')}</span>
                                <p>{dayjs(event.dateTime).locale('ru').format('HH:mm')}</p>
                            </div>
                            <div className={styles.dateTime}>
                                <p>{event.duration} мин.</p>
                            </div>
                            <div className={styles.dateTime}>
                                {event.rating} +
                            </div>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.type}>{event.type}</p>
                            <p className={styles.title}>{event.title}</p>
                            <p className={styles.description}>{event.description}</p>
                        </div>
                    </div>
                    <div className={styles.btnGroup}>
                        <a href={event.ticketLink} className={styles.btn}>Билет</a>
                        <a href={event.eventLink} className={styles.btn}>Подробнее</a>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Grid;
