/** @jsxImportSource @emotion/react */
import { Logo } from "./logo";
import { Background } from "./background";
import { Global, css } from "@emotion/react";
import { useState } from "react";
import { Info } from "./info";

// アプリ全体のスタイル
const appStyle = css`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
`;

// ナビゲーションボタンのスタイル
const navButtonStyle = css`
  font-family: "Zen Old Mincho", serif;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  border: none;
  cursor: pointer;
  z-index: 1000;
  font-size: 30px;
  text-decoration: underline;

  @media (max-width: 600px) {
    padding: 8px 16px;
    top: 10px;
    right: 10px;
  }
`;

function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [shouldAnimateLogo, setShouldAnimateLogo] = useState(false);

  const openInfo = () => {
    setIsInfoOpen(true);
  };

  const closeInfo = () => {
    setShouldAnimateLogo(true);
    setIsInfoOpen(false);
  };
  return (
    <div css={appStyle}>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap");
          body {
            font-family: "Zen Old Mincho", serif; /* ここでフォントを指定 */
            margin: 0;
            display: flex;
            place-items: center;
            min-width: 320px;
            min-height: 100dvh;
          }
          img {
            -webkit-user-drag: none;
            -khtml-user-drag: none;
            -moz-user-drag: none;
            -o-user-drag: none;
          }
        `}
      />
      <Background />
      <Logo animateLogo={shouldAnimateLogo} />

      <button css={navButtonStyle} onClick={openInfo}>
        Info
      </button>

      {/* Info & Credits モーダルの表示 */}
      {isInfoOpen && <Info onClose={closeInfo} />}

      <div
        css={css`
          position: fixed;
          top: 30%;
          left: 0;
          color: #fff;
          rotate: 90deg;
          transform-origin: left bottom;
          font-size: min(5dvw, 30px);
          white-space: nowrap;
        `}
      >
        ↑Click the item
      </div>
    </div>
  );
}

export default App;
