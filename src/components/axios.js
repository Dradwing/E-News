import React from "react"
import axios from "axios"




async function Data() {
    const apikey="b747f749695c4c469540652affd155b8"
   var [q,setq]=React.useState('');
    var domains="bbc.co.uk, techcrunch.com, engadget.com,timesofindia.indiatimes.com,ndtv.com,indiatoday.in,indianexpress.com,thehindu.com,news18.com,business-standard.com,dnaindia.com"
     var response;
   var [baseURL,setbaseURL]=React.useState(" https://newsapi.org/v2/everything?sortby=popularity&language=en&q="+{q}+"&domains="+{domains}+"&apikey="+{apikey});
    try {
      response = await axios.get(baseURL);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    return response;
  };
  export default Data;
