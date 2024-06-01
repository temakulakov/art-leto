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

    return (
        <div className={styles.root}>
            <Header scrollToSection={scrollToSection} />
            <Slider />
            {isLoading && <h2>Загрузка</h2>}
            {isError && <h2>Ошибка загрузки</h2>}
            {!isLoading && !isError && monthsJSX.map((month, index) => (
                <div
                    key={month.id}
                    ref={el => sectionRefs.current[index] = el}
                    style={{ height: "fit-content", minHeight: "100px" }}
                >
                    <Line color={month.color} word={month.title} />
                    {data ? (
                        <Grid events={data.filter(event => dayjs(event.dateTime).month() === month.count - 1)} />
                    ) : (
                        <h2>Загрузка</h2>
                    )}
                </div>
            ))}
            <Footer />
        </div>
    );
};

export default App;
