import React from "react";
import styled from "styled-components";
import Typist from "react-typist";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin: 0px 0px 40px 0px;
`;

const MM02Presenter = (fileChangeHandler) => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>Upload Video</Title>
      </Typist>
    </Wrapper>
  );
};

export default MM02Presenter;
