const axios = require('axios').default;

var params = '1';
for(var i=2; 1800 >= i; i++){
  params = params + ',' + i.toString()
}

var logArray = [];
const accessKey = ''

var actualRequest = "https://fcsapi.com/api-v2/forex/profile?id=" + params + "&access_key=" + accessKey;
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