import type { FC } from "react";

import Layout from "../../components/layout/Layout";

/**
 * `Root` is lading page of application.
 * @returns `ReactElement`
 */
const Root: FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Hello, World!</h1>
      <p>This is the personal web portfolio of Alakh Karmarkar.</p>
      <h1 lang="hi" className="text-3xl font-bold">
        नमस्ते, दुनिया!
      </h1>
      <p lang="hi">यह अलख करमरकर का निजी वेब पोर्टफोलियो है।</p>
      <h1 lang="ja" className="text-3xl font-bold">
        アラフ・カルマルカール
      </h1>
      <p lang="ja">
        これは、アラフ・カルマルカールの個人的な Web ポートフォリオです。
      </p>
    </Layout>
  );
};

export default Root;
