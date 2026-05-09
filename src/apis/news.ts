const API_BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const reqGetTopStories = async () => {
  const res = await fetch(`${API_BASE_URL}/topstories.json`);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return await res.json();
};

export const reqGetNewStories = async () => {
  const res = await fetch(`${API_BASE_URL}/newstories.json`);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return await res.json();
};

export const reqGetBestStories = async () => {
  const res = await fetch(`${API_BASE_URL}/beststories.json`);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return await res.json();
};

export const reqGetStory = async (id: number) => {
  const res = await fetch(`${API_BASE_URL}/item/${id}.json`);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return await res.json();
};
