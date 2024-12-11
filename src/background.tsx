/** @jsxImportSource @emotion/react */
import { FC, useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import background from "/background.png";
import gura from "/gura.png";
import book from "/book.png";
import camera from "/camera.png";
import guitar from "/guitar.png";
import hourGlass from "/hourGlass.png";
import mirror from "/mirror.png";
import mobius from "/mobius.png";
import phone from "/phone.png";
import { itemDescriptions } from "./itemDescription";

const backgroundStyle = css`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const fullWidthImageStyle = css`
  height: auto;
  object-position: center;

  @media screen and (max-width: 551px) {
    height: 100dvh;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) and (min-width: 552px) {
    width: 180dvw;
    object-fit: cover;
  }

  @media screen and (min-width: 900px) {
    width: 1600px;
  }
  @media screen and (min-width: 1600px) {
    width: 100%;
  }
`;

const itemImageStyle = css`
  position: absolute;
  object-fit: contain;
  z-index: 10;
  transition: -webkit-filter 0.3s ease; /* ホバー時のアニメーションを付けたい場合 */

  &:hover {
    z-index: 20;
    -webkit-filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(
      0 0 10px rgba(255, 255, 255, 0.9)
    ); /* フォールバックとしてfilterも指定 */
  }
`;

// モーダル用のスタイル
const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  & button {
    background: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
  }
`;

const modalContentStyle = css`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  max-width: 500px;
  text-align: center;
  color: #333;
  margin: 50px;
  & h2 {
    font-size: 1.5em;
    margin: 0;
  }
`;

// windowSizeの型を定義
interface WindowSize {
  width: number;
  height: number;
}

// refsの型を定義
interface Refs {
  backgroundRef: React.RefObject<HTMLImageElement>;
  guraRef: React.RefObject<HTMLImageElement>;
  bookRef: React.RefObject<HTMLImageElement>;
  cameraRef: React.RefObject<HTMLImageElement>;
  guitarRef: React.RefObject<HTMLImageElement>;
  hourGlassRef: React.RefObject<HTMLImageElement>;
  mirrorRef: React.RefObject<HTMLImageElement>;
  mobiusRef: React.RefObject<HTMLImageElement>;
  phoneRef: React.RefObject<HTMLImageElement>;
}

function updatePosition(windowSize: WindowSize, refs: Refs) {
  const backgroundElement = refs.backgroundRef.current;
  const guraElement = refs.guraRef.current;
  const bookElement = refs.bookRef.current;
  const cameraElement = refs.cameraRef.current;
  const guitarElement = refs.guitarRef.current;
  const hourGlassElement = refs.hourGlassRef.current;
  const mirrorElement = refs.mirrorRef.current;
  const mobiusElement = refs.mobiusRef.current;
  const phoneElement = refs.phoneRef.current;

  if (
    backgroundElement &&
    guraElement &&
    bookElement &&
    cameraElement &&
    guitarElement &&
    hourGlassElement &&
    mirrorElement &&
    mobiusElement &&
    phoneElement
  ) {
    const backgroundRect = backgroundElement.getBoundingClientRect();
    const scaleX = backgroundRect.width / backgroundElement.naturalWidth;
    const scaleY = backgroundRect.height / backgroundElement.naturalHeight;
    const { width, height } = windowSize;

    const baseTop = backgroundRect.top + backgroundRect.height / 2;
    const baseLeft = backgroundRect.left + backgroundRect.width / 2;

    // gura
    guraElement.style.top = `${baseTop}px`;
    guraElement.style.transform = "translate(-90%, -11.5%)";
    if (width > 551) {
      guraElement.style.width = "auto";
      guraElement.style.height = `${540 * scaleY}px`;
      guraElement.style.left = `${baseLeft}px`;
    } else {
      guraElement.style.width = "auto";
      guraElement.style.height = `${(131.247 / 932) * height}px`;
      guraElement.style.left = `${(116 / 231) * width - 160 / 231}px`;
    }

    // book
    bookElement.style.top = `${baseTop}px`;
    bookElement.style.transform = "translate(33.3%, 91.7%)";
    if (width > 551) {
      bookElement.style.width = `${410 * scaleX}px`;
      bookElement.style.height = "auto";
      bookElement.style.left = `${baseLeft}px`;
    } else {
      bookElement.style.width = `${(99.651 / 932) * height}px`;
      bookElement.style.height = "auto";
      bookElement.style.left = `${(116 / 231) * width - 160 / 231}px`;
    }

    // camera
    cameraElement.style.top = `${baseTop}px`;
    cameraElement.style.transform = "translate(-70.8%, -84%)";
    if (width > 551) {
      cameraElement.style.width = `${651 * scaleX}px`;
      cameraElement.style.height = "auto";
      cameraElement.style.left = `${baseLeft}px`;
    } else {
      cameraElement.style.width = `${(158.226 / 932) * height}px`;
      cameraElement.style.height = "auto";
      cameraElement.style.left = `${(116 / 231) * width - 160 / 231}px`;
    }

    // guitar
    guitarElement.style.top = `${baseTop}px`;
    guitarElement.style.transform = "translate(35%, -69.77%)";
    if (width > 551) {
      guitarElement.style.width = "auto";
      guitarElement.style.height = `${1110 * scaleY}px`;
      guitarElement.style.left = `${baseLeft}px`;
    } else {
      guitarElement.style.width = "auto";
      guitarElement.style.height = `${(269.786 / 932) * height}px`;
      guitarElement.style.left = `${(116 / 231) * width - 160 / 231}px`;
    }

    // hourGlass
    hourGlassElement.style.top = `${baseTop}px`;
    hourGlassElement.style.transform = "translate(-6.5%, 14.6%)";
    if (width > 551) {
      hourGlassElement.style.width = "auto";
      hourGlassElement.style.height = `${452 * scaleY}px`;
      hourGlassElement.style.left = `${baseLeft}px`;
    } else {
      hourGlassElement.style.width = "auto";
      hourGlassElement.style.height = `${(109.859 / 932) * height}px`;
      hourGlassElement.style.left = `${(116 / 231) * width - 160 / 231}px`;
    }

    // mirror
    mirrorElement.style.top = `${baseTop}px`;
    mirrorElement.style.transform = "translate(-99%, -144.3%)";
    if (width > 551) {
      mirrorElement.style.width = "auto";
      mirrorElement.style.height = `${653 * scaleY}px`;
      mirrorElement.style.left = `${baseLeft}px`;
    } else {
      mirrorElement.style.width = "auto";
      mirrorElement.style.height = `${(157.983 / 932) * height}px`;
      mirrorElement.style.left = `${(116 / 231) * width - 160 / 231}px`;
    }

    // mobius
    mobiusElement.style.top = `${baseTop}px`;
    mobiusElement.style.transform = "translate(-159.4%, -27.5%)";
    if (width > 551) {
      mobiusElement.style.width = `${467.5 * scaleX}px`;
      mobiusElement.style.height = "auto";
      mobiusElement.style.left = `${baseLeft}px`;
    } else {
      mobiusElement.style.width = `${(113.626 / 932) * height}px`;
      mobiusElement.style.height = "auto";
      mobiusElement.style.left = `${(116 / 231) * width - 160 / 231}px`;
    }

    // phone
    phoneElement.style.top = `${baseTop}px`;
    phoneElement.style.transform = "translate(174%, 15%)";
    if (width > 551) {
      phoneElement.style.width = `auto`;
      phoneElement.style.height = `${400 * scaleY}px`;
      phoneElement.style.left = `${baseLeft}px`;
    } else {
      phoneElement.style.width = "auto";
      phoneElement.style.height = `${(97.2201 / 932) * height}px`;
      phoneElement.style.left = `${(1 / 2) * width}px`;
    }
  }
}

export const Background: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { width, height } = windowSize;
  const backgroundRef = useRef(null);
  const guraRef = useRef(null);
  const bookRef = useRef(null);
  const cameraRef = useRef(null);
  const guitarRef = useRef(null);
  const hourGlassRef = useRef(null);
  const mirrorRef = useRef(null);
  const mobiusRef = useRef(null);
  const phoneRef = useRef(null);
  const shouldShowItems =
    !(height < 480 || width < 320) || (width < 552 && height < 630);

  const updateSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    const refs = {
      backgroundRef,
      guraRef,
      bookRef,
      cameraRef,
      guitarRef,
      hourGlassRef,
      mirrorRef,
      mobiusRef,
      phoneRef,
    };

    const onLoad = () => {
      console.log("onLoad");
      updatePosition(windowSize, refs); // updatePositionを呼び出し
    };

    window.addEventListener("load", onLoad);

    window.addEventListener("resize", updateSize);
    window.addEventListener("resize", () => updatePosition(windowSize, refs)); // resize時にもupdatePositionを呼び出し

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("resize", () =>
        updatePosition(windowSize, refs)
      );
    };
  }, [windowSize]);

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="background" css={backgroundStyle}>
      <img
        src={background}
        className="full-width-image"
        alt="Background"
        ref={backgroundRef}
        css={fullWidthImageStyle}
      />
      {shouldShowItems && (
        <>
          <img
            src={gura}
            className="gura-image"
            alt="gura"
            ref={guraRef}
            css={itemImageStyle}
            onClick={() => handleItemClick("gura")}
          />
          <img
            src={book}
            className="book-image"
            alt="book"
            ref={bookRef}
            css={itemImageStyle}
            onClick={() => handleItemClick("book")}
          />
          <img
            src={camera}
            className="camera-image"
            alt="camera"
            ref={cameraRef}
            css={itemImageStyle}
            onClick={() => handleItemClick("camera")}
          />
          <img
            src={guitar}
            className="guitar-image"
            alt="guitar"
            ref={guitarRef}
            css={itemImageStyle}
            onClick={() => handleItemClick("guitar")}
          />
          <img
            src={hourGlass}
            className="hourGlass-image"
            alt="hourGlass"
            ref={hourGlassRef}
            css={itemImageStyle}
            onClick={() => handleItemClick("hourGlass")}
          />
          <img
            src={mirror}
            className="mirror-image"
            alt="mirror"
            ref={mirrorRef}
            css={itemImageStyle}
            onClick={() => handleItemClick("mirror")}
          />
          <img
            src={mobius}
            className="mobius-image"
            alt="mobius"
            ref={mobiusRef}
            css={itemImageStyle}
            onClick={() => handleItemClick("mobius")}
          />
          <img
            src={phone}
            className="phone-image"
            alt="phone"
            ref={phoneRef}
            css={itemImageStyle}
            onClick={() => handleItemClick("phone")}
          />
        </>
      )}
      {selectedItem && (
        <div css={modalOverlayStyle} onClick={handleCloseModal}>
          <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2>{itemDescriptions[selectedItem].title}</h2>
            <p
              css={css`
                text-align: right;
              `}
            >
              {itemDescriptions[selectedItem].name}
            </p>
            <p>{itemDescriptions[selectedItem].description}</p>
            <button onClick={handleCloseModal}>close</button>
          </div>
        </div>
      )}
    </div>
  );
};
