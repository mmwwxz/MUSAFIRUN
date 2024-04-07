import Kaz from '../assets/Kazahstan.webp'
import Oae from '../assets/OAE.jpg'
import Uzb from '../assets/Uzbekistan.png'
import Fire from '../assets/icons/fireImg.svg'
import kaz1 from '../assets/kaz1.jpg'
import kaz2 from '../assets/kaz2.jpeg'
import kaz3 from '../assets/kaz3.jpg'
import oae1 from '../assets/oae1.jpeg'
import oae2 from '../assets/oae2.webp'
import oae3 from '../assets/oae3.jpeg'
import uzb1 from '../assets/uzb1.jpeg'
import uzb2 from '../assets/uzb2.jpeg'
import uzb3 from '../assets/uzb3.jpeg'

const cardsInfoInternational = [
	{
		id: 1,
		img: Uzb,
		alt: 'uzb',
		title: 'Солнечный Узбекистан ',
		text: 'Этот 8-дневный тур в Узбекистан позволит вам изучить все достопримечательности Узбекистана:',
		additionalText:
			'Помимо всемирно известных древних достопримечательностей, включенных в список ЮНЕСКО, таких как исторический центр Бухары и грандиозные архитектурные шедевры Самарканда, нас ждут уникальные авторские экскурсии. Мы посетим колоритную туристическую деревню ремесленников «Конигил» в Самарканде, где можно увидеть традиционный быт и процесс ручного изготовления самаркандской шелковой бумаги; ковровую фабрику «Худжум», где вручную ткут шелковые ковры по старинным технологиям; нас также ждет дегустация великолепных узбекских вин и коньяков в оригинальном дегустационном зале.  В Ташкенте мы обязательно пообедаем в Центрально-Азиатском центре плова, где каждый день готовят 10 тоннвкуснейшего узбекского плова, а в Бухаре – навестим загородную резиденцию последнего бухарского эмира, попробуем чай из лечебных трав с пряностями и традиционными бухарскими сладостями в чайном доме «Пряности Шелкового пути» и насладимся красочным фольклорным шоу в медресе Надира Диванбеги.',
		variant: 'Групповой',
		fireImg: Fire,
		pictures: [uzb1, uzb2, uzb3],
	},
	{
		id: 2,
		img: Oae,
		alt: 'oae',
		title: 'Арабские ночи в ОАЭ',
		text: 'Этот 6-дневный тур в Дубае позволит вам изучить все достопримечательности ОАЭ:',
		additionalText:
			'Дорогие гости! Обзорная экскурсия по этому сказочному городу оставит у  Вас самые яркие и незабываемые впечатления. Архитектура старого района  Бастакии, музей восковых фигур и прогулка на арабской лодке Абра  перенесут вас в прошлое местных арабов - смелых ловцов жемчуга,  торговцев и арабских кочевых племен пустыни - бедуинов.',
		variant: 'Групповой',
		fireImg: Fire,
		pictures: [oae1, oae2, oae3],
	},
	{
		id: 3,
		img: Kaz,
		alt: 'kaz',
		title: 'Красота Казахстана',
		text: 'Этот 7-дневный тур в Алматы позволит вам изучить все достопримечательности Казахстана:',
		additionalText:
			'Путешествие в Казахстан – это настоящее приключение, полное удивительных природных пейзажей, радушия местных жителей и многообразия вкусов национальной кухни. Эта страна, расположенная на стыке Европы и Азии, впитала веяния самых разных культурных и религиозных течений. На протяжении тысячелетий на этой земле проживали кочевники, занимавшиеся выпасом скота на просторных долинах близ рек и среди живописных предгорий.',
		variant: 'Групповой',
		fireImg: Fire,
		pictures: [kaz1, kaz2, kaz3],
	},
]
const cardsInfoInternationalEn = [
	{
		id: 1,
		img: Uzb,
		alt: 'uzb',
		title: 'Sunny Uzbekistan',
		text: 'This 8-day tour to Uzbekistan will allow you to explore all the sights of Uzbekistan:',
		additionalText:
			'In addition to the world-famous ancient sights listed by UNESCO, such as the historic center of Bukhara and the grand architectural masterpieces of Samarkand, we await unique author s excursions. We will visit the picturesque tourist village of craftsmen "Konigil" in Samarkand, where you can see traditional life and the process of handmade production of Samarkand silk paper; the carpet factory "Khujum", where silk carpets are hand-woven using ancient technologies; we will also have a tasting of exquisite Uzbek wines and brandies in the original tasting room. In Tashkent, we will definitely have lunch at the Central Asian pilaf center, where 10 tons of delicious Uzbek pilaf are cooked every day, and in Bukhara, we will visit the country residence of the last Bukharan emir, try tea with medicinal herbs and spices, and traditional Bukharan sweets at the tea house "Spices of the Silk Road" and enjoy a colorful folklore show at the Nadir Divanbegi madrasah.',
		variant: 'Group',
		fireImg: Fire,
		pictures: [uzb1, uzb2, uzb3],
	},
	{
		id: 2,
		img: Oae,
		alt: 'oae',
		title: 'Arabian Nights in the UAE',
		text: 'This 6-day tour to Dubai will allow you to explore all the sights of the UAE:',
		additionalText:
			'Dear guests! A sightseeing tour of this fabulous city will leave you with the brightest and most unforgettable impressions. The architecture of the old Bastakiya district, the wax figure museum, and a ride on an Arabian Abra boat will transport you to the past of the local Arabs - brave pearl divers, traders, and Arab nomadic desert tribes - Bedouins.',
		variant: 'Group',
		fireImg: Fire,
		pictures: [oae1, oae2, oae3],
	},
	{
		id: 3,
		img: Kaz,
		alt: 'kaz',
		title: 'Beauty of Kazakhstan',
		text: 'This 7-day tour to Almaty will allow you to explore all the sights of Kazakhstan:',
		additionalText:
			'Traveling to Kazakhstan is a real adventure, full of amazing natural landscapes, the hospitality of local residents, and the diversity of flavors of national cuisine. This country, located at the crossroads of Europe and Asia, has absorbed the influences of various cultural and religious currents. For millennia, nomads have lived on this land, grazing livestock in spacious valleys near rivers and amidst picturesque foothills.',
		variant: 'Group',
		fireImg: Fire,
		pictures: [kaz1, kaz2, kaz3],
	},
]

export { cardsInfoInternational, cardsInfoInternationalEn }
