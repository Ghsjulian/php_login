export function check_email(get_value){
  let value = get_value.trim();
  if (value.includes("@outlook.com") || value.includes("@yandex.com") ||
  value.includes("@yahoo.com") ||
  value.includes("@gmail.com")){
    return true;
  } else {
    return false;
  }
}

