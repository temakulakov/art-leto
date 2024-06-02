import React, { useRef } from 'react';
import Header from "./components/Header/Header";
import { useQuery } from "@tanstack/react-query";
import { getList } from "./services/bitrix";
import styles from './App.module.scss';
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import Grid from "./components/Grid/Grid";
import Line from "./components/Line/Line";
import dayjs from 'dayjs';
import { IEvent } from "./types";
import { isMobile } from 'react-device-detect';

interface Month {
    id: number;
    title: string;
    color: string;
    count: number;
}

const monthsJSX: Month[] = [
    { id: 0, title: 'Июнь', color: '#F8B501', count: 6 },
    { id: 1, title: 'Июль', color: '#A31A30', count: 7 },
    { id: 2, title: 'Август', color: '#038388', count: 8 },
];

const App: React.FC = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['list'],
        queryFn: getList
    });

    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollToSection = (index: number) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    };

    const getSortedEvents = (events: IEvent[], month: number) => {
        return events
            .filter(event => dayjs(event.dateTime).month() === month)
            .sort((a, b) => dayjs(a.dateTime).isBefore(b.dateTime) ? -1 : 1);
    };

    console.log(data);

    return (
        <div className={styles.root}>
            {
                isMobile ? <></> : <>
                    <Header scrollToSection={scrollToSection} />
                    <Slider />
                </>
            }
            {isLoading && <>
                {!isMobile ? <Line color={monthsJSX[0].color} word={monthsJSX[0].title} /> : <h3>{monthsJSX[0].title}</h3>}
                <Grid events={[
                    {id: 0, title: 'Мастер-класс «Узоры Гончаровой и лабиринты»', duration: 60, eventLink: '', ticketLink: '', rating: 6, type: 'Мастер класс', description: 'Ребята познакомятся с эскизами декораций таких знаменитых театральных художников, как Н.Гончарова и И.Билибин. После изучения эскизов декораций к известнейшим спектаклям детям предложат придумать и изобразить свои собственные сценические декорации на воздушной пене яркими красками. Затем все участники перенесут узоры на бумагу и заберут на память яркие рисунки... которым, возможно, предстоит прославиться!', imageLink: '', dateTime: dayjs()},
                    {id: 1, title: 'Мастер-класс «Узоры Гончаровой и лабиринты»', duration: 60, eventLink: '', ticketLink: '', rating: 6, type: 'Мастер класс', description: 'Ребята познакомятся с эскизами декораций таких знаменитых театральных художников, как Н.Гончарова и И.Билибин. После изучения эскизов декораций к известнейшим спектаклям детям предложат придумать и изобразить свои собственные сценические декорации на воздушной пене яркими красками. Затем все участники перенесут узоры на бумагу и заберут на память яркие рисунки... которым, возможно, предстоит прославиться!', imageLink: '', dateTime: dayjs()},
                    {id: 2, title: 'Мастер-класс «Узоры Гончаровой и лабиринты»', duration: 60, eventLink: '', ticketLink: '', rating: 6, type: 'Мастер класс', description: 'Ребята познакомятся с эскизами декораций таких знаменитых театральных художников, как Н.Гончарова и И.Билибин. После изучения эскизов декораций к известнейшим спектаклям детям предложат придумать и изобразить свои собственные сценические декорации на воздушной пене яркими красками. Затем все участники перенесут узоры на бумагу и заберут на память яркие рисунки... которым, возможно, предстоит прославиться!', imageLink: '', dateTime: dayjs()},
                    {id: 3, title: 'Мастер-класс «Узоры Гончаровой и лабиринты»', duration: 60, eventLink: '', ticketLink: '', rating: 6, type: 'Мастер класс', description: 'Ребята познакомятся с эскизами декораций таких знаменитых театральных художников, как Н.Гончарова и И.Билибин. После изучения эскизов декораций к известнейшим спектаклям детям предложат придумать и изобразить свои собственные сценические декорации на воздушной пене яркими красками. Затем все участники перенесут узоры на бумагу и заберут на память яркие рисунки... которым, возможно, предстоит прославиться!', imageLink: '', dateTime: dayjs()},
                ]} />
            </>}
            {!isLoading && !isError && monthsJSX.map((month, index) => (
                <div
                    key={month.id}
                    ref={el => sectionRefs.current[index] = el}
                    style={{ height: "fit-content", minHeight: "100px" }}
                >
                    {!isMobile ? <Line color={month.color} word={month.title} /> : <h3>{month.title}</h3>}
                    {data ? (
                        <Grid events={getSortedEvents(data, month.count - 1)} />
                    ) : (
                        <Line color={monthsJSX[0].color} word={monthsJSX[0].title} />
                    )}
                </div>
            ))}
            <Footer />
        </div>
    );
};

export default App;
