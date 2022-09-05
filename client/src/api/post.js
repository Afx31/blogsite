import api from './apiConfig';

// ---------- GET ----------

// GET Post bio data for homepage
export const getPostBio = async () => {
  try {
    var res = await api.get('/posts/getPostBio');
    return res.data;
  } catch (err) {
    console.log('API Error: ' + err.message);
  }
};

// GET Post by ID
export const getPostBySlug = async (slug) =>  {
  try {
    var res = await api.get(`/posts/getPostBySlug/${slug}`);
    return res.data;
  } catch (err) {
    console.log('API Error: ' + err.message);
  }
};

// GET All Post ID's/Headings for specific car
export const getPostsByCar = async (car) => {
  try {
    var res = await api.get(`/posts/postsByCar/${car}`);
    return res.data;
  } catch (err) {
    console.log('API Error: ' + err.message);
  }
};

// GET latest Post ID for specific car to load that car's page
export const getLinksFirstPostId = async (car) => {
  try {
    var res = await api.get(`/posts/firstPostId/${car}`);
    return res.data[0].slug;
  } catch (err) {
    console.log('API Error: ' + err.message);
  }
};


// ---------- POST ----------

// ADD a Post
export const addPost = async (heading, car, thumbnail, description, formData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({heading, car, thumbnail, description, formData});

  try {
    var res = await api.post('/posts/add-post', body, config);
    return res.data;
  } catch (err) {
    console.log('API Error: ' + err.message);
  }
};


// ---------- Comments ----------

// ADD Comment
export const addComment = async (postId, formData) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  try {
    var res = await api.post(`/posts/addComment/${postId}`, formData, config);
    return res.data;
  } catch (err) {
    console.log('API Error: ' + err.message);
  }
};

// DELETE Comment
export const deleteComment = async (postId, commentId) => {
  try {
    await api.delete(`/posts/deleteComment/${postId}/${commentId}`);
  } catch (err) {
    console.log('API Error: ' + err.message);
  }
};