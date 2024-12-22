import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignIn from "../pages/SignIn";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: sticky;
  top:0;
  flex: 1;
  background-color: ${({theme})=>theme.bgLighter};
  height: 100vh;
  color: ${({theme})=>theme.text};
  font-size: 14px;
`;
const Wrapper = styled.div`
  padding: 15px 18px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
`;
const Img = styled.img`
  height: 20px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  margin: 5px;
  padding: 1px 0;
  &:hover{background-color:${({theme})=>theme.soft}}
`;
const Hr = styled.hr`
  margin: 11.5px 0px;
  border: 0.5px solid ${({theme})=>theme.soft};
`;
const Login = styled.div`
margin-bottom:5px;
font-family: sans;
display:flex;
flex:wrap;
`;
const Button = styled.button`
padding: 5px 10px;
background-color: transparent;
color: blue;
border: 1px solid blue;
border-radius: 5px;
display: flex;
align-items: center;
gap:5px;
`;

const Menu = ({darkMode, setDarkMode}) => {

  const {currentUser} = useSelector(state => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{textDecoration:'none', color:"inherit"}}>
        <Logo>
          <Img src={logo} />
          MeTube
        </Logo>
        </Link>
        <Item>
        <Link to="/" style={{textDecoration:"none"}}>
          <HomeIcon />
          Home
        </Link>
        </Item>
        <Item>
        <Link to="trends" style={{textDecoration:"none"}}>
          <ExploreIcon />
          Explore
        </Link>
        </Item>
        <Item>
        <Link to="subscriptions" style={{textDecoration:"none"}}>
          <SubscriptionsIcon />
          Subscriptions
        </Link>
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        {!currentUser &&
        <>
        <Login>Sign in to like, comment, share and subscribe.</Login>
        <Link to="signin" style={{textDecoration:"none"}}>
        <Button><AccountCircleIcon/>Sign In</Button>
        </Link>
        <Hr />
        </>
        }
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsSoccerIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <MovieIcon />
          Movies
        </Item>
        <Item>
          <NewspaperIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <OutlinedFlagIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineIcon />
          Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
