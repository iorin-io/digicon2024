import { ReactNode } from "react";
import {
  GuraDesc,
  BookDesc,
  CameraDesc,
  GuitarDesc,
  HourGlassDesc,
  MirrorDesc,
  MobiusDesc,
  PhoneDesc,
} from "./workDesc";

export const itemDescriptions: {
  [key: string]: { title: string; name: string; description: ReactNode };
} = {
  gura: {
    title: "Gura Ruins",
    name: "匿名希望",
    description: <GuraDesc />,
  },
  book: {
    title: "音楽日記",
    name: "陳懿(CHEN YI)",
    description: <BookDesc />,
  },
  camera: {
    title: "カメラ",
    name: "小野寺海",
    description: <CameraDesc />,
  },
  guitar: {
    title: "ギターマン",
    name: "利根匠海",
    description: <GuitarDesc />,
  },
  hourGlass: {
    title: "消えゆく声",
    name: "糸久秀喜",
    description: <HourGlassDesc />,
  },
  mirror: {
    title: "Curve Mirror",
    name: "髙𣘺伊織",
    description: <MirrorDesc />,
  },
  mobius: {
    title: "The Cyclic Reversal",
    name: "(偽名)落合洋一",
    description: <MobiusDesc />,
  },
  phone: {
    title: "AIとの不毛な対話",
    name: "猪原大智",
    description: <PhoneDesc />,
  },
};
