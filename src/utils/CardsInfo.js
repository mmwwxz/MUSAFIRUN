import Bishkek from "../assets/bishkek.jpg";
import Fire from "../assets/icons/fireImg.svg";
import ChonKemin from "../assets/Chon-Kemin.jpeg";
import Konorchak from "../assets/konorchak.jpg";
import CholponAta from "../assets/cholpon-ata.png";
import Kegety from "../assets/kegety.jpg";
import KanyonSkazka from "../assets/skazka.jpg";
import TooAshuu from "../assets/tooashuu.jpg";
import Alamedin from "../assets/alamedin.jpg";
import AlaArcha from "../assets/ala_archa_kyrgyzstan.jpg";
import Chunkurchak from "../assets/chunkurchak.jpg";

import alaArcha1 from "../assets/ala_archa1.jpg"
import alaArcha2 from "../assets/alaarcha2.jpg"
import alaArcha3 from "../assets/alaarcha3.jpg"
import alaArcha4 from "../assets/alaarcha4.webp"
import alaArcha5 from "../assets/alaarcha6.jpg"
import alaArcha6 from "../assets/ala-archa-gorge.jpg"


const cardsInfo = [
    {
        id: 1,
        img: Bishkek,
        alt: 'bishkek',
        title: 'Чудеса Бишкека',
        text: 'Однодневный тур по городу Бишкек с его удивительной историей и прекрассными достопримечательностями. ',
        additionalText: 'Весь день полностью посвящен экскурсии по Бишкеку. Вы посетите Площадь Победы, Дубовый Парк, Центральную Площадь Ала-Тоо, Национальную Филармонию и другие достопри-мечательности. Однако, экскурсия по Бишкеку не будет считаться полноценной без посещения нашего колоритного Азиатского Базара!',
        search: 'Bishkek',
        variant: 'Индивидуальный',
        fireImg: Fire,
        pictures: [alaArcha1, alaArcha2, alaArcha3,alaArcha4, alaArcha5, alaArcha6],
        tourPlan: [
            {
                label: 'Встреча в отеле:',
                text: 'Забираем вас из вашего отеля в Бишкеке утром 09:00 (или в любое удобное время).'
            },
            {
                label: 'Переезд в Национальный Парк Ала-Арча:',
                text: 'Путешествие начинается с поездки в национальный парк, который находится всего в 40 км от города.'
            },
            {
                label: 'Прибытие в ущелье Ала-Арча:',
                text: 'Вас ожидают живописные пейзажи ущелья с горной рекой Ала-Арча, снежными вершинами и арчовыми склонами.'
            },
            {
                label: 'Время для прогулки или треккинга:',
                text: 'Предоставляется 3 часа для легкой прогулки по ущелью с гидом. Для тех, кто желает более длительного трека (например, до Водопада или Хижины Рацека), возможно удлинение тура (за дополнительную плату).'
            },
            {
                label: 'Возвращение в Бишкек:',
                text: 'После прогулки мы организуем трансфер обратно до вашего отеля.'
            },
        ],
        tourSchedule: [
            {
                title: 'Транспорт - 15 300 сом с группы',
                price: 'Здесь вы сможете найти все виды товаров и сделать много динамичных фотографий.',
                price1: 'Транспорт - 9 300 сом',
                price2: 'Гид - 6 000 сом',
            }
        ]
    },
    {
        id: 2,
        img: ChonKemin,
        alt: 'kemin',
        title: 'Ущелье Чон-Кемин',
        text: 'Вы будете кататься на лошадях как настоящие кочевники и откроете для себя много чудесных видов.',
        additionalText: '150 км в одну сторону Чон Кемин - природные парк Кыргызстана. который славится своими удивительными горала! Вы будете кататься на лошадях как настоящие кочевники и увидите к#юго чудеса к видов. Ваш маршрут будет пролегать высоко в горах, вы сможете проехать на лошаде даже сквозь гор**»й лес. На вершине вы будете любоваться панорамным видом ущелья. После прогулки отправитесь в деревню, чтобы пообедать в доме у местной семьи. Возвращение в Бишкек.',
        search: 'Bishkek',
        variant: 'Групповой',
        pictures: [alaArcha1, alaArcha2, alaArcha3,alaArcha4, alaArcha5, alaArcha6],
        tourPlan: [
            {
                label: 'Встреча в отеле:',
                text: 'Забираем вас из вашего отеля в Бишкеке утром 09:00 (или в любое удобное время).'
            },
            {
                label: 'Переезд в Национальный Парк Ала-Арча:',
                text: 'Путешествие начинается с поездки в национальный парк, который находится всего в 40 км от города.'
            },
            {
                label: 'Прибытие в ущелье Ала-Арча:',
                text: 'Вас ожидают живописные пейзажи ущелья с горной рекой Ала-Арча, снежными вершинами и арчовыми склонами.'
            },
            {
                label: 'Время для прогулки или треккинга:',
                text: 'Предоставляется 3 часа для легкой прогулки по ущелью с гидом. Для тех, кто желает более длительного трека (например, до Водопада или Хижины Рацека), возможно удлинение тура (за дополнительную плату).'
            },
            {
                label: 'Возвращение в Бишкек:',
                text: 'После прогулки мы организуем трансфер обратно до вашего отеля.'
            },
        ],
        tourSchedule: [
            {
                title: 'Транспорт - 15 300 сом с группы',
                price: 'Гид - 6 800 сом с группы',
                price1: 'Конюх на ноне • 1 000 сом с группы (1 конюх на группу из 5 человек!',
                price2: '1 лошадь на 1 туриста - 900 сом',
                price3: 'Обед у местной семьи - 500 сом с человека',
            }
        ]
    },
    {
        id: 3,
        img: Konorchak,
        alt: 'konorchak',
        title: 'Каньон Конорчек',
        text: 'Откройте для себя волшебство Иссык-Куля во всем его великолепии с нашим четырехдневным туром вокруг озера.',
        additionalText: '120 км в одну сторону Сегодня мы поедем в знаменитое Боомское ущелье. Внутри ущелья есть впечатляющий каньон с необычными красю>**и скальными образованиями. У вас будет чудесная пешая прогулка по каньону Конорчек. Дорога до этого места занимает около 2 часов в одну сторону. Вы можете потратить еще одт час на прогулку, чтобы насладиться паморам+ым видом. Маршрут к Красному каююиу не сложный. Он проходит вдо/ъ удивительных скалистых гор. Вам нужно будет трижды пересечь несколько бо/ышх камней. После прогулки мы поедем обратно в Бишкек. ',
        search: 'Bishkek',
        variant: 'Групповой',
        pictures: [alaArcha1, alaArcha2, alaArcha3,alaArcha4, alaArcha5, alaArcha6],
        tourPlan: [
            {
                label: 'Встреча в отеле:',
                text: 'Забираем вас из вашего отеля в Бишкеке утром 09:00 (или в любое удобное время).'
            },
            {
                label: 'Переезд в Национальный Парк Ала-Арча:',
                text: 'Путешествие начинается с поездки в национальный парк, который находится всего в 40 км от города.'
            },
            {
                label: 'Прибытие в ущелье Ала-Арча:',
                text: 'Вас ожидают живописные пейзажи ущелья с горной рекой Ала-Арча, снежными вершинами и арчовыми склонами.'
            },
            {
                label: 'Время для прогулки или треккинга:',
                text: 'Предоставляется 3 часа для легкой прогулки по ущелью с гидом. Для тех, кто желает более длительного трека (например, до Водопада или Хижины Рацека), возможно удлинение тура (за дополнительную плату).'
            },
            {
                label: 'Возвращение в Бишкек:',
                text: 'После прогулки мы организуем трансфер обратно до вашего отеля.'
            },
        ],
        tourSchedule: [
            {
                title: 'Транспорт - 12 750 сом с группы',
                price: 'Гид - 6 000 сом с группы',
            }
        ]
    },
    // {
    //     id: 4,
    //     img: CholponAta,
    //     alt: 'cholponAta',
    //     title: 'Красота Чолпон Аты',
    //     text: 'Вы отправитесь к небесному озеру Ыссык-Куль и в городе Чолпон Ата увидите древние надписи которые оставили люди прошлых веков. Так же посетите культурный центр Рух Ордо.',
    //     search: 'IssykKul',
    //     variant: 'Групповой'
    // },
    {
        id: 4,
        img: Kegety,
        alt: 'Kegety',
        title: 'Ущелье Кегеты',
        text: '90 км в одну сторону Сегодня вы посетите удивительное ущелье Кегеты.',
        additionalText: '90 км в одну сторону Сегодня вы посетите удивительное ущелье Кегеты. Здесь можно совершить короткую прогулку к водопаду высотой около 20 м. Также есть красивое озеро Коль Тор с бирюзовой водой, расположенное на высоте 2 725 м и доступное только для опытных путешественников и с гидом. Территория ущелья покрыта степными высокотравными лугами, а также деревьями лесного и кустарного типа. На склонах ущелья растет много полезных лекарственных трав»',
        search: 'Bishkek',
        variant: 'Групповой',
        pictures: [alaArcha1, alaArcha2, alaArcha3,alaArcha4, alaArcha5, alaArcha6],
        tourPlan: [
            {
                label: 'Встреча в отеле:',
                text: 'Забираем вас из вашего отеля в Бишкеке утром 09:00 (или в любое удобное время).'
            },
            {
                label: 'Переезд в Национальный Парк Ала-Арча:',
                text: 'Путешествие начинается с поездки в национальный парк, который находится всего в 40 км от города.'
            },
            {
                label: 'Прибытие в ущелье Ала-Арча:',
                text: 'Вас ожидают живописные пейзажи ущелья с горной рекой Ала-Арча, снежными вершинами и арчовыми склонами.'
            },
            {
                label: 'Время для прогулки или треккинга:',
                text: 'Предоставляется 3 часа для легкой прогулки по ущелью с гидом. Для тех, кто желает более длительного трека (например, до Водопада или Хижины Рацека), возможно удлинение тура (за дополнительную плату).'
            },
            {
                label: 'Возвращение в Бишкек:',
                text: 'После прогулки мы организуем трансфер обратно до вашего отеля.'
            },
        ],
        tourSchedule: [
            {
                title: 'После прогулки мы вернемся в Бишкек',
                price: 'Транспорт - 12 000 сом с группы',
                price1: 'Гид - 6 000 сом с группы',
            }
        ]
    },
    {
        id: 5,
        img: KanyonSkazka,
        alt: 'skazka',
        title: 'Сказочный Каньон ',
        text: 'На южном берегу Ыссык-Куля есть необычное место - Каньон Сказка. Место безусловное волшебное, полное тайн и очарования.',
        additionalText:'300 км в одну сторону, На южном берегу озера Исськ Куль есть необычное место * каньон Сказка. Эти каньоны образовались миллионы лет назад в результате эрозии почвы, а ветер и вода придали им невероятный вид. Незря их назвали -Сказка-. ►\tМесто, безусловно, волшебное, полное тайн и очарования. Еоы пройтись по цепочке каньонов, можно заметить сходство песчаников с животными, достопримечательностями или персонажами из легенд. Это идеальное место для отдыха. Вы также можете потратить один час и искупаться на диком пляже. После - возвращение в Бишкек.',
        search: 'IssykKul',
        variant: 'Групповой',
        fireImg: Fire,
        pictures: [alaArcha1, alaArcha2, alaArcha3,alaArcha4, alaArcha5, alaArcha6],
        tourPlan: [
            {
                label: 'Встреча в отеле:',
                text: 'Забираем вас из вашего отеля в Бишкеке утром 09:00 (или в любое удобное время).'
            },
            {
                label: 'Переезд в Национальный Парк Ала-Арча:',
                text: 'Путешествие начинается с поездки в национальный парк, который находится всего в 40 км от города.'
            },
            {
                label: 'Прибытие в ущелье Ала-Арча:',
                text: 'Вас ожидают живописные пейзажи ущелья с горной рекой Ала-Арча, снежными вершинами и арчовыми склонами.'
            },
            {
                label: 'Время для прогулки или треккинга:',
                text: 'Предоставляется 3 часа для легкой прогулки по ущелью с гидом. Для тех, кто желает более длительного трека (например, до Водопада или Хижины Рацека), возможно удлинение тура (за дополнительную плату).'
            },
            {
                label: 'Возвращение в Бишкек:',
                text: 'После прогулки мы организуем трансфер обратно до вашего отеля.'
            },
        ],
        tourSchedule: [
            {
                title: 'Транспорт • 31 500 сом с группы',
                price: '8 500 сом с группы',
                price1: 'Гид - 6 000 сом с группы',
                price2: 'Входные билеты - 400 сом с человека',
                price3: 'Орлиная охота • 10 000 сом с группы',
            }
        ]
    },
    {
        id: 6,
        img: TooAshuu,
        alt: 'tooAshuu',
        title: 'Перевал Тоо-Ашуу',
        text: 'Фантастические дороги, потрясающие виды,кочевники и высокие горы. Будьте уверены, что ваши воспоминания о Кыргызстане останутся на всю жизнь.',
        additionalText: 'Сегодня вы отправитесь на перевал Тоо Ашуу высотой более 3 000 метров! Он соединяет северную и южную части Кыргызстана. Во время вашего переезда будьте готовы к потрясающим видам впечатляющих гор и ущелий. Эта дорога считается одной из самых красивых в Кыргызстане. У вас будут фотостолы, чтобы сделать красивые снимки Суусамырской до/мюи. Фантастические дороги, потрясающие виды, кочевники, и высокие горы Будьте уверены, что ваши воспоминания о Кыргызстане останутся на всю жизнь. На перевале всегда ветрено, а горы круглый год покрыты ледяньми шапками. При этом воздух на перевале очень свежий и чистый. После прогулки - трансфер в Бишкек.',
        search: 'Bishkek',
        variant: 'Индивидуальный',
        pictures: [alaArcha1, alaArcha2, alaArcha3,alaArcha4, alaArcha5, alaArcha6],
        tourPlan: [
            {
                label: 'Встреча в отеле:',
                text: 'Забираем вас из вашего отеля в Бишкеке утром 09:00 (или в любое удобное время).'
            },
            {
                label: 'Переезд в Национальный Парк Ала-Арча:',
                text: 'Путешествие начинается с поездки в национальный парк, который находится всего в 40 км от города.'
            },
            {
                label: 'Прибытие в ущелье Ала-Арча:',
                text: 'Вас ожидают живописные пейзажи ущелья с горной рекой Ала-Арча, снежными вершинами и арчовыми склонами.'
            },
            {
                label: 'Время для прогулки или треккинга:',
                text: 'Предоставляется 3 часа для легкой прогулки по ущелью с гидом. Для тех, кто желает более длительного трека (например, до Водопада или Хижины Рацека), возможно удлинение тура (за дополнительную плату).'
            },
            {
                label: 'Возвращение в Бишкек:',
                text: 'После прогулки мы организуем трансфер обратно до вашего отеля.'
            },
        ],
        tourSchedule: [
            {
                title: 'Транспорт -14 500 сом с группы -',
                price: '8 500 сом с группы',
            }
        ]
    },
    {
        id: 7,
        img: Alamedin,
        alt: 'alamedin',
        title: 'Ущелье Аламедин',
        text: 'Уникальное путешествие в Ущелье Аламедин.Горы в этом ущелье покрыты елями и по всему маршруту протекает река которая заканчивается водопадом стекающим со скалистых гор.',
        additionalText: '35 км в одну сторону Сегодня вы посетите ущелье Аламедин. Во время прогулки по этому удивительному ущелью можно увидеть крупный рогатый скот и юрты, которые являются жилищами кочевников. Горы в этом ущелье покрыты елями и по всему маршруту протекает горная река, которая заканчивается водопадом, стекающим со скалистых гор. Возле этого водопада можно устроить пикник. Это отличный шанс отдохнуть вдали от цивилизации и насладиться видами матушки-природы.',
        search: 'bishkek',
        variant: 'Групповой',
        pictures: [alaArcha1, alaArcha2, alaArcha3,alaArcha4, alaArcha5, alaArcha6],
        tourPlan: [
            {
                label: 'Встреча в отеле:',
                text: 'Забираем вас из вашего отеля в Бишкеке утром 09:00 (или в любое удобное время).'
            },
            {
                label: 'Переезд в Национальный Парк Ала-Арча:',
                text: 'Путешествие начинается с поездки в национальный парк, который находится всего в 40 км от города.'
            },
            {
                label: 'Прибытие в ущелье Ала-Арча:',
                text: 'Вас ожидают живописные пейзажи ущелья с горной рекой Ала-Арча, снежными вершинами и арчовыми склонами.'
            },
            {
                label: 'Время для прогулки или треккинга:',
                text: 'Предоставляется 3 часа для легкой прогулки по ущелью с гидом. Для тех, кто желает более длительного трека (например, до Водопада или Хижины Рацека), возможно удлинение тура (за дополнительную плату).'
            },
            {
                label: 'Возвращение в Бишкек:',
                text: 'После прогулки мы организуем трансфер обратно до вашего отеля.'
            },
        ],
        tourSchedule: [
            {
                title: 'После прогулки мы вернемся в Бишкек. ',
                price: 'Транспорт - 8 500 сом с группы',
            }
        ]
    },
    {
        id: 8,
        img: AlaArcha,
        alt: 'alaArcha',
        title: 'Тур в ущелье Ала Арча',
        text: 'Откройте для себя удивительную красоту национального парка Ала-Арча. Природный парк Ала-Арча - высокогорный национальный парк который находится у подножья горной цепи Тянь-Шань в Кыргызстане ',
        additionalText: 'Природный парк Ала-Арча -высокогорный национальный парк , который находится\n' +
            'у подножья горной цепи Тянь-Шань в Кыргызстане. В советское время только привилегированные люди могли имели право посещать это место. Вы можете сделать небольшой пеший тур, что бы насладиться пано-рамным видом ущелья. По желанию вы можете отправиться в поход немного дальше, чтобы увидеть живописный горный водопад. Можно не ходить по горным тропам , а просто пройтись по асфальтированной \n' +
            'дорожке вдоль ущелья.',
        search: 'Bishkek',
        variant: 'Групповой',
        fireImg: Fire,
        pictures: [alaArcha1, alaArcha2, alaArcha3,alaArcha4, alaArcha5, alaArcha6],
        tourPlan: [
            {
                label: 'Встреча в отеле:',
                text: 'Забираем вас из вашего отеля в Бишкеке утром 09:00 (или в любое удобное время).'
            },
            {
                label: 'Переезд в Национальный Парк Ала-Арча:',
                text: 'Путешествие начинается с поездки в национальный парк, который находится всего в 40 км от города.'
            },
            {
                label: 'Прибытие в ущелье Ала-Арча:',
                text: 'Вас ожидают живописные пейзажи ущелья с горной рекой Ала-Арча, снежными вершинами и арчовыми склонами.'
            },
            {
                label: 'Время для прогулки или треккинга:',
                text: 'Предоставляется 3 часа для легкой прогулки по ущелью с гидом. Для тех, кто желает более длительного трека (например, до Водопада или Хижины Рацека), возможно удлинение тура (за дополнительную плату).'
            },
            {
                label: 'Возвращение в Бишкек:',
                text: 'После прогулки мы организуем трансфер обратно до вашего отеля.'
            },
        ],
        tourSchedule: [
            {
                title: 'Транспорт (включая входные билеты) -',
                price: '8 500 сом с группы',
                price1: 'Гид - 6 000 сом с группы'
            }
        ]
    },
    {
        id: 9,
        img: Chunkurchak,
        alt: 'chunkurchak',
        title: 'Тур в ущелье Чункурчак',
        text: 'Ущелье Чункурчак одно из самых маленьких но красивейших ущелий Кыргызстана.После прогулки по ущелью можно пообедать в этно-ресторане “Супара Чункурчак”',
        additionalText: '40 км в одну сторону. Ущелье Чункурчак - одно из самых маленьких, но красивейших ущелий Кыргызстана. Это уникальное место «жайлоо», где можно найти сказочную долину, на горизонте которой виднеются снежные вершины величественных гор. У подножия горных склонов, перемежающихся альпийскими лугами и лесополосами, состоящими из можжевельника, сосны, лиственницы, березы, рябины и многочисленных видов кустарников журчит горная река. После прогулки вы можете пообедать в этно- ресторане «Супара Чункурчак-.',
        search: 'Bishkek',
        variant: 'Групповой',
        fireImg: Fire,
        pictures: [alaArcha1, alaArcha2, alaArcha3,alaArcha4, alaArcha5, alaArcha6],
        tourPlan: [
            {
                label: 'Встреча в отеле:',
                text: 'Забираем вас из вашего отеля в Бишкеке утром 09:00 (или в любое удобное время).'
            },
            {
                label: 'Переезд в Национальный Парк Ала-Арча:',
                text: 'Путешествие начинается с поездки в национальный парк, который находится всего в 40 км от города.'
            },
            {
                label: 'Прибытие в ущелье Ала-Арча:',
                text: 'Вас ожидают живописные пейзажи ущелья с горной рекой Ала-Арча, снежными вершинами и арчовыми склонами.'
            },
            {
                label: 'Время для прогулки или треккинга:',
                text: 'Предоставляется 3 часа для легкой прогулки по ущелью с гидом. Для тех, кто желает более длительного трека (например, до Водопада или Хижины Рацека), возможно удлинение тура (за дополнительную плату).'
            },
            {
                label: 'Возвращение в Бишкек:',
                text: 'После прогулки мы организуем трансфер обратно до вашего отеля.'
            },
        ],
        tourSchedule: [
            {
                title: 'Транспорт - 8 500 сом с группы',
                price: 'Гид - 6 000 сом с группы',
            }
        ]
    },


]

export default cardsInfo;
