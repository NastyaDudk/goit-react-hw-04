import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const MY_ACCESS_KEY = "uMl-yp3IJMOGUqTIvi8rCKqZkVc4A_xI8y8XgvQKUOo";

export const fetchPhotos = async (query, page) => {
  const response = await axios.get(
    `search/photos/?client_id=${MY_ACCESS_KEY}`,
    {
      params: {
        query,
        per_page: 12,
        page: page,
      },
    }
  );

  return response.data;
};
