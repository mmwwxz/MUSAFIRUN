import ChonKemin from '../assets/Chon-Kemin.jpeg'
import AlaArcha from '../assets/ala_archa_kyrgyzstan.jpg'
import Alamedin from '../assets/alamedin.jpg'
import Bishkek from '../assets/bishkek.jpg'
import Chunkurchak from '../assets/chunkurchak.jpg'
import Fire from '../assets/icons/fireImg.svg'
import Kegety from '../assets/kegety.jpg'
import Konorchak from '../assets/konorchak.jpg'
import KanyonSkazka from '../assets/skazka.jpg'
import TooAshuu from '../assets/tooashuu.jpg'

import alaArcha6 from '../assets/ala-archa-gorge.jpg'
import alaArcha1 from '../assets/ala_archa1.jpg'
import alaArcha2 from '../assets/alaarcha2.jpg'
import alaArcha3 from '../assets/alaarcha3.jpg'
import alaArcha4 from '../assets/alaarcha4.webp'
import alaArcha5 from '../assets/alaarcha6.jpg'

const cardsInfo = [
	{
		id: 1,
		img: Bishkek,
		alt: 'bishkek',
		title: 'Чудеса Бишкека',
		text: 'Однодневный тур по городу Бишкек с его удивительной историей и прекрассными достопримечательностями. ',
		additionalText:
			'Весь день полностью посвящен экскурсии по Бишкеку. Вы посетите Площадь Победы, Дубовый Парк, Центральную Площадь Ала-Тоо, Национальную Филармонию и другие достопри-мечательности. Однако, экскурсия по Бишкеку не будет считаться полноценной без посещения нашего колоритного Азиатского Базара!',
		search: 'Бишкек',
		variant: 'Индивидуальный',
		fireImg: Fire,
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Транспорт - 15 300 сом с группы',
				price:
					'Здесь вы сможете найти все виды товаров и сделать много динамичных фотографий.',
				price1: 'Транспорт - 9 300 сом',
				price2: 'Гид - 6 000 сом',
			},
		],
	},
	{
		id: 2,
		img: ChonKemin,
		alt: 'kemin',
		title: 'Ущелье Чон-Кемин',
		text: 'Вы будете кататься на лошадях как настоящие кочевники и откроете для себя много чудесных видов.',
		additionalText:
			'150 км в одну сторону Чон Кемин - природные парк Кыргызстана. который славится своими удивительными горала! Вы будете кататься на лошадях как настоящие кочевники и увидите к#юго чудеса к видов. Ваш маршрут будет пролегать высоко в горах, вы сможете проехать на лошаде даже сквозь гор**»й лес. На вершине вы будете любоваться панорамным видом ущелья. После прогулки отправитесь в деревню, чтобы пообедать в доме у местной семьи. Возвращение в Бишкек.',
		search: 'Бишкек',
		variant: 'Групповой',
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Транспорт - 15 300 сом с группы',
				price: 'Гид - 6 800 сом с группы',
				price1:
					'Конюх на ноне • 1 000 сом с группы (1 конюх на группу из 5 человек!',
				price2: '1 лошадь на 1 туриста - 900 сом',
				price3: 'Обед у местной семьи - 500 сом с человека',
			},
		],
	},
	{
		id: 3,
		img: Konorchak,
		alt: 'konorchak',
		title: 'Каньон Конорчек',
		text: 'Откройте для себя волшебство Иссык-Куля во всем его великолепии с нашим четырехдневным туром вокруг озера.',
		additionalText:
			'120 км в одну сторону Сегодня мы поедем в знаменитое Боомское ущелье. Внутри ущелья есть впечатляющий каньон с необычными красю>**и скальными образованиями. У вас будет чудесная пешая прогулка по каньону Конорчек. Дорога до этого места занимает около 2 часов в одну сторону. Вы можете потратить еще одт час на прогулку, чтобы насладиться паморам+ым видом. Маршрут к Красному каююиу не сложный. Он проходит вдо/ъ удивительных скалистых гор. Вам нужно будет трижды пересечь несколько бо/ышх камней. После прогулки мы поедем обратно в Бишкек. ',
		search: 'Ыссык-Көл',
		variant: 'Групповой',
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Транспорт - 12 750 сом с группы',
				price: 'Гид - 6 000 сом с группы',
			},
		],
	},
	{
		id: 4,
		img: Kegety,
		alt: 'Kegety',
		title: 'Ущелье Кегеты',
		text: '90 км в одну сторону Сегодня вы посетите удивительное ущелье Кегеты.',
		additionalText:
			'90 км в одну сторону Сегодня вы посетите удивительное ущелье Кегеты. Здесь можно совершить короткую прогулку к водопаду высотой около 20 м. Также есть красивое озеро Коль Тор с бирюзовой водой, расположенное на высоте 2 725 м и доступное только для опытных путешественников и с гидом. Территория ущелья покрыта степными высокотравными лугами, а также деревьями лесного и кустарного типа. На склонах ущелья растет много полезных лекарственных трав»',
		search: 'Бишкек',
		variant: 'Групповой',
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'После прогулки мы вернемся в Бишкек',
				price: 'Транспорт - 12 000 сом с группы',
				price1: 'Гид - 6 000 сом с группы',
			},
		],
	},
	{
		id: 5,
		img: KanyonSkazka,
		alt: 'skazka',
		title: 'Сказочный Каньон ',
		text: 'На южном берегу Ыссык-Куля есть необычное место - Каньон Сказка. Место безусловное волшебное, полное тайн и очарования.',
		additionalText:
			'300 км в одну сторону, На южном берегу озера Исськ Куль есть необычное место * каньон Сказка. Эти каньоны образовались миллионы лет назад в результате эрозии почвы, а ветер и вода придали им невероятный вид. Незря их назвали -Сказка-. ►\tМесто, безусловно, волшебное, полное тайн и очарования. Еоы пройтись по цепочке каньонов, можно заметить сходство песчаников с животными, достопримечательностями или персонажами из легенд. Это идеальное место для отдыха. Вы также можете потратить один час и искупаться на диком пляже. После - возвращение в Бишкек.',
		search: 'Ыссык-Көл',
		variant: 'Групповой',
		fireImg: Fire,
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Транспорт • 31 500 сом с группы',
				price: '8 500 сом с группы',
				price1: 'Гид - 6 000 сом с группы',
				price2: 'Входные билеты - 400 сом с человека',
				price3: 'Орлиная охота • 10 000 сом с группы',
			},
		],
	},
	{
		id: 6,
		img: TooAshuu,
		alt: 'tooAshuu',
		title: 'Перевал Тоо-Ашуу',
		text: 'Фантастические дороги, потрясающие виды,кочевники и высокие горы. Будьте уверены, что ваши воспоминания о Кыргызстане останутся на всю жизнь.',
		additionalText:
			'Сегодня вы отправитесь на перевал Тоо Ашуу высотой более 3 000 метров! Он соединяет северную и южную части Кыргызстана. Во время вашего переезда будьте готовы к потрясающим видам впечатляющих гор и ущелий. Эта дорога считается одной из самых красивых в Кыргызстане. У вас будут фотостолы, чтобы сделать красивые снимки Суусамырской до/мюи. Фантастические дороги, потрясающие виды, кочевники, и высокие горы Будьте уверены, что ваши воспоминания о Кыргызстане останутся на всю жизнь. На перевале всегда ветрено, а горы круглый год покрыты ледяньми шапками. При этом воздух на перевале очень свежий и чистый. После прогулки - трансфер в Бишкек.',
		search: 'Бишкек',
		variant: 'Индивидуальный',
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Транспорт -14 500 сом с группы -',
				price: '8 500 сом с группы',
			},
		],
	},
	{
		id: 7,
		img: Alamedin,
		alt: 'alamedin',
		title: 'Ущелье Аламедин',
		text: 'Уникальное путешествие в Ущелье Аламедин.Горы в этом ущелье покрыты елями и по всему маршруту протекает река которая заканчивается водопадом стекающим со скалистых гор.',
		additionalText:
			'35 км в одну сторону Сегодня вы посетите ущелье Аламедин. Во время прогулки по этому удивительному ущелью можно увидеть крупный рогатый скот и юрты, которые являются жилищами кочевников. Горы в этом ущелье покрыты елями и по всему маршруту протекает горная река, которая заканчивается водопадом, стекающим со скалистых гор. Возле этого водопада можно устроить пикник. Это отличный шанс отдохнуть вдали от цивилизации и насладиться видами матушки-природы.',
		search: 'Бишкек',
		variant: 'Групповой',
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'После прогулки мы вернемся в Бишкек. ',
				price: 'Транспорт - 8 500 сом с группы',
			},
		],
	},
	{
		id: 8,
		img: AlaArcha,
		alt: 'alaArcha',
		title: 'Тур в ущелье Ала Арча',
		text: 'Откройте для себя удивительную красоту национального парка Ала-Арча. Природный парк Ала-Арча - высокогорный национальный парк который находится у подножья горной цепи Тянь-Шань в Кыргызстане ',
		additionalText:
			'Природный парк Ала-Арча -высокогорный национальный парк , который находится\n' +
			'у подножья горной цепи Тянь-Шань в Кыргызстане. В советское время только привилегированные люди могли имели право посещать это место. Вы можете сделать небольшой пеший тур, что бы насладиться пано-рамным видом ущелья. По желанию вы можете отправиться в поход немного дальше, чтобы увидеть живописный горный водопад. Можно не ходить по горным тропам , а просто пройтись по асфальтированной \n' +
			'дорожке вдоль ущелья.',
		search: 'Бишкек',
		variant: 'Групповой',
		fireImg: Fire,
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourPlan: [
			{
				label: 'Встреча в отеле:',
				text: 'Забираем вас из вашего отеля в Бишкеке утром 09:00 (или в любое удобное время).',
			},
			{
				label: 'Переезд в Национальный Парк Ала-Арча:',
				text: 'Путешествие начинается с поездки в национальный парк, который находится всего в 40 км от города.',
			},
			{
				label: 'Прибытие в ущелье Ала-Арча:',
				text: 'Вас ожидают живописные пейзажи ущелья с горной рекой Ала-Арча, снежными вершинами и арчовыми склонами.',
			},
			{
				label: 'Время для прогулки или треккинга:',
				text: 'Предоставляется 3 часа для легкой прогулки по ущелью с гидом. Для тех, кто желает более длительного трека (например, до Водопада или Хижины Рацека), возможно удлинение тура (за дополнительную плату).',
			},
			{
				label: 'Возвращение в Бишкек:',
				text: 'После прогулки мы организуем трансфер обратно до вашего отеля.',
			},
		],
		tourSchedule: [
			{
				title: 'Транспорт (включая входные билеты) -',
				price: '8 500 сом с группы',
				price1: 'Гид - 6 000 сом с группы',
			},
		],
	},
	{
		id: 9,
		img: Chunkurchak,
		alt: 'chunkurchak',
		title: 'Тур в ущелье Чункурчак',
		text: 'Ущелье Чункурчак одно из самых маленьких но красивейших ущелий Кыргызстана.После прогулки по ущелью можно пообедать в этно-ресторане “Супара Чункурчак”',
		additionalText:
			'40 км в одну сторону. Ущелье Чункурчак - одно из самых маленьких, но красивейших ущелий Кыргызстана. Это уникальное место «жайлоо», где можно найти сказочную долину, на горизонте которой виднеются снежные вершины величественных гор. У подножия горных склонов, перемежающихся альпийскими лугами и лесополосами, состоящими из можжевельника, сосны, лиственницы, березы, рябины и многочисленных видов кустарников журчит горная река. После прогулки вы можете пообедать в этно- ресторане «Супара Чункурчак-.',
		search: 'Бишкек',
		variant: 'Групповой',
		fireImg: Fire,
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Транспорт - 8 500 сом с группы',
				price: 'Гид - 6 000 сом с группы',
			},
		],
	},
]

