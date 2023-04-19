import { NavigationLinksModel } from "@/models/navigationLinksModel";

export const navigationData: Array<NavigationLinksModel> = [
    {
        name: "Hjem", 
        link: "/", 
        offset:0
    },
    {
        name: "Spar tid", 
        link: "/about", 
        offset:-120
    }, 
    {
        name: "Slik fungerer det", 
        link: "/support", 
        offset:-50
    }, 
    {
        name: "Hva vi tilbyr", 
        link: "/platforms", 
        offset: -100
    }, 
    // {
    //     name: "Priser", 
    //     link: "/pricing", 
    //     offset:-50
    // },

]