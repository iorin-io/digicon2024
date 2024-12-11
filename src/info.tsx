/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// モーダルオーバーレイのスタイル
const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 10, 10, 0.8); /* ダークでエモーショナルな背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// モーダルコンテンツのスタイル
const modalContentStyle = css`
  background: linear-gradient(
    135deg,
    #80714b,
    #aa996d
  ); /* グラデーション背景 */
  color: #ecf0f1; /* 明るいテキストカラー */
  padding: 30px 40px;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 20px;

  /* スクロールバーのスタイル（Webkitブラウザ向け） */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

// ボタンのスタイル
const buttonStyle = css`
  margin-top: 20px;
  background-color: #6d9daa; /* 鮮やかな赤色 */
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px; /* 1em -> 16px */
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #4b7580;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const paragraphStyle = css`
  line-height: 2;
`;

const headingStyle = css`
  margin: 50px 0 20px;
  font-size: 32px;
`;

interface InfoProps {
  onClose: () => void;
}
interface InViewPortAppearanceProp {
  children: ReactNode;
}

const InViewPortAppearance: React.FC<InViewPortAppearanceProp> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export const Info: FC<InfoProps> = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        css={modalOverlayStyle}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          css={modalContentStyle}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            css={css`
              font-size: 24px; /* 1.5em -> 24px */
              font-weight: bold;
              margin-bottom: 20px;
              text-align: center;
            `}
          >
            ディジタルコンテンツ表現実習2024 制作展
          </div>
          <h1
            css={css`
              font-size: 40px;
              margin: 40px 0 50px;
              text-align: center;
            `}
          >
            〇〇との対話
          </h1>
          <p>日時: 2024/12/12 10:00~18:30</p>
          <p>場所: 筑波大学春日エリア 7A202</p>
          <p>料金: 無料</p>
          <p>主催: 筑波大学情報学群情報メディア創成学類</p>
          <InViewPortAppearance>
            <h2 css={headingStyle}>About</h2>
            <p css={paragraphStyle}>
              我々は常に対話し続けている。そして、もはやその対象は人間だけではない。
              計算機上のAIやデジタルな存在と自然に会話し、共感や洞察を得ることができる時代。
              もし、自分の魂を計算機に複製することが可能だとしたら——。
              <br />
              <br />
              自分自身と向き合い、対話し、共存するデジタルな「もう一人の自分」。
              この制作展は、音、テキスト、映像、画像などの多彩なメディアを通じて、
              デジタルに写し取られた自己とインタラクションを試みる実験の場です。
              <br />
              人間の感情、思考、記憶を計算機に再現し、それらがどのように
              「私たち自身」との新しいコミュニケーションを形作るかを探求します。
            </p>
          </InViewPortAppearance>
          <InViewPortAppearance>
            <h2 css={headingStyle}>Comment</h2>
            <div>
              <div>プロデューサ</div>
              <div>小野寺海</div>
              <div>情報学群情報メディア創成学類</div>
              <p css={paragraphStyle}>
                本制作展のタイトルに用いられている「饗宴」という言葉。この言葉は
                ”共に（con）” + “生きる（vivium）“の二つからなる、ラテン語
                “convivium” を訳したものです。
                convivumとは、飲み食いを共にする人々が楽しみや喜びを共有する宴のこと。この制作展でも、まさしく
                convivium
                のように制作者と鑑賞者が共に集い、作品を介して感動を分かち合えればと思います。
                我々の展示や制作物を通して「感動する」ことを嗜み、その心地よさを共有していただければ幸いです。会場にて、共に感動を味いましょう。
              </p>
            </div>
          </InViewPortAppearance>
          <InViewPortAppearance>
            <h2 css={headingStyle}>Credit</h2>
            <p>プロデューサ ／ 小野寺海</p>
            <p>ポスターデザイン ／ 猪原大智</p>
            <p>Webサイト ／ 髙𣘺伊織</p>
          </InViewPortAppearance>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <button onClick={onClose} css={buttonStyle}>
              閉じる
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
