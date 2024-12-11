/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Logo } from './logo';
import background from '/background.png';
import gura from '/gura.png';
import book from '/book.png';
import camera from '/camera.png';
import guitar from '/guitar.png';
import hourGlass from '/hourGlass.png';
import mirror from '/mirror.png';
import mobius from '/mobius.png';

const backgroundStyle = css`
  position: relative;
  width: 100dvw;
  height: 100%;
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

  @media screen and (max-width: 900px) {
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

  if (
    backgroundElement &&
    guraElement &&
    bookElement &&
    cameraElement &&
    guitarElement &&
    hourGlassElement &&
    mirrorElement &&
    mobiusElement
  ) {
    const backgroundRect = backgroundElement.getBoundingClientRect();
    const scaleX = backgroundRect.width / backgroundElement.naturalWidth;
    const scaleY = backgroundRect.height / backgroundElement.naturalHeight;
    const { width, height } = windowSize;

    const baseTop = backgroundRect.top + backgroundRect.height / 2;
    const baseLeft = backgroundRect.left + backgroundRect.width / 2;

     // gura
     guraElement.style.top = `${baseTop}px`;
     guraElement.style.transform = 'translate(-90%, -11.5%)';
     if (width > 551) {
       guraElement.style.width = 'auto';
       guraElement.style.height = `${540 * scaleY}px`;
       guraElement.style.left = `${baseLeft}px`;
     } else {
       guraElement.style.width = 'auto';
       guraElement.style.height = `${(131.247 / 932) * height}px`;
       guraElement.style.left = `${(116 / 231) * width - (160 / 231)}px`;
     }

     // book
     bookElement.style.top = `${baseTop}px`;
     bookElement.style.transform = 'translate(33.3%, 91.7%)';
     if (width > 551) {
       bookElement.style.width = `${410 * scaleX}px`;
       bookElement.style.height = 'auto';
       bookElement.style.left = `${baseLeft}px`;
     } else {
       bookElement.style.width = `${(99.651 / 932) * height}px`;
       bookElement.style.height = 'auto';
       bookElement.style.left = `${(116 / 231) * width - (160 / 231)}px`;
     }

     // camera
     cameraElement.style.top = `${baseTop}px`;
     cameraElement.style.transform = 'translate(-70.8%, -84%)';
     if (width > 551) {
       cameraElement.style.width = `${651 * scaleX}px`;
       cameraElement.style.height = 'auto';
       cameraElement.style.left = `${baseLeft}px`;
     } else {
       cameraElement.style.width = `${(158.226 / 932) * height}px`;
       cameraElement.style.height = 'auto';
       cameraElement.style.left = `${(116 / 231) * width - (160 / 231)}px`;
     }

     // guitar
     guitarElement.style.top = `${baseTop}px`;
     guitarElement.style.transform = 'translate(35%, -69.77%)';
     if (width > 551) {
       guitarElement.style.width = 'auto';
       guitarElement.style.height = `${1110 * scaleY}px`;
       guitarElement.style.left = `${baseLeft}px`;
     } else {
       guitarElement.style.width = 'auto';
       guitarElement.style.height = `${(269.786 / 932) * height}px`;
       guitarElement.style.left = `${(116 / 231) * width - (160 / 231)}px`;
     }

     // hourGlass
     hourGlassElement.style.top = `${baseTop}px`;
     hourGlassElement.style.transform = 'translate(-6.5%, 14.6%)';
     if (width > 551) {
       hourGlassElement.style.width = 'auto';
       hourGlassElement.style.height = `${452 * scaleY}px`;
       hourGlassElement.style.left = `${baseLeft}px`;
     } else {
       hourGlassElement.style.width = 'auto';
       hourGlassElement.style.height = `${(109.859 / 932) * height}px`;
       hourGlassElement.style.left = `${(116 / 231) * width - (160 / 231)}px`;
     }

     // mirror
     mirrorElement.style.top = `${baseTop}px`;
     mirrorElement.style.transform = 'translate(-99%, -144.3%)';
     if (width > 551) {
       mirrorElement.style.width = 'auto';
       mirrorElement.style.height = `${653 * scaleY}px`;
       mirrorElement.style.left = `${baseLeft}px`;
     } else {
       mirrorElement.style.width = 'auto';
       mirrorElement.style.height = `${(157.983 / 932) * height}px`;
       mirrorElement.style.left = `${(116 / 231) * width - (160 / 231)}px`;
     }

     // mobius
     mobiusElement.style.top = `${baseTop}px`;
     mobiusElement.style.transform = 'translate(-159.4%, -27.5%)';
     if (width > 551) {
       mobiusElement.style.width = `${467.5 * scaleX}px`;
       mobiusElement.style.height = 'auto';
       mobiusElement.style.left = `${baseLeft}px`;
     } else {
       mobiusElement.style.width = `${(113.626 / 932) * height}px`;
       mobiusElement.style.height = 'auto';
       mobiusElement.style.left = `${(116 / 231) * width - (160 / 231)}px`;
     }
  }
}

function App() {
  const backgroundRef = useRef(null);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const guraRef = useRef(null);
  const bookRef = useRef(null);
  const cameraRef = useRef(null);
  const guitarRef = useRef(null);
  const hourGlassRef = useRef(null);
  const mirrorRef = useRef(null);
  const mobiusRef = useRef(null);


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
    };

    const onLoad = () => {
      updatePosition(windowSize, refs); // updatePositionを呼び出し
    };

    window.addEventListener('load', onLoad);

    window.addEventListener('resize', updateSize);
    window.addEventListener('resize', () => updatePosition(windowSize, refs)); // resize時にもupdatePositionを呼び出し

    return () => {
      window.removeEventListener('load', onLoad);
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('resize', () => updatePosition(windowSize, refs));
    };
  }, [windowSize]);

  const { width, height } = windowSize;
  const shouldShowItems = !(height < 480 || width < 320);

  return (
    <div className="background" css={backgroundStyle}>
      <Logo />
      <div>
        <img
          src={background}
          className="full-width-image"
          alt="Background"
          ref={backgroundRef}
          css={fullWidthImageStyle}
        />
        {shouldShowItems && (
          <>
            <img src={gura} className="gura-image" alt="gura" ref={guraRef} css={itemImageStyle} />
            <img src={book} className="book-image" alt="book" ref={bookRef} css={itemImageStyle} />
            <img src={camera} className="camera-image" alt="camera" ref={cameraRef} css={itemImageStyle} />
            <img src={guitar} className="guitar-image" alt="guitar" ref={guitarRef} css={itemImageStyle} />
            <img src={hourGlass} className="hourGlass-image" alt="hourGlass" ref={hourGlassRef} css={itemImageStyle} />
            <img src={mirror} className="mirror-image" alt="mirror" ref={mirrorRef} css={itemImageStyle} />
            <img src={mobius} className="mobius-image" alt="mobius" ref={mobiusRef} css={itemImageStyle} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;