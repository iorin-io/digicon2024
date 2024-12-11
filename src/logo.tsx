/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import logo_moja from "/logo/moja.webp";
import logo_to from "/logo/to.svg";
import logo_no from "/logo/no.svg";
import logo_tai from "/logo/tai.svg";
import logo_wa from "/logo/wa.svg";
import { FC } from "react";
import { motion } from "motion/react";

// ロゴ全体のスタイル
const logoStyle = css`
  & img {
    position: absolute;
  }
`;

// 各ロゴのスタイル
const mojaStyle = css`
  width: min(35dvw, 65dvh);
  height: auto;
  object-fit: contain;
  top: 0;
  right: 60%;
  @media screen and (max-width: 800px) {
    top: 5%;
    right: 50%;
    width: min(50dvw, 45dvh);
  }
  @media screen and (max-width: 600px) {
    top: 5%;
    left: 5%;
    width: min(60dvw, 44dvh);
  }
`;

const toStyle = css`
  width: min(10dvw, 18.57dvh);
  height: auto;
  object-fit: contain;
  top: 10%;
  left: 55%;
  @media screen and (max-width: 800px) {
    top: 20%;
    left: 48%;
    width: min(13dvw, 11.7dvh);
  }
  @media screen and (max-width: 600px) {
    top: 25%;
    left: 55%;
    width: min(15dvw, 11dvh);
  }
`;

const noStyle = css`
  width: min(13dvw, 24.14dvh);
  height: auto;
  object-fit: contain;
  top: 17%;
  left: 70%;
  @media screen and (max-width: 800px) {
    top: 25%;
    left: 65%;
    width: min(18dvw, 16.2dvh);
  }
  @media screen and (max-width: 600px) {
    top: 30%;
    left: 75%;
    width: min(20dvw, 14.67dvh);
  }
`;

const taiStyle = css`
  width: min(20dvw, 37.14dvh, 250px);
  height: auto;
  object-fit: contain;
  z-index: 11;
  bottom: 5%;
  left: 35%;
  @media screen and (max-width: 800px) {
    left: auto;
    right: 50%;
    width: min(30dvw, 27dvh);
  }
  @media screen and (max-width: 600px) {
    left: auto;
    right: 50%;
    width: min(35dvw, 25.67dvh);
  }
`;

const waStyle = css`
  width: min(20dvw, 37.14dvh, 250px);
  height: auto;
  object-fit: contain;
  z-index: 11;
  bottom: 5%;
  left: 70%;
  @media screen and (max-width: 800px) {
    left: auto;
    right: 5%;
    width: min(30dvw, 27dvh);
  }
  @media screen and (max-width: 600px) {
    left: auto;
    right: 5%;
    width: min(35dvw, 25.67dvh);
  }
`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // 子要素のアニメーションを0.3秒ずつ遅らせて開始
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

interface LogoProps {
  animateLogo: boolean;
}

export const Logo: FC<LogoProps> = ({ animateLogo }) => {
  return (
    <motion.div
      css={logoStyle}
      variants={containerVariants}
      initial="hidden"
      animate={animateLogo ? "visible" : "hidden"}
    >
      <motion.img
        src={logo_moja}
        className="logo_moja"
        alt="moja"
        css={mojaStyle}
        variants={itemVariants}
      />
      <motion.img
        src={logo_to}
        className="logo_to"
        alt="to"
        css={toStyle}
        variants={itemVariants}
      />
      <motion.img
        src={logo_no}
        className="logo_no"
        alt="no"
        css={noStyle}
        variants={itemVariants}
      />
      <motion.img
        src={logo_tai}
        className="logo_tai"
        alt="tai"
        css={taiStyle}
        variants={itemVariants}
      />
      <motion.img
        src={logo_wa}
        className="logo_wa"
        alt="wa"
        css={waStyle}
        variants={itemVariants}
      />
    </motion.div>
  );
};
