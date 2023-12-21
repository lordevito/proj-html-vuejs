import { reactive } from "vue";


export const store = reactive({

//Voci NavBar
    NavItems: [
        {
            text: "Home",
            url: "#",
        },
        {
            text: "Pages",
            url: "#",
        },
        {
            text: "Courses",
            url: "#",
        },
        {
            text: "Features",
            url: "#",
        },
        {
            text: "Blog",
            url: "#",
        },
        {
            text: "Shop",
            url: "#",   
        },
    ],
    brands: [
        '01', '02', '03', '04', '05', '06'

    ],
    cards: [
        {
            price: '$40.00',
            info: 'Learning to Write as a Professional Author',
            students: '50',
            lessons: '20',
            img: 'course-02-480x298'
        },

        {
            price: 'Free',
            info: 'Customer-centric Info-Tech Strategies',
            students: '769',
            lessons: '24',
            img: 'stock-full-hd-03-480x298'
        },

        {
            price: '$19.00',
            info: 'Open Programming Courses for Everyone: Python',
            students: '62',
            lessons: '17',
            img: 'stock-full-hd-04-480x298'
        },

        {
            price: '$26.00',
            info: 'Accademic Listening and Note-taking',
            students: '67',
            lessons: '17',
            img: 'stock-full-hd-06-480x298'
        },

        {
            price: '$39.00',
            info: 'Master JQuery in a Short Period of Time',
            students: '51',
            lessons: '6',
            img: 'course-featured-image-01-480x298'
        },

        {
            price: '$59.00',
            info: 'Introduction to Javascript for Beginners',
            students: '76',
            lessons: '14',
            img: 'stock-full-hd-05-480x298'
        }
    ],
});