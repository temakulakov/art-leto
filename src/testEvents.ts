import dayjs from 'dayjs';
import { IEvent } from './types';

const testEvents: IEvent[] = [
	{
		id: 1,
		title: 'Твистер от Экстер',
		ticketLink:
			'https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/5985/2024-08-01/15:00:00',
		eventLink:
			'https://www.bakhrushinmuseum.ru/event/master-klass-tvister-ot-ekster-6/',
		dateTime: dayjs('01.06.25 15:00', 'DD.MM.YY HH:mm'),
		duration: 90,
		rating: 6,
		imageLink:
			'https://www.bakhrushinmuseum.ru/wp-content/uploads/2024/06/tvister-ot-ekster.jpg',
		type: 'Мастер-класс',
		description:
			'Твистер – популярная игра, в которой участники перемещаются по цветным кругам на белом поле. А знаете ли вы, что первый твистер был из квадратов? Участникам мастер-класса предстоит вдохновиться творчеством Александры Экстер, рассмотреть разные геометрические формы и контрастные цветовые сочетания в эскизах декораций и костюмов. А затем сделать твистер в стиле Экстер, поиграть в него и нарисовать свой шедевр, выбирая цвета в продолжение веселой игры.',
	},
	{
		id: 2,
		title: '«Подводный мир» в технике «мокрый лист и монотипия»',
		ticketLink:
			'https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/5989/2024-08-03/12:00:00',
		eventLink:
			'https://www.bakhrushinmuseum.ru/event/semejnyj-master-klass-podvodnyj-mir-v-tehnike-mokryj-list-i-monotipiya-6/',
		dateTime: dayjs('03.08.25 12:00', 'DD.MM.YY HH:mm'),
		duration: 90,
		rating: 6,
		imageLink:
			'https://www.bakhrushinmuseum.ru/wp-content/uploads/2024/06/photo1717060771-7.jpeg',
		type: 'Семейный мастер-класс',
		description:
			'Участники смогут погрузиться в мир сказки и одноименного балета «Конек-горбунок», а затем создать свое подводное царство, используя технику мокрого листа и монотипии по мотивам эскиза декорации художника-новатора XIX века Андрея Роллера к балету «Конек-горбунок».',
	},
	{
		id: 3,
		title: '«Бутафоры – что за люди?» ',
		ticketLink:
			'https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/5993/2024-08-07/15:00:00',
		eventLink:
			'https://www.gctm.ru/event/master-klass-butafory-chto-za-lyudi-3/',
		dateTime: dayjs('07.08.25 15:00', 'DD.MM.YY HH:mm'),
		duration: 60,
		rating: 3,
		imageLink:
			'https://www.bakhrushinmuseum.ru/wp-content/uploads/2024/06/gctm_sky_020624_4378.jpg',
		type: 'Мастер-класс',
		description:
			'Мастер-класс познакомит детей и их родителей с одной из важнейших профессий в театре – бутафорской. Бутафоры изготавливают предметы, похожие на настоящие, но из более легких и недорогих материалов. Так, рыцарские доспехи делаются из картона, овощи и фрукты – из бумаги, оружие – из дерева. Участники мастер-класса создадут театральную маску, которую потом заберут с собой на память. А источником вдохновения будут эскизы масок из фондов Бахрушинского музея.',
	},
	{
		id: 4,
		title: '«Маско́ты Бахрушинского» ',
		ticketLink:
			'https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/5997/2024-08-14/15:00:00',
		eventLink:
			'https://www.bakhrushinmuseum.ru/event/master-klass-maskoty-bahrushinskogo-3/',
		dateTime: dayjs('14.08.25 17:00', 'DD.MM.YY HH:mm'),
		duration: 60,
		rating: 3,
		imageLink:
			'https://www.bakhrushinmuseum.ru/wp-content/uploads/2024/06/390.jpg',
		type: 'Мастер-класс',
		description:
			'Персонаж-талисман, маско́т — практически любой узнаваемый персонаж, являющийся символом. На мастер-классе дети узнают происхождение слов «талисман», «маскот». А также создадут свои красочные маскоты из полимерной глины, используя образцы из фондов музея.',
	},
	{
		id: 5,
		title: 'Маски театра Кабуки',
		ticketLink:
			'https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/6001/2024-08-17/12:00:00',
		eventLink:
			'https://www.bakhrushinmuseum.ru/event/semejnyj-master-klass-maski-teatra-kabuki-6/',
		dateTime: dayjs('17.08.25 12:00', 'DD.MM.YY HH:mm'),
		duration: 90,
		rating: 6,
		imageLink:
			'https://www.bakhrushinmuseum.ru/wp-content/uploads/2024/06/1469eaa5-91c7-4ca4-b1d3-4481289e0ea3-1.jpg',
		type: 'Семейный мастер-класс',
		description:
			'Участники познакомятся с важной ролью театрального грима в жизни каждого артиста, а также смогут создать серию уникальных театральных масок по мотивам эскизов середины XIX века, созданных для японского театра кабуки.',
	},
	{
		id: 6,
		title: 'Коровин и мемо',
		ticketLink:
			'https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/6005/2024-08-21/15:00:00',
		eventLink:
			'https://www.bakhrushinmuseum.ru/event/master-klass-korovin-i-memo-6/',
		dateTime: dayjs('21.08.25 15:00', 'DD.MM.YY HH:mm'),
		duration: 90,
		rating: 6,
		imageLink:
			'https://www.bakhrushinmuseum.ru/wp-content/uploads/2024/06/photo1717060771-7.jpeg',
		type: 'Мастер класс',
		description:
			'Константин Коровин – художник, который воспринимал оформление сцены не просто как «музыку для глаз», что само по себе было очень смело, но и как «чистое» искусство. Участники рассмотрят его эскизы декораций и сделают настольную игру «мемо» в духе великого художника, в которую и поиграют всей веселой компанией. И, конечно же, порисуют: создадут картину в стиле Константина Коровина.',
	},
	{
		id: 7,
		title: 'Театральная вечеринка ',
		ticketLink:
			'https://www.bakhrushinmuseum.ru/buy-tickets/#/buy/event/5961/2024-08-24/12:00:00',
		eventLink:
			'https://www.bakhrushinmuseum.ru/event/teatralnaya-vecherinka-6-2/',
		dateTime: dayjs('24.08.25 12:00', 'DD.MM.YY HH:mm'),
		duration: 120,
		rating: 6,
		imageLink:
			'https://www.bakhrushinmuseum.ru/wp-content/uploads/2024/06/218_1.jpg',
		type: 'Мастер класс',
		description:
			'Мероприятие, где дети будут артистами, сценаристами, художниками, костюмерами и даже гримерами! Придумают свой спектакль, узнают, с чего начинался театр, нарисуют билеты, продумают грим - и каждый выйдет на сцену как артист. В программе: театральные игры, импровизации, работа с микрофоном и настоящий спектакль-сказка, где каждый ребенок сможет сыграть своего персонажа, а родители будут зрителями или даже участниками. Это будет театр, где играют дети, но интересно и взрослым.',
	},
];

export default testEvents;
