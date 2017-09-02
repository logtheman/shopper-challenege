
export function checkField(fieldName, value){
  let regex = "";
  switch (fieldName){
    case "email":
      regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(regex.test(value)){
        return null;
      }else{
        return "Please enter a valid email address";
      }
    case "phone":
      regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if(regex.test(value)){
        return null;
      }else{
        return "Please enter a valid 10 digit phone number";
      }
    case "zipcode":
      regex = /^\d{1,5}$/;
      if(regex.test(value)){
        return null;
      }else{
        return "Please enter a valid 5 digit zip code";
      }
    default:
      regex = /^[a-zA-Z ]{2,30}$/;
      if(regex.test(value)){
        return null;
      }else{
        return "Invalid Entry";
      }
  }

}

