import * as React from "react";
import {useNavigate, useParams} from "react-router";
import "./RoomDetail.css";
// import ellipse14 from "./assets/ellipse14.svg";
// import ellipse15 from "./assets/ellipse15.svg";
import vector from "./assets/vector.svg";


// import ellipse16 from "./assets/ellipse16.svg";



// import progress from "./assets/progress.svg";

// import ellipse13 from "./assets/ellipse13.svg";
import thermometer from "./assets/thermometer.svg";

// import ellipse11 from "./assets/ellipse11.svg";

import MainButtons from "./components/MainButtons";


import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SvgInfo from "./components/SvgInfo";
import loginService from "../../services/LoginService";
import homeService from "../../services/HomeService";
import {useEffect, useState} from "react";


const RoomDetail = () => {

  const { roomId } = useParams();
  const navigate = useNavigate();
  const [home, setHome] = useState({});
  const [room, setRoom] = useState({});

  useEffect(() => {
    homeService.getHome(loginService.userAuthenticated().home_id)
      .then((home) => {
        setHome(home);
        const room = home.rooms.find((room) => room.room_id === roomId);
        if (room) {
          setRoom(room);
        } else {
          navigate("/page-not-found")
        }
      })
  }, []);

  const propsData = {
    mainButtons: {
      vector: vector,
      mainButton: "Send Notification",
    },
    mainButtons1: {
      vector: vector,
      mainButton: "Challenges",
    },
    mainButtons2: {
      vector: vector,
      mainButton: "Devices",
      link: `/rooms/${roomId}/devices`,
    },
    mainButtons3: {
      vector: vector,
      mainButton: "Delete room",
    },
  };
  return (
    <>
      <Header />
      <Breadcrumb label={room.room_name}/>
      <div className="room-detail">
        <div className="flex-container-3">
          <SvgInfo value="20°C" title="Electricity Expense" />
          <SvgInfo value="23L" title="Water Expense" />
        </div>
        <MainButtons
          className="main-buttons-instance-1"
          {...propsData.mainButtons}
        />
        <MainButtons
          className="main-buttons-1-instance"
          {...propsData.mainButtons1}
        />
        <MainButtons
          className="main-buttons-2-instance"
          {...propsData.mainButtons2}
        />
        <MainButtons
          className="main-buttons-3-instance"
          {...propsData.mainButtons3}
        />
      </div>
      <Footer />
    </>
  );
};
export default RoomDetail;
