import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../App";
import { auth, provider } from "../Home/Firebase";
const Login = () => {
  const [user, setUser] = useContext(UserContext);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        localStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);

      })

      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <AmazonLogo src="https://i0.wp.com/mynintendonews.com/wp-content/uploads/2019/06/amazon_logo.jpg?ssl=1" />
        <h3>Sign into Amazon</h3>
        <LoginButton onClick={signIn}>Sign In With Google</LoginButton>
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
  display: grid;
  place-items: center;
`;
const Content = styled.div`
  color: white;
  background-color: black;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 2px 5px white;
  text-align: center;
`;
const AmazonLogo = styled.img`
  height: 150px;
  border-radius: 5px;
`;
const LoginButton = styled.button`
  padding: 5px 20px;
  margin-top: 26px;
  background-color: #ff8c08;
  border: 2px solid #e65100;
  border-radius: 5px;
`;
