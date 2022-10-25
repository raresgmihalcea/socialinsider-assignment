import axios from 'axios'

const baseURL = 'http://localhost:3001'

const getBrands = async () => {
  const brands = await axios.get(`${baseURL}/brands`)
  return brands
}

const getPosts = async ({ id, profileType, date, size }) => {
  const posts = await axios.post(`${baseURL}/posts`, { id, profileType, date, size })
  return posts
}

export default { getBrands, getPosts }
