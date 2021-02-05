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

const BtnWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
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
    content: "Choose the Video";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 400px;
    height: 400px;
    background-color: #fff;
    border: 2px dotted #777;
    color: #999;
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

const MM02Presenter = ({ fileChangeHandler }) => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>Upload Video</Title>
      </Typist>

      <FileInput type="file" id="file-js" onChange={fileChangeHandler} />

      <TextInput placeholder="title" />
      <TextInput placeholder="description" height="360px" />

      <FileInput type="file" id="file-js" onChange={fileChangeHandler} />
      <FileLabel htmlFor="file-js">파일선택</FileLabel>

      <BtnWrapper>
        <CommonBtn isCreate={true}>UPLOAD</CommonBtn>
      </BtnWrapper>
    </Wrapper>
  );
};

export default MM02Presenter;
