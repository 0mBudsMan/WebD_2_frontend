import "./profile.scss";

import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";

import Diversity3Icon from '@mui/icons-material/Diversity3';

import "./posts.scss";


import { useParams } from 'react-router-dom'
import { useContext, useState } from "react";

import { AuthContext } from "../../context/authContext";







const Profile = () => {
  const {currentUser} = useContext(AuthContext)
  var dummyData = [
    {
  
      "id": 0,
      "Name": currentUser.name,
      "Profile_link": currentUser.profilePic,
      "Education": currentUser.Education,
      "Location": currentUser.Location,
      "ReqSent": false,
    },
    {
      "id": 1,
      "Name": "Om Buddhadev",
      "Profile_link": "https://c4.wallpaperflare.com/wallpaper/161/220/852/breaking-bad-walter-white-fish-eye-lens-vector-wallpaper-preview.jpg",
      "Education": "BTech in IT from IIIT Allahabad",
      "Location": "Rajkot, Gujarat",
      "ReqSent": false
    },
    {
        "id": 2,
        "Name": "Anurag Jain",
        "Profile_link": "https://media.licdn.com/dms/image/D4D03AQFBviBSAL3NrQ/profile-displayphoto-shrink_400_400/0/1689967951702?e=1697673600&v=beta&t=XLbS69p6AJaOgS8sRbOBGK3TiEQaF8acM0AzfJYzQcs",
        "Education": "BTech from IIIT Allahabad",
        "Location": "San Fransisco",
        "ReqSent": false,
    },
    {
        "id": 3,
        "Name": "Atharv Gadekar",
        "Profile_link": "https://media.licdn.com/dms/image/D4D03AQFEqwzqLF8AbQ/profile-displayphoto-shrink_800_800/0/1672002269327?e=2147483647&v=beta&t=VnlJXLNKyfywcjHIoN2-wRKqN32KkUZ7w7KqoT-Xt8g",
        "Education": "BTech from MIT, USA",
        "Location": "Mumbai",
        "ReqSent": false,
    },
    {
        "id": 4,
        "Name": "Pranav Tiwari",
        "Profile_link": "https://media.licdn.com/dms/image/D5603AQFd7cqtV0aoAg/profile-displayphoto-shrink_800_800/0/1684600133206?e=2147483647&v=beta&t=XOrEWdIV9ufu0-n7jF4paynVWpgcc5Ctb9GSn7oqwsA",
        "Education": "BTech from Harvard University",
        "Location": "Prayagraj",
        "ReqSent": false,
    },
    {
        "id": 5,
        "Name": "Manas Gupta",
        "Profile_link": "https://media.licdn.com/dms/image/D4D03AQGfCBeGkfTVJw/profile-displayphoto-shrink_800_800/0/1689284619766?e=2147483647&v=beta&t=TVBRtQEUeDE3AbNZfAL13zVcY5Fq4gxjBEHYn2QDT2Y",
        "Education": "BTech from Standford University",
        "Location": "California",
        "ReqSent": false,
    }
  ]
  console.log(dummyData);
  if(localStorage.getItem("dummyData")===null){
    localStorage.setItem("dummyData", JSON.stringify(dummyData));
  }
  var dummyDatafromLocalStorage = JSON.parse(localStorage.getItem("dummyData"));

  


  const {id} = useParams();
  console.log(id);
 
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://picsum.photos/600/200"
          alt=""
          className="cover"
        />
        <img
          src={dummyDatafromLocalStorage[id].Profile_link}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
         
          <div className="center">
            <span className="forName">{dummyDatafromLocalStorage[id].Name}</span>
            { id!=='0'? (
            <span onClick={()=>{ dummyDatafromLocalStorage[id].ReqSent=!dummyDatafromLocalStorage[id].ReqSent; localStorage.setItem("dummyData", JSON.stringify(dummyDatafromLocalStorage)); window.location.reload();}}>
             {
              !dummyDatafromLocalStorage[id].ReqSent ? (<div className="forFlex"><Diversity3Icon></Diversity3Icon><p className="reqdecorate">Send Friend Request</p></div>):(<p>Request Sent</p>)
             }
            </span>):(<p></p>)}
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span className="forData">{dummyDatafromLocalStorage[id].Location}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span className="forData">{dummyDatafromLocalStorage[id].Education}</span>
              </div>
            </div>
            
          </div>
          
        </div>

       
      </div>
      
    </div>
  );
};

export default Profile;
