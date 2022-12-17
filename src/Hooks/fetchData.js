import axios from "axios";

export const GameOptions = {
    method: 'GET', 
    headers: {
      'X-RapidAPI-Key': '4eb60ccce0msh9422e2902346130p1849cfjsnb8cab4cc95a1',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };

  
 export const fetchData= async(url,options)=>{
    let {data}=await axios.get(url,options);
    return data;
  }

  /**
  
  const options = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail',
  params: {lang: 'en', country: 'us', productcode: '0839915011'},
  headers: {
    'X-RapidAPI-Key': '4eb60ccce0msh9422e2902346130p1849cfjsnb8cab4cc95a1',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};
  */