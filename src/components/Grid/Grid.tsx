import React from 'react';
import styles from './Grid.module.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import { IEvent } from '../../types';

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
    return (
        <div className={styles.root}>
            {events.map((event, index) => (
                <a href={event.eventLink} className={styles.event} key={index}>
                    <div>
                        <img src={event.imageLink} alt={event.title} className={styles.image}/>
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
                            <p>{event.type}</p>
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
