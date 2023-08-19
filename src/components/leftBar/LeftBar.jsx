import "./leftBar.scss";


import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
            <Link to="/register"><span><EditIcon /></span></Link>
          </div>
          <div className="item">
            <p className="userInfo">Education: </p>
            <span>{currentUser.Education}</span>
          </div>
          <div className="item">
            <p className="userInfo">Location: </p>
            <span>{currentUser.Location}</span>
          </div>
          
        </div>
        <hr />
        <div className="menu">
          <span ><h1>News around  {currentUser.Location} </h1></span>
          <ul>
          <div className="item">
            <li>
            <span>Rs 1.25 Crore Salary! Nashik Boy Anurag Makade Gets Huge Pay Package From Amazon, He Is Not From IIT Or IIM but from IIITA <br></br></span></li>
          </div>
          <div className="item">
            <li>
            <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore illo accusantium, quisquam ea ut cumque dolorum adipisci quidem autem at. Distinctio deserunt consectetur quae eligendi consequatur explicabo neque dicta, labore nostrum voluptatum cum quasi et! Sunt modi aperiam accusantium architecto placeat culpa corrupti ea! <br></br></span></li>
          </div>
          <div className="item">
            <li>
            <span>Rs 1.25 Crore Salary! Nashik Boy Anurag Makade Gets Huge Pay Package From Amazon, He Is Not From IIT Or IIM but from IIITA <br></br></span></li>
          </div>
          <div className="item">
            <li>
            <span>Rs 1.25 Crore Salary! Nashik Boy Anurag Makade Gets Huge Pay Package From Amazon, He Is Not From IIT Or IIM but from IIITA <br></br></span></li>
          </div>
        
          </ul>
        </div>
        <hr />
        
      </div>
    </div>
  );
};

export default LeftBar;
