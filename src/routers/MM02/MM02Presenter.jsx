import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import { CommonBtn } from "../../components/commonComponents";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const UnderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadImg = styled.img`
  width: 300px;
  height: 300px;
  margin: 0px 10px;
  border-radius: 5px;
  object-fit: cover;
  &:before {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 5px;
  }
`;

const TextInput = styled.input`
  width: ${(props) => props.width || `450px`};
  height: ${(props) => props.height || `40px`};

  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px;

  outline: none;
  border: 1px solid ${(props) => props.theme.greyColor};
  background: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;

  &:hover {
    box-shadow: 5px 5px 5px #777;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 35px;
`;

const FileLabel = styled.label`
  width: 120px;
  height: 30px;
  margin-top: 25px;

  line-height: 25px;
  background-color: ${(props) => props.theme.checkColor};

  color: #fff;

  box-shadow: ${(props) => props.theme.boxShadow};

  border-radius: ${(props) => props.theme.radius};
  text-align: center;
  cursor: pointer;
`;

const RightWrapper = styled.div`
  width: 50%;
`;

const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const MM02Presenter = ({ fileChangeHandler, imagePath }) => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>Upload Video</Title>
      </Typist>
      <UnderWrapper>
        <LeftWrapper>
          <TextInput placeholder="title" />
          <TextInput placeholder="description" height="360px" />
        </LeftWrapper>
        {/*
      <BtnWrapper>
        <CommonBtn isCreate={true}>UPLOAD</CommonBtn>
      </BtnWrapper> */}
        <RightWrapper>
          <UploadImg src={imagePath} />
          <FileInput type="file" id="file-js" onChange={fileChangeHandler} />
          <FileLabel htmlFor="file-js">파일선택</FileLabel>
        </RightWrapper>
      </UnderWrapper>
    </Wrapper>
  );
};

export default MM02Presenter;
