import React from "react";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillRedditCircle,
  AiFillFileText,
} from "react-icons/ai";
import { SiWebmoney } from "react-icons/si";
import { FaGlobeAmericas } from "react-icons/fa";

const ProfileIcon = ({ platform }) => {
  if (platform === "website") {
    return <FaGlobeAmericas />;
  }
  if (platform === "github") {
    return <AiFillGithub />;
  }
  if (platform === "instagram") {
    return <AiFillInstagram />;
  }
  if (platform === "linkedin") {
    return <AiFillLinkedin />;
  }
  if (platform === "facebook") {
    return <AiFillFacebook />;
  }
  if (platform === "twitter") {
    return <AiFillTwitterCircle />;
  }
  if (platform === "reddit") {
    return <AiFillRedditCircle />;
  }
  if(platform === "resume"){
    return  <AiFillFileText/>
  }
  return <SiWebmoney />;
};

export default ProfileIcon;
