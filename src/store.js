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
});