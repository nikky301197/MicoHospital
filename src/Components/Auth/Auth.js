export const isLoggedIn = () =>{
   sessionStorage.setItem("isLoggedIn", !! sessionStorage.getItem("current-user"));
return !! sessionStorage.getItem("current-user");
}