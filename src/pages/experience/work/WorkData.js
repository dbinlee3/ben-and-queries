import dormit from "../../../assets/work/dormit.svg";
import flourishIntern from "../../../assets/work/flourish-intern.svg";
import flourishFull from "../../../assets/work/flourish-full.svg";

export const data = [
    {
        name: "Flourish Science",
        title: "Founding Software Engineer",
        link: "https://www.flouriship.com/",
        img: flourishFull,
        dates: {
            start: "September 2023",
            end: "Current"
        },
        content: "Filled many roles from being a core backend developer, to a full stack engineer who works in various technical environments such as AWS deployments, cron schedulers, Flutter and more. Supported the migration of the app from a web app to a fully native mobile app using Flutter, overseeing key features such as push notifications (via Firebase Cloud Messaging) and deep-linking. Developed prompt-driven AI features, including chatbot smart replies, and weekly user insight reports, leveraging LLMs for personalized well-being support. Currently developing a React-based Webapp to showcase LLM-powered well-being tools.",
        bullets: [
            "Implement new features that aim for user retention",
            "Build components and endpoints that fascilitate a product fit for B2B sales",
        ]
    },
    {
        name: "Flourish Science",
        title: "Software Engineer Intern",
        link: "https://www.flouriship.com/",
        img: flourishIntern,
        dates: {
            start: "March 2023",
            end: "September 2023"
        },
        content: "Refactored the backend codebase from JavaScript to TypeScript, improving scalability and long-term maintainability. Built features like a daily pulse meter, boosting user engagement, and enhanced social functionalities for activity sharing and user connections. Played a key role in the platform’s transformation from a one-time workshop app into a daily-use well-being app.",
        bullets: [
            "Extensively refactored the server-side codebase from JavaScript to TypeScript to improve scalability and maintainability for a long-term retention-based well-being app. Enhanced code accuracy, QA efficiency, and implementation speed, transitioning the product from a simple 1-week workshop tool to a robust, engagement-focused platform.",
            "Developed a daily pulse feature, driving a significant increase in daily user engagement by enabling users to interact with a quick, bite-sized activity.",
            "Assisted in enhancing the app's social feature, enabling users to share activities and add buddies, fostering a more interactive community experience.",
            "Created multiple endpoints in Express to support app features, improving development cycle efficiency for future feature iterations and updates.",
        ]
    },
    {
        name: "DormIt",
        title: "Web Developer",
        img: dormit,
        dates: {
            start: "July 2022",
            end: "October 2022"
        },
        content: "Collaborated with a full-stack team to develop a student-led food delivery app, leveraging Firebase and Stripe for seamless payment integration. Designed and implemented user interfaces for 5+ pages using React, CSS3, and Material UI, ensuring technical feasibility of UX designs. Served as one of the primary developers, managing complex JavaScript logic and Firebase functionality, while reviewing and optimizing team members’ code for improved project connectivity. Mentored a junior developer on GitHub workflows to enhance team efficiency and productivity.",
        bullets: [
            "Collaborated with a full stack team to spearhead a student-led food delivery app using Firebase and the Stripe extension.",
            "Developed user interfaces for 5+ pages with React, CSS3 and Material UI, to ensure technical feasibility of UX/UI designs",
            "Elected as one of three main developers for the web development team to handle complex Javascript logic and Firebase functionality",
            "Reviewed and optimized team members’ code to convert and refactor 10+ files for project connectivity",
            "Trained a junior developer on Github operations in a professional team setting to improve team productivity and efficiency"
        ]
    }
];