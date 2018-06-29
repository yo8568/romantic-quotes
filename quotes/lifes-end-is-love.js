/**
 * Life's end is love
 * 人生就是必須經歷到一些障礙
 * 從障礙中丟掉世俗的假設
 * 最後, 便擁有了愛
 * 
 * ----工程師午後浪漫 少東筆
 */

exprot.module = function () {
  return ['life']
    .reduce((experience, trouble) =>
      experience.concat(
        trouble.replace('if', 'ov')
      ), []
    ).toString()
}