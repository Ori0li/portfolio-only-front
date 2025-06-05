import { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: "1",
    title: "Web Portfolio (Using HTML, CSS)",
    description: "HTML과 CSS를 이용한 Web Design",
    image: "webHtml.png",
    github: "https://github.com/Ori0li/Web_Portfolio",
    demo: "https://ori0li.github.io/Web_Portfolio/",
    tag: ["HTML", "CSS"],
  },
  {
    id: "2",
    title: "MegaBox Clone",
    description: "HTML과 CSS를 이용해 MegaBox Mobile Version을 디자인",
    image: "megaBox.png",
    github: "https://github.com/Ori0li/TeamPortfolio_Megabox",
    demo: "https://ori0li.github.io/TeamPortfolio_Megabox/",
    tag: ["HTML", "CSS"],
  },
  {
    id: "3",
    title: "Kia CarInfo Clone",
    description:
      "HTML과 CSS, JavaScript를 이용해 KIA 차량 메인페이지 및 상세페이지 구현",
    image: "kiaCarInfo.png",
    github: "https://github.com/GN-Lee/KiaCarInfo",
    demo: "https://gn-lee.github.io/KiaCarInfo/",
    tag: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "4",
    title: "ColeoMarketing Clone",
    description:
      "HTML과 CSS, JavaScript를 기본적으로 사용하고 Gsap를 이용해 인터렉티브한 효과를 구현",
    image: "coleo.png",
    github: "https://github.com/Ori0li/coleoClone",
    demo: "https://ori0li.github.io/coleoClone/",
    tag: ["HTML", "CSS", "JavaScript", "Gsap"],
  },
  {
    id: "5",
    title: "To-Do-List(.Js)",
    description:
      "JavaScript를 기본적으로 사용하고 React를 이용해 각 컴포넌트 별로 구성을 하여 간단한 To-Do-List를 구현",
    image: "toDoListJs.png",
    github: "https://github.com/Ori0li/TodoVer1",
    demo: "https://todo-ver1-six.vercel.app/",
    tag: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "6",
    title: "To-Do-List(.Ts)",
    description:
      "HTML과 CSS, JavaScript를 기본적으로 사용하고 React를 이용해 각 컴포넌트 별로 구성을 하여 간단한 To-Do-List를 구현",
    image: "toDoListTs.png",
    github: "https://github.com/Ori0li/TodoTs",
    demo: "https://todo-ts-omega-eight.vercel.app/",
    tag: ["HTML", "CSS", "TypeScript", "React", "Zustand"],
  },
  {
    id: "7",
    title: "Spotify Clone",
    description:
      "NextJS를 이용해 Feature-based를 기반으로 하여 파일 구성 후 디자인한 팀프로젝트로 FireBase를 연동해 DB구현을 하였으며 데이터는 Spotify API를 이용해 데이터를 수집하였고, Zustand를 활용해 각 함수들을 정리해 코드를 대폭으로 줄여 구현",
    image: "spotify.png",
    github: "https://github.com/Ori0li/TeamSpotify",
    demo: "https://team-spotify-zeta.vercel.app/",
    tag: ["NextJS", "TypeScript", "FireBase", "Zustand", "Spotify API"],
  },
  {
    id: "8",
    title: "RunBeat",
    description:
      "NextJS를 이용해 Feature-based를 기반으로 하여 파일 구성 후 디자인한 팀프로젝트로 FireBase를 연동해 DB구현을 하였으며 데이터는 Spotify API를 이용해 데이터를 수집하였고, Zustand를 활용해 각 함수들을 정리해 코드를 대폭으로 줄여 구현",
    image: "runbeat.png",
    github: "https://github.com/Ori0li/RunBeat",
    demo: "https://drive.google.com/file/d/14cf9JYevNS9O5RKP6bo6RzqAMLw8L7h8/view?pli=1",
    tag: ["NextJS", "TypeScript", "Mysql", "React-Native", "Expo"],
  },
];

export default projects;
