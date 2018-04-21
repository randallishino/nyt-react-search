import axios from "axios";
import dotenv from "dotenv";

const api = {
    // search nyt api
    search: function(searchTerm,startYear,endYear) {
        const apiKey = process.env.API_KEY;

        // practicing es6 template literals, need to test still
        const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${searchTerm}&begin_date=${startYear}0101&end_date${endYear}0101`;
        console.log(queryURL);

       return axios.get(queryURL);
},
// get saved from db
getArticle: function() {
    return axios.get("/api/saved");
  },
  // Saves a new article to the db
  saveArticle: function(articleObj) {
    return axios.post("/api/saved", articleObj);
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};

export default api;