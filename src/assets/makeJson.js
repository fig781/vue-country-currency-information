const axios = require('axios').default;

var params = '1';
for(var i=2; 1800 >= i; i++){
  params = params + ',' + i.toString()
}

var logArray = [];


var actualRequest = "https://fcsapi.com/api-v2/forex/profile?id=" + params + "&access_key=aLlqo3ql7yoRNFNLoNoxqz424s0MvKUp4TqRAYSGnhSxb7NCbd"
axios.get(actualRequest)
      .then(res => {
        for(var x=0; res.data.response.length > x; x++){
          if(res.data.response[x].type == 'forex'){
            
            var logObject = {Id:x, Country: res.data.response[x].country, ShortName:res.data.response[x].short_name };
            logArray.push(logObject)
          }
        }
        console.log(JSON.stringify(logArray))
      })
      .catch(e => console.log(e))