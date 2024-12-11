/** @jsxImportSource @emotion/react */
import { Logo } from "./logo";
import { Background } from "./background";
import { Global, css, keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { Info } from "./info";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const appStyle = (isLoading: boolean) => css`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  opacity: ${isLoading ? 0 : 1};
  transition: opacity 1s ease-in;
`;

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

const loadingOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const spinnerStyle = css`
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [shouldAnimateLogo, setShouldAnimateLogo] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ロード状態を管理

  useEffect(() => {
    const infoClosed = sessionStorage.getItem("infoClosed");
    if (infoClosed === "true") {
      setIsInfoOpen(false);
      setShouldAnimateLogo(true);
    }

    const loadTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadTimeout);
  }, []);

  const openInfo = () => {
    setIsInfoOpen(true);
    sessionStorage.setItem("infoClosed", "false");
  };

  const closeInfo = () => {
    setShouldAnimateLogo(true);
    setIsInfoOpen(false);
    sessionStorage.setItem("infoClosed", "true");
  };

  return (
    <div css={appStyle(isLoading)}>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap");
          body {
            font-family: "Zen Old Mincho", serif;
            margin: 0;
            display: flex;
            place-items: center;
            min-width: 320px;
            min-height: 100dvh;
            background-color: #fff;
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
        ↑Click the items
      </div>

      {isLoading && (
        <div css={loadingOverlayStyle}>
          <div css={spinnerStyle}></div>
        </div>
      )}
    </div>
  );
}

export default App;
