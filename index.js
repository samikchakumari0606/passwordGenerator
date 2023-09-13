const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

//selectors
const textbox=document.getElementById("textbox");
const totalInput=document.getElementById("total");
const upercaseInput=document.getElementById("upercase");
const lowercaseInput=document.getElementById("lowercase");
const numberInput=document.getElementById("number");
const symbolInput=document.getElementById("symbol");




function generateRandom(dataSet){
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}


function generatePassword(password=""){
      if(upercaseInput.checked){
        password=password+generateRandom(upperSet)
      }
      if(lowercaseInput.checked){
        password=password+generateRandom(lowerSet)
      }
      if(numberInput.checked){
        password=password+generateRandom(numberSet)
      }
      if(symbolInput.checked){
        password=password+generateRandom(symbolSet)
      }
      if(password.length<totalInput.value){
           return generatePassword(password)
      }

      textbox.innerText=truncateString(password,totalInput.value);
}

generatePassword()

document.getElementById("btn").addEventListener("click",function(){
    generatePassword()
})


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}


