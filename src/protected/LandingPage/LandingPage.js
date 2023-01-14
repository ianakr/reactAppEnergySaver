import * as React from "react";
import { useNavigate } from "react-router";
import "./LandingPage.css";
import vector from "./assets/vector.svg";
import BtnLp from "./components/BtnLp";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EnergySaving from "../../components/EnergySaving/EnergySaving";


function LandingPage(props) {
  const propsData = {
    btnConsumtion: {
      label: "CONSUMPTION",
      svg: vector
    },
    btnNotification: {
      label: "NOTIFICATIONS",
      svg: vector
    },
    btnChallenges: {
      label: "CHALLENGES",
      svg: vector
    },
    btnMembers: {
      label: "MEMBERS",
      svg: vector
    },
    // btnBack: {
    //   label: "Back",
    // },
    // menuRanking: {
    //   label: "Ranking",
    //   svg: otherstrendTwo,
    //   link: '/ranking'
    // },
    // menuHome: {
    //   label: "Home",
    //   svg: home,
    //   link: '/'
    // },
    // menuRooms: {
    //   label: "Rooms",
    //   svg: document,
    //   link: '/rooms'
    // },
  };
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <EnergySaving />
      <div className="landing-page">
        <BtnLp className="btn-lp-instance-1" {...propsData.btnConsumtion} />
        <BtnLp className="btn-lp-1-instance" {...propsData.btnNotification} />
        <BtnLp className="btn-lp-2-instance" {...propsData.btnChallenges} />
        <BtnLp className="btn-lp-3-instance" {...propsData.btnMembers} />
      </div>
      <Footer />

    </>
  );
};
export default LandingPage;
