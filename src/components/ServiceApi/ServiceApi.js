import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: "24473196-42771002d468cd95ccee08c09",
    per_page: "12",
    image_type: "photo",
    orientation: "horizontal",
  },
});

const getImages = async (query, page) => {
  const response = await instance(`?q=${query}&page=${page}`);
  const data = await response.data;
  return data;
};

export default getImages;
