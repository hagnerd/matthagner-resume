import styled from "@emotion/styled";
import { animated } from "react-spring/hooks";
import Img from "gatsby-image";

const Avatar = styled(Img)`
  min-height: 150px;
  min-width: 150px;
  border-radius: 50%;
  margin-right: 40px;
`;

const HeaderContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  background-color: #f2ca98;
`;

const Title = styled("h1")`
  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`;

const SubTitle = styled(animated.h2)`
  font-size: 1.8rem;

  @media (min-width: 700px) {
    font-weight: 400;
  }

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

const Hr = styled("hr")`
  max-width: 90%;
`;

export { Avatar, HeaderContainer, Title, SubTitle, Hr };
