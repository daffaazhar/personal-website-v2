import React from "react";
import {
  Briefcase,
  Globe,
  Palette,
  PencilLine,
  School2,
  Smartphone,
} from "lucide-react";
import { TechStack } from "./types";

export const OVERVIEW_DATAS = [
  {
    title: "Web Development",
    icon: React.createElement(Globe),
  },
  {
    title: "Mobile Development",
    icon: React.createElement(Smartphone),
  },
  {
    title: "User Interface Design",
    icon: React.createElement(Palette),
  },
  {
    title: "Content Writer",
    icon: React.createElement(PencilLine),
  },
];

export const experiencesData = [
  {
    title: "Freelance Wordpress Developer",
    location: "Toko Ahsan, Kalimantan, Indonesia",
    description:
      "Developing an single vendor e-commerce website from scratch. Starting from feature planning, website design, 3rd party API integration, until the deployment stage.",
    icon: React.createElement(Briefcase),
    date: "December 2020 - February 2021",
  },
  {
    title: "Attending College",
    location:
      "Electronic Engineering Polytechnic Institute of Surabaya (EEPIS), Surabaya, Indonesia",
    description:
      "Being part of the Front-End developers in E-Code, an organization responsible for developing applications needed by all student organizations in EEPIS.",
    icon: React.createElement(School2),
    date: "July 2022 - July 2026 (Expected)",
  },
  {
    title: "Intern Front-End Developer",
    location: "Data Polis, Jakarta, Indonesia",
    description:
      "Collaborated with a team of designers and back-end developers on various projects, including siap.apari.or.id, bsakp.apari.or.id, and eztakaful.com.my.",
    icon: React.createElement(Briefcase),
    date: "May 2023 - June 2024",
  },
  {
    title: "Full-Time Assistant Product Owner",
    location: "Countlorie, Surabaya, Indonesia",
    description:
      "Collaborated closely with the Product Owner from Agile Product Development PENS and Agile Teknik to build and develop the Countlorie application, a comprehensive calorie tracking platform designed to help users monitor their daily consumption and effectively achieve their ideal weight and fitness goals.",
    icon: React.createElement(Briefcase),
    date: "February 2024 - December 2024",
  },
  {
    title: "Full-Time Front-End Developer",
    location: "Pilarmedia Indonesia, Surabaya, Indonesia",
    description:
      "Developed the front-end side for the logistics software ERP system, Solog.id. This system has many services, including logistics order management, fleet & inventory management, warehouse management, finance & accounting, and 8 other features.",
    icon: React.createElement(Briefcase),
    date: "June 2024 - October 2024",
  },
  {
    title: "Intern Front-End Developer",
    location: "Central Bank of Indonesia, Surabaya, Indonesia",
    description:
      "Developed and designed the SI-SABI application, an information system aimed at streamlining administrative processes for the PSBI (Program Sosial Bank Indonesia) assistance program, improving efficiency and user experience for both internal staff and beneficiaries.",
    icon: React.createElement(Briefcase),
    date: "July 2024 - October 2024",
  },
  {
    title: "Full-Time Front-End Developer",
    location: "Ordent, Jakarta, Indonesia",
    description:
      "Become part of a large development team for the Qlola Cash Management project at PT. Bank Rakyat Indonesia (Persero) Tbk.",
    icon: React.createElement(Briefcase),
    date: "July 2024 - October 2024",
  },
] as const;

export const techStackData = {
  HTML: "devicon-html5-plain",
  PHP: "devicon-php-plain",
  JavaScript: "devicon-javascript-plain",
  TypeScript: "devicon-typescript-plain",
  Dart: "devicon-dart-plain",
  Flutter: "devicon-flutter-plain",
  NextJS: "devicon-nextjs-plain",
  React: "devicon-react-original",
  Laravel: "devicon-laravel-original",
  Firebase: "devicon-firebase-plain",
  Tailwind: "devicon-tailwindcss-original",
  SASS: "devicon-sass-original",
  CSS: "devicon-css3-plain",
  Figma: "devicon-figma-plain",
  Prisma: "devicon-prisma-original",
  NodeJS: "devicon-nodejs-plain",
  Postgres: "devicon-postgresql-plain",
  Gitlab: "devicon-gitlab-plain",
} as TechStack;
