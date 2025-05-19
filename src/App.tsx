import dayjs from 'dayjs';
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

const months = ['Июнь', 'Июль', 'Август'];

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

	const getSortedEvents = (events: IEvent[], month: number) => {
		return events
			.filter(event => dayjs(event.dateTime).month() === month)
			.sort((a, b) => (dayjs(a.dateTime).isBefore(b.dateTime) ? -1 : 1));
	};

	const getFutureEvents = (events: IEvent[]) => {
		const today = dayjs();
		return events.filter(event => dayjs(event.dateTime).isAfter(today));
	};

	const renderMonthSection = (
		month: Month,
		events: IEvent[],
		index: number
	) => {
		const futureEvents = getFutureEvents(events);
		if (futureEvents.length === 0) return null;

		return (
			<div
				key={month.id}
				ref={el => (sectionRefs.current[index] = el)}
				style={{ height: 'fit-content', minHeight: '100px' }}
			>
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
				<Grid events={futureEvents} />
			</div>
		);
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
						{months.map((el, index) => (
							<button key={index} onClick={() => scrollToSection(index)}>
								{el}
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
								dateTime: dayjs(),
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
								dateTime: dayjs(),
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
								dateTime: dayjs(),
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
								dateTime: dayjs(),
							},
						]}
					/>
				</>
			)}
			{!isLoading &&
				!isError &&
				monthsJSX.map((month, index) => (
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
						{data &&
						getFutureEvents(getSortedEvents(data, month.count - 1)).length >
							0 ? (
							<Grid
								events={getFutureEvents(getSortedEvents(data, month.count - 1))}
							/>
						) : null}
					</div>
				))}

			<Grid events={data} />
			<Footer scrollToSection={scrollToSection} />
		</div>
	);
};

export default App;
