import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
        maxResults: '50'
      },
  headers: {
    // 'X-RapidAPI-Key': `${process.env.REACT_REAPID_API_KEY}`,
    'X-RapidAPI-Key': 'a30b92986amsh87431866f300395p1bd2dbjsnd4b5204cf077',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
  }
}