const cardsInfoEn = [
	{
		id: 1,
		img: Bishkek,
		alt: 'bishkek',
		title: 'Wonders of Bishkek',
		text: 'A one-day tour around the city of Bishkek with its amazing history and beautiful attractions.',
		additionalText:
			'The entire day is dedicated to exploring Bishkek. You will visit Victory Square, Oak Park, Ala-Too Square, the National Philharmonic, and other landmarks. However, no tour of Bishkek would be complete without visiting our colorful Asian Bazaar!',
		search: 'Bishkek',
		variant: 'Individual',
		fireImg: Fire,
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Transport - 15,300 som per group',
				price:
					'Here you can find all kinds of goods and take many dynamic photos.',
				price1: 'Transport - 9,300 som',
				price2: 'Guide - 6,000 som',
			},
		],
	},
	{
		id: 2,
		img: ChonKemin,
		alt: 'kemin',
		title: 'Chon-Kemin Gorge',
		text: 'You will ride horses like real nomads and discover many wonderful views.',
		additionalText:
			'150 km one way, Chon Kemin - a natural park in Kyrgyzstan, famous for its amazing mountains! You will ride horses like real nomads and see the wonders of nature. Your route will pass high in the mountains; you can even ride through mountain forests. At the top, you will enjoy a panoramic view of the gorge. After the ride, you will have lunch at a local familys house. Return to Bishkek.',
		search: 'Bishkek',
		variant: 'Group',
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Transport - 15,300 som per group',
				price: 'Guide - 6,800 som per group',
				price1:
					'Horse guide - 1,000 som per group (1 horse guide per group of 5 people)',
				price2: '1 horse per tourist - 900 som',
				price3: 'Lunch with a local family - 500 som per person',
			},
		],
	},
	{
		id: 3,
		img: Konorchak,
		alt: 'konorchak',
		title: 'Konorchak Canyon',
		text: 'Discover the magic of Issyk-Kul in all its splendor with our four-day tour around the lake.',
		additionalText:
			'120 km one way. Today we will visit the famous Boom Gorge. Inside the gorge, there is an impressive canyon with unusual and picturesque rock formations. You will have a wonderful hike through the Konorchek Canyon. The road to this place takes about 2 hours one way. You can spend an additional hour hiking to enjoy the panoramic view. The route to the Red Canyon is not difficult. It passes through amazing rocky mountains. You will need to cross several small streams three times. After the hike, we will return to Bishkek.',
		search: 'Issyk-Kul',
		variant: 'Group',
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Transport - 12,750 som per group',
				price: 'Guide - 6,000 som per group',
			},
		],
	},
	{
		id: 4,
		img: Kegety,
		alt: 'Kegety',
		title: 'Kegety Gorge',
		text: '90 km one way. Today you will visit the amazing Kegety Gorge.',
		additionalText:
			'90 km one way. Today you will visit the amazing Kegety Gorge. Here you can take a short walk to a waterfall about 20 m high. There is also the beautiful Kol Tor Lake with turquoise water, located at an altitude of 2,725 m and accessible only for experienced travelers with a guide. The territory of the gorge is covered with steppe tall-grass meadows, as well as trees of forest and shrub types. Many useful medicinal herbs grow on the slopes of the gorge.',
		search: 'Bishkek',
		variant: 'Group',
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'After the walk, we will return to Bishkek',
				price: 'Transport - 12,000 som per group',
				price1: 'Guide - 6,000 som per group',
			},
		],
	},
	{
		id: 5,
		img: KanyonSkazka,
		alt: 'skazka',
		title: 'Fairytale Canyon',
		text: 'On the southern shore of Issyk-Kul, there is an unusual place - Fairy Tale Canyon. The place is undoubtedly magical, full of mysteries and charm.',
		additionalText:
			'300 km one way. On the southern shore of Lake Issyk Kul, there is an unusual place - Fairy Tale Canyon. These canyons were formed millions of years ago as a result of soil erosion, and wind and water have given them an incredible appearance. They were rightly named "Fairy Tale". This place is undoubtedly magical, full of mysteries and charm. Walking through the chain of canyons, you can notice the resemblance of sandstone to animals, landmarks, or characters from legends. It is an ideal place for relaxation. You can also spend an hour swimming at the wild beach. Afterward, return to Bishkek.',
		search: 'Issyk-Kul',
		variant: 'Group',
		fireImg: Fire,
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Transport - 31,500 som per group',
				price: '8,500 som per group',
				price1: 'Guide - 6,000 som per group',
				price2: 'Entrance tickets - 400 som per person',
				price3: 'Eagle hunting - 10,000 som per group',
			},
		],
	},
	{
		id: 6,
		img: TooAshuu,
		alt: 'tooAshuu',
		title: 'Too-Ashuu Pass',
		text: 'Fantastic roads, stunning views, nomads, and high mountains. Be sure your memories of Kyrgyzstan will last a lifetime.',
		additionalText:
			'Today, you will head to the Too Ashuu Pass, over 3,000 meters high! It connects the northern and southern parts of Kyrgyzstan. During your journey, be prepared for stunning views of impressive mountains and valleys. This road is considered one of the most beautiful in Kyrgyzstan. You will have photo stops to take beautiful pictures of the Suusamyr valley. Fantastic roads, stunning views, nomads, and high mountains. Be sure your memories of Kyrgyzstan will last a lifetime. The pass is always windy, and the mountains are covered with snow caps all year round. However, the air at the pass is very fresh and clean. After the walk, transfer to Bishkek.',
		search: 'Bishkek',
		variant: 'Individual',
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Transport - 14,500 som per group',
				price: '8,500 som per group',
			},
		],
	},
	{
		id: 7,
		img: Alamedin,
		alt: 'alamedin',
		title: 'Alamedin Gorge',
		text: 'A unique journey to the Alamedin Gorge. The mountains in this gorge are covered with spruces, and a river flows along the entire route, ending in a waterfall cascading from the rocky mountains.',
		additionalText:
			'35 km one way. Today you will visit the Alamedin Gorge. During the walk through this amazing gorge, you can see large horned livestock and yurts, which are the homes of nomads. The mountains in this gorge are covered with spruces, and a mountain river flows along the entire route, ending in a waterfall cascading from the rocky mountains. You can have a picnic near this waterfall. This is an excellent opportunity to relax away from civilization and enjoy the views of Mother Nature.',
		search: 'Bishkek',
		variant: 'Group',
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'After the walk, we will return to Bishkek. ',
				price: 'Transport - 8,500 som per group',
			},
		],
	},
	{
		id: 8,
		img: AlaArcha,
		alt: 'alaArcha',
		title: 'Tour to Ala Archa Gorge',
		text: 'Discover the amazing beauty of the Ala Archa National Park. Ala Archa National Park is a high-mountain national park located at the foot of the Tien Shan mountain range in Kyrgyzstan.',
		additionalText:
			'Ala Archa National Park is a high-mountain national park located at the foot of the Tien Shan mountain range in Kyrgyzstan. During the Soviet era, only privileged people had the right to visit this place. You can take a short hike to enjoy the panoramic view of the gorge. Optionally, you can go on a hike further to see the picturesque mountain waterfall. You can also walk along the paved path along the gorge without hiking along the mountain trails.',
		search: 'Bishkek',
		variant: 'Group',
		fireImg: Fire,
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourPlan: [
			{
				label: 'Hotel pick-up:',
				text: 'We pick you up from your hotel in Bishkek in the morning at 09:00 (or at any convenient time).',
			},
			{
				label: 'Transfer to Ala Archa National Park:',
				text: 'The journey begins with a trip to the national park, which is only 40 km from the city.',
			},
			{
				label: 'Arrival at Ala Archa Gorge:',
				text: 'You will enjoy picturesque landscapes of the gorge with the Ala Archa mountain river, snowy peaks, and arch-shaped slopes.',
			},
			{
				label: 'Time for a walk or trekking:',
				text: 'You will have 3 hours for a leisurely walk in the gorge with a guide. For those who wish for a longer trek (e.g., to the Waterfall or Ratzek Hut), the tour can be extended (for an additional fee).',
			},
			{
				label: 'Return to Bishkek:',
				text: 'After the walk, we will organize a transfer back to your hotel.',
			},
		],
		tourSchedule: [
			{
				title: 'Transport (including entrance fees) -',
				price: '8,500 som per group',
				price1: 'Guide - 6,000 som per group',
			},
		],
	},
	{
		id: 9,
		img: Chunkurchak,
		alt: 'chunkurchak',
		title: 'Tour to Chunkurchak Gorge',
		text: 'Chunkurchak Gorge is one of the smallest but most beautiful gorges in Kyrgyzstan. After a walk through the gorge, you can have lunch at the Supara Chunkurchak ethno-restaurant.',
		additionalText:
			'40 km one way. Chunkurchak Gorge is one of the smallest but most beautiful gorges in Kyrgyzstan. This unique place, "zhailoo", where you can find a fabulous valley, on the horizon of which you can see the snowy peaks of majestic mountains. At the foot of the mountain slopes, interspersed with alpine meadows and strips of forest consisting of juniper, pine, spruce, birch, rowan, and numerous species of shrubs, a mountain river gurgles. After the walk, you can have lunch at the Supara Chunkurchak ethno-restaurant.',
		search: 'Bishkek',
		variant: 'Group',
		fireImg: Fire,
		pictures: [
			alaArcha1,
			alaArcha2,
			alaArcha3,
			alaArcha4,
			alaArcha5,
			alaArcha6,
		],
		tourSchedule: [
			{
				title: 'Transport - 8,500 som per group',
				price: 'Guide - 6,000 som per group',
			},
		],
	},
]

export {cardsInfoEn, cardsInfo}
