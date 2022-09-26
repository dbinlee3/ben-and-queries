import pantri from "../../assets/projects/pantri.svg";
import chadley from "../../assets/projects/chadley.svg";

import figma from "../../assets/icons/figma.svg";
import github from "../../assets/icons/github.svg";
import newTab from "../../assets/icons/new-tab.svg";


export const projects = [
    {
        name: "Pantri",
        img: pantri,
        inProgress: true,
        //length === 6
        desc: ["Pantri is a social network themed around ", "cooking recipes", ". Users are able to ", "post, like and comment", " on their favorite recipes and follow other home cooks around the world. ", "Expected November 2022"],
        links: [
            {
                name: "Figma",
                img: figma,
                link: "https://www.figma.com/file/YdRNSEaJJZKA3pwEQLAeCm/Pantri-(Cooking-Themed-Social-Media-App)?node-id=344%3A2"
            },
            {
                name: "Github",
                img: github,
                link: "https://github.com/dbinlee3/Pantri"
            }
        ]
    },

    {
        name: "Chadley The AI",
        img: chadley,
        inProgress: false,
        ///length === 5
        desc: ["Utilizing the ", "GTP-3 API by Open-AI", ", Chadley is a powerful ", "artificial intelligence", " that is designed to answer a user-entered prompt."],
        links: [
            {
                name: "Github",
                img: github,
                link: "https://github.com/dbinlee3/Chadley-The-AI"
            },
            {
                name: "Website",
                img: newTab,
                link: "http://chadley-the-ai.com"
            }
        ]
    }
]