export const API_ROOT = `http://codeial.com:8000/api/v2/`;
export const apiurls = {
  login: () => `${API_ROOT}users/login`,
  signup: () => `${API_ROOT}users/signup`,
  edit: () => `${API_ROOT}users/edit`,
  profile: (id) => `${API_ROOT}users/${id}`,
  friends: () => `${API_ROOT}friendship/fetch_user_friends`,
  addfriend: (id) => `${API_ROOT}friendship/create_friendship?user_id=${id}`,
  removeFriend: (id) => `${API_ROOT}friendship/remove_friendship?user_id=${id}`,
  posts: (page, limit) => `${API_ROOT}posts?page=${page}&limit=${limit}`,
  addPost: () => `${API_ROOT}posts/create`,
  PostComment: () => `${API_ROOT}comments`,
  toggleLike: (id, liketype) =>
    `${API_ROOT}likes/toggle?likeable_id=${id}&likeable_type=${liketype}`,
  searchProfile: (t) => `${API_ROOT}users/search?text=${t}`,
};
