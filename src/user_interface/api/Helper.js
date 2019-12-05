import axios from "axios";

const loginUrl = "https://webttcn.herokuapp.com/v1/auth/";
const registerUrl = "https://webttcn.herokuapp.com/v1/users/";
const getByIdUrl = "https://webttcn.herokuapp.com/v1/users/";
const categoriesUrl = "https://webttcn.herokuapp.com/v1/categories";
const womenShoesUrl = "https://webttcn.herokuapp.com/v1/shoes?kind=women";

export function getCategories() {
  axios
    .get(categoriesUrl)
    .then(res => {
      return res.data;
    })
    .catch(error => console.log(error));
}
