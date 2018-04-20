import axios from "axios";

const api = {
    search: function(searchTerm,startYear,endYear) {
        const apiKey = "4c7d837f7d8844449adb9b6b06ff1331";
        const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${searchTerm}&begin_date=${startYear}0101&end_date${endYear}0101`;
        console.log(queryURL);

        return axios.get(queryURL).then(function(data) {
            console.log(data);
            return data.data.response;
        }
}
};