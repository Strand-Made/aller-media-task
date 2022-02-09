function findArticleId(url: string) {
  let regex = /\d+/g;
  if (url) {
    let id = url.match(regex)?.join("");
    return id;
  }
  return null;
}

export default findArticleId;
