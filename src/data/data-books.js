import roboltsToc from '../images/books/robolts_toc.jpg';
import roboltsExamp from '../images/books/robolts_examp.jpg'
import roboltsFace from '../images/books/robolts_face.jpg';
import dragonsEncicFace from '../images/books/dragons_first-ciclopedia_face.jpg';
import dragonsEncicExamp from '../images/books/dragons_first-ciclopedia_examp.jpg';
import talesAndPicFace from '../images/books/tales-and-pictures_suteev_face.jpg';
import talesAndPicToc from '../images/books/tales-and-pictures_suteev_toc.jpg';
import talesAndPicExamp from '../images/books/tales-and-pictures_suteev_examp.jpg';
import mumytrollsFace from '../images/books/mumy-trolls_face.jpg';
import mumytrollsToc from '../images/books/mumy-trolls_toc.jpg';
import mumytrollsExamp from '../images/books/mumy-trolls_examp.jpg';
import harmAdviceOsterFace from '../images/books/400-harm-advice_oster_face.jpg';
import harmAdviceOsterExamp from '../images/books/400-harm-advice_oster_examp.jpg';
import kiplingFace from '../images/books/kipling_face.jpg';
import kiplingToc from '../images/books/kipling_toc.jpg';
import kiplingExamp from '../images/books/kipling_examp.jpg';

export const dataBooks = [
    {
        title: 'Роболты. Улётная история!!!',
        author: 'Матюшкина Катя, Сильвер Саша',
        collection: 'Роболты',
        pages: 192,
        age: [4, 10],
        faceImg: roboltsFace,
        tocImg: roboltsToc,
        exampleImg: roboltsExamp,
        statusFree: true,
        occupiedTo: null,
        owner: 'DanaArb',
        firstSelfReading: false,
        comments: [
            {
                user: 'DanaArb',
                stars: 5,
                text: 'Детективная история-приключение в железном придуманном мире роболтов. Очень захватывает детей и читается на одном дыхании. Первая книга из серии.',
                data: '01.04.2025'
            }
        ]
    },
    {
        title: 'Драконы. Твоя первая энциклопедия',
        author: '',
        collection: null,
        pages: 128,
        age: [3, 8],
        faceImg: dragonsEncicFace,
        tocImg: dragonsEncicExamp,
        exampleImg: null,
        statusFree: true,
        occupiedTo: null,
        owner: 'DanaArb',
        firstSelfReading: false,
        comments: [
            {
                user: 'DanaArb',
                stars: 5,
                text: 'В книге рассказывается о разных сказочных драконах и истории о них, много ярких картинок, которые очень нравятся детям. Рекомендую для мальчиков, девочке книга у нас не зашла',
                data: '01.04.2025'
            }
        ]
    },
    {
        title: 'Сказки и картинки',
        author: 'Сутеев В.',
        collection: null,
        pages: 124,
        age: [1, 7],
        faceImg: talesAndPicFace,
        tocImg: talesAndPicToc,
        exampleImg: talesAndPicExamp,
        statusFree: true,
        occupiedTo: null,
        owner: 'DanaArb',
        firstSelfReading: true,
        comments: [
            {
                user: 'DanaArb',
                stars: 5,
                text: 'Сначала читали эту книжку в 1-2-3 года, сейчас еврнулись к ней - одна из первых книг для самостоятельного чтения. Много картинок, тексты максимально простые.',
                data: '01.04.2025'
            }
        ]
    },
    {
        title: 'Всё-всё-всё о муми-троллях для малышей',
        author: 'Янссон Т.',
        pages: 224,
        age: [2, 7],
        faceImg: mumytrollsFace,
        tocImg: mumytrollsToc,
        exampleImg: mumytrollsExamp,
        statusFree: true,
        occupiedTo: null,
        owner: 'DanaArb',
        firstSelfReading: true,
        comments: []
    },
    {
        title: '400 самых дюбимых вредных советов',
        author: 'Остер Г.',
        pages: 414,
        age: [7, 13],
        faceImg: harmAdviceOsterFace,
        tocImg: null,
        exampleImg: harmAdviceOsterExamp,
        statusFree: true,
        occupiedTo: null,
        owner: 'DanaArb',
        firstSelfReading: false,
        comments: [
            {
                user: 'DanaArb',
                stars: 5,
                text: 'Часть советов будет понятна и дошкольникам, но етсь много по школьной теме, поэтому больше вс-таки книга ориентирована на младших школьников. Картинки есть, но не так много и они чб.',
                data: '01.04.2025'
            }
        ]
    },
    {
        title: 'Повесть Маугли и сказки',
        author: 'Киплинг Р.',
        pages: 384,
        age: [6, 13],
        faceImg: kiplingFace,
        tocImg: kiplingToc,
        exampleImg: kiplingExamp,
        statusFree: true,
        occupiedTo: null,
        owner: 'DanaArb',
        firstSelfReading: false,
        comments: []
    },
]