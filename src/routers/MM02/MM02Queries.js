import { gql } from "apollo-boost";

export const REGIST_VIDEO = gql`
  mutation registerVideo($path: String!, $title: String!, $desc: String!) {
    registerVideo(path: $path, title: $title, desc: $desc)
  }
`;
//상수(변하지 않는 수)라 대문자로 표기할 것임
