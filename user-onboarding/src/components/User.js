import React from "react";
import styled from "styled-components";

const FriendContainer = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  background-color: #dee2e6;

  h3 {
    margin: 0;
    padding: 0;
  }
`;

function User(props) {
  const { user } = props;

  if (!user) {
    return <h2>Loading Users...</h2>;
  }
  return (
    <FriendContainer>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <h3>{user.email}</h3>
    </FriendContainer>
  );
}

export default User;
