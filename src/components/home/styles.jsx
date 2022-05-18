import styled from "styled-components";

const HomeStyled = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${require(`../../assets/img/${props.backgroundImage}`)} )`};
`;

export default HomeStyled;
