import { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Logo from "@/assets/images/logo-english.png";
import LogoLegacy from "@/assets/images/logo.png";
import People from "@/assets/images/people.png";
import { getCertificates } from "../../../api/index";
import LoginForm from "./LoginForm";
import RegisterForm from "./LoginForm";

const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #212529;
  padding: 0 30px;
  & ul {
    list-style: none;
    margin: 7px 0;
    & li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`;

const IconFacebook = styled.div`
  background-color: #3c5997;
  padding: 6px 10px;
  border-radius: 50px;
  cursor: pointer;
`;

const IconTwitter = styled.div`
  background-color: #1da1f1;
  padding: 6px 7px;
  border-radius: 50px;
  cursor: pointer;
`;

const IconYoutube = styled.div`
  background-color: #ff0000;
  padding: 6px;
  border-radius: 50px;
  cursor: pointer;
`;

const IconLinkedin = styled.div`
  background-color: #0072b1;
  padding: 6px 8px;
  border-radius: 50px;
  cursor: pointer;
`;

const Header = styled.header`
  background-color: #ffffff;
  display: flex;
  padding: 0px 60px;
  align-items: center;
  & img {
    width: 230px;
    height: 60px;
    padding: 20px 50px 20px 0;
    border-right: solid 1px #e0e0e0;
  }
  & h3 {
    margin-left: 20px;
    color: #424242;
    font-weight: 500;
    font-size: 24px;
  }
`;

const Main = styled.main`
  position: relative;
  z-index: 3;
  max-width: 1440px;
  background-color: #057dbc;
  display: grid;
  grid-template-columns: 20% 50% 30%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  & h1,
  & p {
    color: #fff;
  }
  & h1 {
    margin-bottom: 20px;
    line-height: 50px;
    font-size: 40px;
  }
  & p {
    line-height: 25px;
    font-size: 20px;
  }
  & img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    float: right;
  }
`;

const Forms = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px 40px 30px;
  background-color: #fff;
  border-top: solid 1px #e0e0e0;
  & ul {
    list-style: none;
    margin: 0;
    & li {
      padding: 8px 12px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
      &:not(:last-child) {
        margin-bottom: 0px;
      }
    }
  }
  & img {
    width: 250px;
    height: 50px;
  }
`;

const Index = () => {
  useEffect(() => {
    getCertificates().then((results) => console.log(results));
  }, []);

  return (
    <div>
      <SocialMedia>
        <div>
          <ul>
            <li>
              <IconFacebook>
                <FontAwesomeIcon icon={faFacebookF} color="#ffffff" />
              </IconFacebook>
            </li>
            <li>
              <IconTwitter>
                <FontAwesomeIcon icon={faTwitter} color="#ffffff" />
              </IconTwitter>
            </li>
            <li>
              <IconYoutube>
                <FontAwesomeIcon icon={faYoutube} color="#ffffff" />
              </IconYoutube>
            </li>
            <li>
              <IconLinkedin>
                <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
              </IconLinkedin>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faInstagram} color="#ffffff" />
              </span>
            </li>
          </ul>
        </div>
      </SocialMedia>
      <Header>
        <div>
          <Image priority src={Logo} alt="logo" />
        </div>
        <div>
          <h3>Results Service for Candidates</h3>
        </div>
      </Header>
      <Main>
        <div />
        <div style={{ padding: "70px 0" }}>
          <h1>
            Welcome to the Results <br /> Service for Candidates
          </h1>
          <p>
            This website offers you the quickest way to access <br /> your
            results. Register below and you will be notified <br /> by email as
            soon as your results are released
          </p>
        </div>
        <div>
          <Image priority src={People} alt="logo" />
        </div>
      </Main>
      <Forms>
        <div>
          <RegisterForm />
        </div>
        <div>
          <LoginForm />
        </div>
      </Forms>
      <Footer>
        <div>
          <ul>
            <li>Terms of Use</li>
            <li>Data Protection</li>
            <li>Cambridge English Website</li>
            <li>© 2023 Cambridge University Press & Assessment</li>
          </ul>
        </div>
        <div>
          <Image priority src={LogoLegacy} alt="logo" />
        </div>
      </Footer>
    </div>
  );
};

export default Index;
