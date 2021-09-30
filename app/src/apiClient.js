export const getArticles = () => _get("/api/article");

export const getArticle = ({sloug}) => _get(`/api/article/${sloug}`)

export const addArticle = (newPost) => {
  console.log("addArticle was called in apiClient")
  return _post("/api/article", newPost);
}

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};


