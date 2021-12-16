import axios from 'axios';

export const submitComment = async (data) => {
  try {
    await axios.post('https://green-team001.herokuapp.com/comment', data);
  } catch (err) {
    alert(err);
  }
};

export const deleteCommentById = async (id) => {
  try {
    await axios.delete(`https://green-team001.herokuapp.com/comment/${id}`);
  } catch {
    alert('Error deleting a comment');
  }
};
