import styled from "styled-components";
import Image from "next/image";
import Logo from "@/assets/images/logo-cambridge.jpeg";

const Header = styled.header`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #ffffff;
  padding: 0 50px;
  align-items: flex-end;
  border-bottom: 1px solid #cccccc69;
  & img {
    width: 220px;
    height: auto;
  }
`;

const Main = styled.main`
  background-color: #ffffff;
  padding: 90px 0 40px;
  height: calc(100vh - 180px);
  & h1 {
    color: #215180;
    text-align: center;
  }
`;

const Reult = styled.div`
  max-width: 70%;
  margin: 30px auto;
`;

const HeaderResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #215180;
  padding: 20px 50px;
  & h3 {
    color: #ffffff;
  }
  & h2 {
    font-size: 30px;
    color: #ffffff;
  }
`;

const ContentResult = styled.div`
  border-right: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  padding: 70px 30px;
  & p {
    text-align: center;
    color: grey;
  }
  & h1 {
    color: #1d1d1d;
    margin: 30px 0;
  }
`;

const Nav = styled.ul`
  list-style: none;
  margin: 0;
  & li {
    display: inline-block;
    padding: 15px 10px;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  & li {
    display: inline-block;
    cursor: pointer;
    padding: 20px;
    color: grey;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const Index = () => {
  return (
    <div>
      <Header>
        <div>
          <Image priority src={Logo} alt="logo" />
        </div>
        <div>
          <Nav>
            <li
              style={{
                backgroundColor: "#e8ecf8",
                borderBottom: " 2px solid #1d1d1d",
              }}
            >
              <span>Send result</span>
            </li>
            <li>
              <span>Shared with</span>
            </li>
          </Nav>
        </div>
        <div>
          <Menu>
            <li>
              <span>Help</span>
            </li>
            <li>
              <span>Sign in</span>
            </li>
          </Menu>
        </div>
      </Header>
      <Main>
        <h1>Your result has been sent</h1>
        <Reult>
          <HeaderResult>
            <div>
              <h3>Preliminary English Test</h3>
            </div>
            <div>
              <h2>87/100</h2>
            </div>
          </HeaderResult>
          <ContentResult>
            <p>
              You have sent your results to the following
              insitution/organisation:
            </p>
            <h1>The Anglo Mexican Foundation</h1>
            <p>
              You can return later to see if the insitution/organisation has
              viewedthe result if you would like to send your result to another
              insitution/organisation, please click here.
            </p>
          </ContentResult>
        </Reult>
      </Main>
    </div>
  );
};

export default Index;
