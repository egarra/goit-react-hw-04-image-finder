import axios from "axios";

export const FetchImages = async (q, page, per_page = 12) => {

    const key = '30986125-b49381751b2e2f4b8e31e6edc';
    axios.defaults.baseURL = 'https://pixabay.com/api/'
    
    const searchParams = {
        params: {
          q,
          page,
          per_page,
          safesearch: 'true',
          image_type: 'photo',
          orientation: 'horizontal'
        },
      };
    const response = await axios.get(
        `?key=${key}&q=${q}`, searchParams
    )
    
    return response.data
}
