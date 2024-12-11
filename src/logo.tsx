/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo_moja from '/logo/moja.png';
import logo_to from '/logo/to.svg';
import logo_no from '/logo/no.svg';
import logo_tai from '/logo/tai.svg';
import logo_wa from '/logo/wa.svg';
import { FC } from 'react';

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
	left: 7%;
	@media screen and (max-width: 800px) {
		top: 5%;
		width: 50dvw;
	}
	@media screen and (max-width: 600px) {
		top: 5%;
		left: 5%;
		width: 60dvw;
  }
`;

const toStyle = css`
  width: min(10dvw, 18.57dvh);
  height: auto;
  object-fit: contain;
	top: 10%;
	left: 45%;
	@media screen and (max-width: 800px) {
		top: 20%;
		left: 48%;
		width: 13dvw;
	}
	@media screen and (max-width: 600px) {
		top: 25%;
		left: 55%;
		width: 15dvw;
  }
`;

const noStyle = css`
  width: min(13dvw, 24.14dvh);
  height: auto;
  object-fit: contain;
  top: 17%;
	left: 60%;
	@media screen and (max-width: 800px) {
		top: 25%;
		left: 65%;
		width: 18dvw;
	}
	@media screen and (max-width: 600px) {
		top: 30%;
		left: 75%;
		width: 20dvw;
  }
`;

const taiStyle = css`
  width: min(20dvw, 37.14dvh);
  height: auto;
  object-fit: contain;
  z-index: 11;
  bottom: 5%;
	left: 20%;
	@media screen and (max-width: 800px) {
		left: auto;
		right: 50%;
		width: 30dvw;
	}
	@media screen and (max-width: 600px) {
		left: auto;
		right: 50%;
		width: 35dvw;
  }
`;

const waStyle = css`
  width: min(20dvw, 37.14dvh);
  height: auto;
  object-fit: contain;
  z-index: 11;
  bottom: 5%;
	left: 70%;
	@media screen and (max-width: 800px) {
		left: auto;
		right: 5%;
		width: 30dvw;
	}
	@media screen and (max-width: 600px) {
		left: auto;
		right: 5%;
		width: 35dvw;
  }
`;

export const Logo: FC = () => {
  return (
    <div css={logoStyle}>
      <img src={logo_moja} className="logo_moja" alt="moja" css={mojaStyle} />
      <img src={logo_to} className="logo_to" alt="to" css={toStyle} />
      <img src={logo_no} className="logo_no" alt="no" css={noStyle} />
      <img src={logo_tai} className="logo_tai" alt="tai" css={taiStyle} />
      <img src={logo_wa} className="logo_wa" alt="wa" css={waStyle} />
    </div>
  );
}
