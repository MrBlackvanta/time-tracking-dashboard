import {
  ExerciseIcon,
  PlayIcon,
  SelfCareIcon,
  SocialIcon,
  StudyIcon,
  WorkIcon,
} from "@/components/icons";
import type { Activity, Timeframe } from "./data.types";

export const reportSubject = "Jeremy Robson";

export const timeframes: Timeframe[] = [
  { id: "daily", label: "Daily", previousLabel: "Yesterday" },
  { id: "weekly", label: "Weekly", previousLabel: "Last Week" },
  { id: "monthly", label: "Monthly", previousLabel: "Last Month" },
];

export const activities: Activity[] = [
  {
    id: "work",
    title: "Work",
    icon: WorkIcon,
    artwork: { top: -11, right: 18 },
    hours: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 },
    },
  },
  {
    id: "play",
    title: "Play",
    icon: PlayIcon,
    artwork: { top: -5, right: 22 },
    hours: {
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 },
    },
  },
  {
    id: "study",
    title: "Study",
    icon: StudyIcon,
    artwork: { top: -8, right: 17 },
    hours: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 },
    },
  },
  {
    id: "exercise",
    title: "Exercise",
    icon: ExerciseIcon,
    artwork: { top: -2, right: 17 },
    hours: {
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 },
    },
  },
  {
    id: "social",
    title: "Social",
    icon: SocialIcon,
    artwork: { top: -15, right: 14 },
    hours: {
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 },
    },
  },
  {
    id: "self-care",
    title: "Self Care",
    icon: SelfCareIcon,
    artwork: { top: -11, right: 16 },
    hours: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 },
    },
  },
];
