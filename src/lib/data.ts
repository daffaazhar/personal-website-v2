import React from "react";
import { Briefcase, GraduationCap, School2 } from "lucide-react";
import { TechStack } from "./types";

export const experiencesData = [
  {
    title: "Freelance Wordpress Developer",
    location: "Toko Ahsan, Kalimantan, Indonesia",
    description:
      "Developing an single vendor e-commerce website from scratch. Starting from feature planning, website design, 3rd party API integration, until the deployment stage.",
    icon: React.createElement(Briefcase),
    date: "2020 - 2021",
  },
  {
    title: "Attending College",
    location:
      "Electronic Engineering Polytechnic Institute of Surabaya (EEPIS), Surabaya, Indonesia",
    description:
      "Being part of the Front-End developers in E-Code, an organization responsible for developing applications needed by all student organizations in EEPIS.",
    icon: React.createElement(School2),
    date: "2022 - Present",
  },
  {
    title: "Intern Front-End Developer",
    location: "Data Polis, Jakarta, Indonesia",
    description:
      "Collaborated with a team of designers and back-end developers on various projects, including siap.apari.or.id, bsakp.apari.or.id, and eztakaful.com.my.",
    icon: React.createElement(Briefcase),
    date: "2023 - Present",
  },
] as const;

export const techStackData = {
  PHP: "devicon-php-plain",
  JavaScript: "devicon-javascript-plain",
  TypeScript: "devicon-typescript-plain",
  Dart: "devicon-dart-plain",
  Flutter: "devicon-flutter-plain",
  NextJS: "devicon-nextjs-plain",
  React: "devicon-react-original",
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
