import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { CommentsContextProvider } from "./context/forComments";
import { type } from "@testing-library/user-event/dist/type";

var postsarr = []; var temp=0;
if(!localStorage.getItem("posts") || JSON.parse(localStorage.getItem("posts")).length===0){



fetch("https://api.unsplash.com/photos/random/?count=10&client_id=41FO5G1yZGAAY-dGBTUX0SinyLubfXgQvC9hUfsdogc")
.then((res)=>{
  return res.json()
})
.then((data)=>{
  console.log(data);
  var new_post = {};
  data.map((tada)=>{
    const new_post = {
      id: temp++,
      name: tada.user.first_name,
      desc: tada.description,
      profilePic:tada.user.profile_image.large,
      userId: 1,
      commentId: [],
      img: tada.urls.regular,
      communities: ["Sample1","Sample2"],
      communitiesString: "Sample1, Sample2",
  
    }
    postsarr.push(new_post);
    localStorage.setItem("posts", JSON.stringify(postsarr));
    

  })
})



setTimeout(() => {
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <CommentsContextProvider>
          <App />
        </CommentsContextProvider>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
  // Proceed with further lines of code here
}, 2000);

}
else{
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <CommentsContextProvider>
          <App />
        </CommentsContextProvider>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
  // Proceed with further lines of code here


}



