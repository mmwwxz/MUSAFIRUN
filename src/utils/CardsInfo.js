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
	},
]
const cardsInfoEn = [
	{
		id: 1,
		img: Bishkek,
		alt: 'bishkek',
		title: 'Wonders of Bishkek',
		text: 'One-day tour of the city of Bishkek with its amazing history and beautiful sights.',
		additionalText:
			'The entire day is dedicated to a tour of Bishkek. You will visit Victory Square, Oak Park, Ala-Too Square, the National Philharmonic, and other attractions. However, a tour of Bishkek would not be complete without a visit to our colorful Asian Bazaar!',
		search: 'Bishkek',
		variant: 'Individual',
		fireImg: Fire,
	},
	{
		id: 2,
		img: ChonKemin,
		alt: 'kemin',
		title: 'Chon-Kemin Gorge',
		text: 'You will ride horses like true nomads and discover many wonderful views.',
		additionalText:
			'150 km one way to Chon Kemin - a natural park in Kyrgyzstan, famous for its stunning mountains! You will ride horses like true nomads and see the wonders of nature. Your route will take you high into the mountains; you can even ride through dense forests on horseback. At the summit, you will enjoy a panoramic view of the gorge. After the walk, head to the village for lunch with a local family. Return to Bishkek.',
		search: 'Bishkek',
		variant: 'Group',
	},
	{
		id: 3,
		img: Konorchak,
		alt: 'konorchak',
		title: 'Konorchek Canyon',
		text: 'Discover the magic of Issyk-Kul in all its splendor with our four-day tour around the lake.',
		additionalText:
			'120 km one way Today we will go to the famous Boom Gorge. Inside the gorge, there is an impressive canyon with unusual colorful and rocky formations. You will have a wonderful hike through Konorchek Canyon. The road to this place takes about 2 hours one way. You can spend another hour walking to enjoy the panoramic view. The route to the Red Canyon is not difficult. It passes through amazing rocky mountains. You will need to cross several small rivers three times. After the walk, we will return to Bishkek.',
		search: 'Issyk-Kul',
		variant: 'Group',
	},
	{
		id: 4,
		img: Kegety,
		alt: 'Kegety',
		title: 'Kegety Gorge',
		text: '90 km one way Today you will visit the amazing Kegety Gorge.',
		additionalText:
			'90 km one way Today you will visit the amazing Kegety Gorge. Here you can take a short walk to a waterfall about 20 meters high. There is also the beautiful Kol-Tor Lake with turquoise water, located at an altitude of 2,725 meters and accessible only to experienced travelers with a guide. The territory of the gorge is covered with steppe high-grass meadows, as well as trees of forest and shrub types. Many useful medicinal herbs grow on the slopes of the gorge.',
		search: 'Bishkek',
		variant: 'Group',
	},
	{
		id: 5,
		img: KanyonSkazka,
		alt: 'skazka',
		title: 'Fairytale Canyon',
		text: 'On the southern shore of Issyk-Kul, there is an unusual place - Fairy Tale Canyon. The place is undoubtedly magical, full of mysteries and charm.',
		additionalText:
			'300 km one way, On the southern shore of Issyk-Kul, there is an unusual place - Fairy Tale Canyon. These canyons formed millions of years ago as a result of soil erosion, and wind and water gave them an incredible appearance. They were rightly named "Fairy Tale". This place is undoubtedly magical, full of mysteries and charm. Walking through the chain of canyons, you can notice the resemblance of sandstone to animals, landmarks, or characters from legends. It is an ideal place to relax. You can also spend an hour swimming at a wild beach. After that, return to Bishkek.',
		search: 'Issyk-Kul',
		variant: 'Group',
		fireImg: Fire,
	},
	{
		id: 6,
		img: TooAshuu,
		alt: 'tooAshuu',
		title: 'Too-Ashuu Pass',
		text: 'Fantastic roads, breathtaking views, nomads, and high mountains. Be sure that your memories of Kyrgyzstan will last a lifetime.',
		additionalText:
			'Today you will head to the Too Ashuu Pass, which is over 3,000 meters high! It connects the northern and southern parts of Kyrgyzstan. During your journey, be prepared for breathtaking views of impressive mountains and gorges. This road is considered one of the most beautiful in Kyrgyzstan. You will have photo stops to take beautiful pictures of the Suusamyr Valley. Fantastic roads, breathtaking views, nomads, and high mountains. Be sure that your memories of Kyrgyzstan will last a lifetime. It is always windy at the pass, and the mountains are covered with snow caps all year round. However, the air at the pass is very fresh and clean. After the walk, transfer to Bishkek.',
		search: 'Bishkek',
		variant: 'Individual',
	},
	{
		id: 7,
		img: Alamedin,
		alt: 'alamedin',
		title: 'Alamedin Gorge',
		text: 'A unique journey to the Alamedin Gorge. The mountains in this gorge are covered with spruces, and a river flows along the entire route, ending in a waterfall flowing from the rocky mountains.',
		additionalText:
			'35 km one way Today you will visit the Alamedin Gorge. During a walk through this amazing gorge, you can see large horned cattle and yurts, which are the dwellings of nomads. The mountains in this gorge are covered with spruces, and a mountain river flows along the entire route, ending in a waterfall flowing from the rocky mountains. Near this waterfall, you can have a picnic. It is an excellent opportunity to rest away from civilization and enjoy the views of mother nature.',
		search: 'Bishkek',
		variant: 'Group',
	},
	{
		id: 8,
		img: AlaArcha,
		alt: 'alaArcha',
		title: 'Tour to Ala Archa Gorge',
		text: 'Discover the amazing beauty of the Ala Archa National Park. Ala Archa National Park is a high-mountain national park located at the foot of the Tien Shan mountain range in Kyrgyzstan.',
		additionalText:
			'Ala Archa National Park is a high-mountain national park located at the foot of the Tien Shan mountain range in Kyrgyzstan. In Soviet times, only privileged people had the right to visit this place. You can take a short hike to enjoy the panoramic view of the gorge. If desired, you can go on a hike a little further to see the picturesque mountain waterfall. You can either hike on mountain trails or simply walk along the asphalt path along the gorge.',
		search: 'Bishkek',
		variant: 'Group',
		fireImg: Fire,
		tourPlan: [
			{
				label: 'Hotel Pickup:',
				text: 'We pick you up from your hotel in Bishkek at 09:00 in the morning (or at any convenient time).',
			},
			{
				label: 'Transfer to Ala Archa National Park:',
				text: 'The journey begins with a trip to the national park, which is only 40 km from the city.',
			},
			{
				label: 'Arrival at Ala Archa Gorge:',
				text: 'You will encounter picturesque landscapes of the gorge with the Ala Archa mountain river, snowy peaks, and arch slopes.',
			},
			{
				label: 'Time for a walk or trekking:',
				text: '3 hours are provided for an easy walk along the gorge with a guide. For those who wish for a longer hike (for example, to the Waterfall or Ratzek Hut), tour extension is possible (for an additional fee).',
			},
			{
				label: 'Return to Bishkek:',
				text: 'After the walk, we arrange a transfer back to your hotel.',
			},
		],
	},
	{
		id: 9,
		img: Chunkurchak,
		alt: 'chunkurchak',
		title: 'Tour to Chunkurchak Gorge',
		text: 'Chunkurchak Gorge is one of the smallest but most beautiful gorges in Kyrgyzstan. After a walk through the gorge, you can have lunch at the ethnic restaurant "Supara Chunkurchak".',
		additionalText:
			'40 km one way. Chunkurchak Gorge is one of the smallest but most beautiful gorges in Kyrgyzstan. It is a unique place of "zhailoo", where you can find a fabulous valley, on the horizon of which you can see the snow-capped peaks of majestic mountains. At the foot of the mountain slopes, interspersed with alpine meadows and strips of forest consisting of juniper, pine, spruce, birch, rowan, and numerous species of shrubs, a mountain river murmurs. After the walk, you can have lunch at the ethnic restaurant "Supara Chunkurchak".',
		search: 'Bishkek',
		variant: 'Group',
		fireImg: Fire,
	},
]

export { cardsInfo, cardsInfoEn }
