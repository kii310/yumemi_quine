(() => {
  const AA = ``; // ここに任意の AA (1 と空白で構成されたもの)を挿入
  const ENCODED_AA = require('zlib').deflateSync(AA).toString('base64');
  console.log({ ENCODED_AA });
})();
