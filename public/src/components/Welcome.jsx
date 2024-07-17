import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Robot} alt="robot" />
      {currentUser ? (
        <>
          <h1>
            Welcome, <span>{currentUser.username}!</span>
          </h1>
          <h3>Select a chat to start messaging</h3>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 1rem;
  text-align: center;
  height: 100%;

  img {
    height: 20rem;
  }

  h1 {
    span {
      color: #4e0eff;
    }
  }

  h3 {
    color: #a0a0a0;
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    img {
      height: 15rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;
