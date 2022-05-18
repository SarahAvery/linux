import styled from "styled-components";

const MenuStyled = styled.nav`
  background: rgba(52, 61, 65, 0.8);
  width: 5%;
  height: 100%;
  @media (min-width: 850px) {
    width: 3.75%;
  }
  @media (min-width: 1400px) {
    width: 3.25%;
  }

  ul {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 24px);
    align-items: center;
    justify-content: flex-start;
  }

  li {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px 0;
    border-radius: 4px;
    @media (max-width: 850px) {
      margin: 2px 0;
    }

    &:hover {
      background: #6c7477;
    }
  }

  .settings {
    cursor: pointer;
  }

  li.menu {
    flex-grow: 1;
    align-items: flex-end;
    margin-bottom: 25%;

    img {
      padding: 9%;
    }
  }

  a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 70%;
    height: auto;
    @media (max-width: 850px) {
      padding: 0 2px;
      width: 80%;
    }
  }
`;

export default MenuStyled;
