
import axios from "axios";
const api = process.env.REACT_APP_API;


export default {
  user: {
    login: credentials =>
      axios.post(`${api}/auth`, { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post(`${api}/users`, { user }).then(res => res.data.user),
    confirm: token =>
      axios
        .post(`${api}/auth/confirmation`, { token })
        .then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post(`${api}/auth/reset_password_request`, { email }),
    validateToken: token => axios.post(`${api}/auth/validate_token`, { token }),
    resetPassword: data => axios.post(`${api}/auth/reset_password`, { data }),
    fetchCurrentUser: () =>
      axios.get(`${api}/users/current_user`)
      .then(res => res.data.user)
      .catch(err => { 
        let isAuthenticated = false;
        return isAuthenticated
      }),
    changeUserAvatar: (user, data) =>
      axios.post(`${api}/users/${user}/change_avatar`, data).then(res => res.data.user),
    updateUserProfile: (user, data) =>
      axios.post(`${api}/users/${user}/update_user_info`, data).then(res => res.data),
    fetchUserLikes: (user, data) =>
      axios.get(`${api}/users/${user}/get_user_likes`).then(res => res.data.likes),
  },
  profile: {
    fetchUserProfile: username =>
      axios.get(`${api}/profiles/get_profile/${username}`).then(res => res.data.user)
  },
  fossil: {
    createFossil: (user, data) => {
      const { file, fossilName, tags, desc } = data
      let formData = new FormData();
      formData.append('file', file);
      formData.append('title', fossilName);
      formData.append('tags', tags);
      formData.append('desc', desc);

      return axios.post(`${api}/fossils/${user}/new_fossil`, formData).then(res => res.data)
    },
    fetchFossil: url => {
      return axios.get(`${api}/fossils/${url}`).then(res => res.data.fossil)
    },
    getAllFossils: () => {
      return axios.get(`${api}/fossils/query/get_all`).then(res => res.data.fossils)
    },
    fetchUserFossils: user => {
      return axios.get(`${api}/fossils/query/user/${user}`).then(res => res.data.fossils)
    },
    addDinoClaps: data => {
      return axios.post(`${api}/fossils/clap_up/${data.fossilClaps.id}`, data).then(req => req.data.claps)
    }
  }
};