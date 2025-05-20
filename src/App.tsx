import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import React, { useRef } from 'react';
import { isMobile } from 'react-device-detect';
import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import Line from './components/Line/Line';
import Slider from './components/Slider/Slider';
import defaultt from './static/images/default.jpg';
import testEvents from './testEvents'; // Import the test data
import { IEvent } from './types';

import logo from './static/images/BTM.svg';
import logo2 from './static/logo/logo.png';

// Устанавливаем плагины для работы с часовыми поясами
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Moscow');

interface Month {
	id: number;
	title: string;
	color: string;
	count: number;
}

const monthsJSX: Month[] = [
	{ id: 0, title: 'Июнь', color: '#F8B501', count: 5 }, // 5 = май (индексация с 0)
	{ id: 1, title: 'Июль', color: '#A31A30', count: 6 }, // 6 = июнь
	{ id: 2, title: 'Август', color: '#038388', count: 7 }, // 7 = июль
];

const App: React.FC = () => {
	// Use the test data directly
	const data = testEvents;

	const isLoading = false;
	const isError = false;

	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
	const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);

	const scrollToSection = (index: number) => {
		if (isMobile && headingRefs.current[index]) {
			headingRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
		} else {
			sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const getEventsForMonth = (events: IEvent[], monthIndex: number) => {
		const today = dayjs().tz('Europe/Moscow');
		// const today = dayjs('2025-06-01 15:00', 'YYYY-MM-DD HH:mm')
		return events.filter(event => {
			const eventDate = dayjs(event.dateTime).tz('Europe/Moscow');
			return eventDate.month() === monthIndex && eventDate.isAfter(today);
		});
	};

	return (
		<div className={styles.root}>
			{isMobile ? (
				<div className={styles.mobile}>
					<div className={styles.mobileRoot}>
						<div className={styles.mobileTop}>
							<a href={'https://bakhrushinmuseum.ru'}>
								<img src={logo} alt='Логотип' />
							</a>
							<p className={styles.text}>
								Проведи свое лето с пользой!
								<br />
								<span style={{ color: '#A41930' }}>
									Арт-Лето в Бахрушинском музее
								</span>{' '}
								— программа <br /> мастер-классов для детей
							</p>
						</div>
						<a href={'https://bakhrushinmuseum.ru'}>
							<img src={logo2} alt='Логотип 2' />
						</a>
					</div>
					<div className={styles.mobilePanel}>
						{monthsJSX.map((month, index) => (
							<button key={index} onClick={() => scrollToSection(index)}>
								{month.title}
							</button>
						))}
					</div>
				</div>
			) : (
				<>
					<Header scrollToSection={scrollToSection} />
					<Slider />
				</>
			)}
			{isLoading && (
				<>
					{!isMobile ? (
						<Line color={monthsJSX[1].color} word={monthsJSX[1].title} />
					) : (
						<h3 style={{ marginLeft: '1.5vw' }}>{monthsJSX[1].title}</h3>
					)}
					<Grid
						events={[
							{
								id: 0,
								title: 'Мастер-класс «Узоры Гончаровой и лабиринты»',
								duration: 60,
								eventLink: '',
								ticketLink: '',
								rating: 6,
								type: 'Мастер класс',
								description:
									'Ребята познакомятся с эскизами декораций таких знаменитых театральных художников, как Н.Гончарова и И.Билибин. После изучения эскизов декораций к известнейшим спектаклям детям предложат придумать и изобразить свои собственные сценические декорации на воздушной пене яркими красками. Затем все участники перенесут узоры на бумагу и заберут на память яркие рисунки... которым, возможно, предстоит прославиться!',
								imageLink: defaultt,
								dateTime: dayjs().tz('Europe/Moscow'),
							},
							{
								id: 1,
								title: 'Мастер-класс «Узоры Гончаровой и лабиринты»',
								duration: 60,
								eventLink: '',
								ticketLink: '',
								rating: 6,
								type: 'Мастер класс',
								description:
									'Ребята познакомятся с эскизами декораций таких знаменитых театральных художников, как Н.Гончарова и И.Билибин. После изучения эскизов декораций к известнейшим спектаклям детям предложат придумать и изобразить свои собственные сценические декорации на воздушной пене яркими красками. Затем все участники перенесут узоры на бумагу и заберут на память яркие рисунки... которым, возможно, предстоит прославиться!',
								imageLink: defaultt,
								dateTime: dayjs().tz('Europe/Moscow'),
							},
							{
								id: 2,
								title: 'Мастер-класс «Узоры Гончаровой и лабиринты»',
								duration: 60,
								eventLink: '',
								ticketLink: '',
								rating: 6,
								type: 'Мастер класс',
								description:
									'Ребята познакомятся с эскизами декораций таких знаменитых театральных художников, как Н.Гончарова и И.Билибин. После изучения эскизов декораций к известнейшим спектаклям детям предложат придумать и изобразить свои собственные сценические декорации на воздушной пене яркими красками. Затем все участники перенесут узоры на бумагу и заберут на память яркие рисунки... которым, возможно, предстоит прославиться!',
								imageLink: defaultt,
								dateTime: dayjs().tz('Europe/Moscow'),
							},
							{
								id: 3,
								title: 'Мастер-класс «Узоры Гончаровой и лабиринты»',
								duration: 60,
								eventLink: '',
								ticketLink: '',
								rating: 6,
								type: 'Мастер класс',
								description:
									'Ребята познакомятся с эскизами декораций таких знаменитых театральных художников, как Н.Гончарова и И.Билибин. После изучения эскизов декораций к известнейшим спектаклям детям предложат придумать и изобразить свои собственные сценические декорации на воздушной пене яркими красками. Затем все участники перенесут узоры на бумагу и заберут на память яркие рисунки... которым, возможно, предстоит прославиться!',
								imageLink: defaultt,
								dateTime: dayjs().tz('Europe/Moscow'),
							},
						]}
					/>
				</>
			)}
			{!isLoading &&
				!isError &&
				monthsJSX.map((month, index) => {
					const monthEvents = getEventsForMonth(data, month.count);
					if (monthEvents.length === 0) return null;

					return (
						<div key={month.id} ref={el => (sectionRefs.current[index] = el)}>
							{!isMobile ? (
								<Line color={month.color} word={month.title} />
							) : (
								<h3
									style={{ marginLeft: '1.5vw' }}
									ref={el => (headingRefs.current[index] = el)}
								>
									{month.title}
								</h3>
							)}
							<Grid events={monthEvents} />
						</div>
					);
				})}

			<Footer scrollToSection={scrollToSection} />
		</div>
	);
};

export default App;
