import axios from 'axios';

export const getLeaves = async () => {
  try {
    const result = await axios.get('https://green-team001.herokuapp.com/leaves');
    return await result.data;
  } catch {
    return [];
  }
};
