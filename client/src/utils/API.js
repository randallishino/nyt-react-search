import axios from "axios";
import dotenv from "dotenv";

const api = {
    search: function(searchTerm,startYear,endYear) {
        const apiKey = process.env.API_KEY;
        const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${searchTerm}&begin_date=${startYear}0101&end_date${endYear}0101`;
        console.log(queryURL);

        return axios.get(queryURL).then(function(data) {
            console.log(data);
            return data.data.response;
        });
}
};