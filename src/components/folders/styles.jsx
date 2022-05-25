import styled from "styled-components";

const FoldersStyled = styled.div`
  position: absolute;
  top: 24px;
  left: 5%;
  @media (min-width: 850px) {
    left: 3.75%;
  }
  @media (min-width: 1400px) {
    left: 3.25%;
  }

  display: flex;
  flex-direction: column;
  max-height: 600px;
  max-width: 800px;

  .folder {
    padding: 8px;
    width: auto;
    height: auto;
    font-size: 14px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    a {
      text-decoration: none;
    }

    p {
      width: 100%;
      text-align: center;
      padding-top: 2px;
      color: rgb(255, 255, 255);
      text-shadow: 1px 1px 1px #000;
    }

    img {
      width: 45px;
      height: auto;
    }
  }
`;

export default FoldersStyled;
