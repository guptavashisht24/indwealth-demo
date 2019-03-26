let api_call = new Promise(function(resolve,reject){
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let result = JSON.parse(this.responseText);
        resolve(result);
    }
  };
  xhttp.open("GET", "https://indiawealth.in/api/v2/funds/getList/?limit="+offset+"&offset=0", true);
  xhttp.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3NjgsInVzZXJuYW1lIjoiOTgxMTg4NTk4OSIsImV4cCI6MTU1NDEwMDIwNCwiZW1haWwiOiJhZGl0eWFleGFtQGdtYWlsLmNvbSIsIm1vYmlsZSI6Ijk4MTE4ODU5ODkiLCJvcmlnX2lhdCI6MTU1MzQ5NTQwNH0.AegsqGlvfjS7IMYv1xa8EWIgaEdOXpo4Sve2FMLIwlo");
  xhttp.send();
})