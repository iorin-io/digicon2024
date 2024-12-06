/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState, useCallback } from 'react';
import { css } from '@emotion/react';
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

  @media screen and (max-width: 900px) {
    width: 180dvw;
    object-fit: cover;
  }

  @media screen and (min-width: 900px) {
    width: 1600px;
  }
`;

const itemImageStyle = css`
  position: absolute;
  object-fit: contain;
  z-index: 10;
`;

function App() {
  const backgroundRef = useRef<HTMLImageElement | null>(null);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const guraRef = useRef<HTMLImageElement | null>(null);
  const bookRef = useRef<HTMLImageElement | null>(null);
  const cameraRef = useRef<HTMLImageElement | null>(null);
  const guitarRef = useRef<HTMLImageElement | null>(null);
  const hourGlassRef = useRef<HTMLImageElement | null>(null);
  const mirrorRef = useRef<HTMLImageElement | null>(null);
  const mobiusRef = useRef<HTMLImageElement | null>(null);

  const updatePosition = useCallback(() => {
    const backgroundElement = backgroundRef.current;
    const guraElement = guraRef.current;
    const bookElement = bookRef.current;
    const cameraElement = cameraRef.current;
    const guitarElement = guitarRef.current;
    const hourGlassElement = hourGlassRef.current;
    const mirrorElement = mirrorRef.current;
    const mobiusElement = mobiusRef.current;

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
  }, [windowSize]);

  useEffect(() => {
    // 画面が完全に読み込み終わってから発火
    const onLoad = () => {
      updatePosition();
    };

    window.addEventListener('load', onLoad);

    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateSize);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('load', onLoad);
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('resize', updatePosition);
    };
  }, [updatePosition]);

  const { width, height } = windowSize;
  const shouldShowItems = !(height < 480 || width < 320);

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
  );
}

export default App;
