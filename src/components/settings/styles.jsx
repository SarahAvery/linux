import styled from "styled-components";

const SettingsStyled = styled.div`
  width: 800px;
  height: 600px;
  background-color: rgb(255, 255, 255);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  border: 1px solid grey;
  border-radius: 4px;

  overflow: hidden;

  @media (max-width: 850px) {
    width: 600px;
    height: 400px;
  }

  .title-bar {
    background: rgb(58, 58, 58);
    display: flex;
    color: rgb(235, 235, 235);
    height: 50px;
    align-items: center;
    padding: 5px;
    width: 100%;

    .icon {
      color: rgb(235, 235, 235);
      padding: 8px;
      border: 1px solid black;
    }
  }

  .nav {
    border-right: 1px solid grey;
    min-width: 28%;

    .title-bar {
      justify-content: space-between;
    }
  }

  .menu {
    overflow-y: auto;
    max-height: calc(100% - 50px);
    display: block;

    .icon {
      color: rgb(97, 97, 97);
    }

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(169, 169, 169);
      outline: 1px solid slategrey;
    }
  }

  ul {
    border-bottom: 1px solid grey;
    height: auto;
    padding: 0 2px;
  }

  .menu li {
    height: 35px;
    justify-content: flex-start;
    padding: 0 10px;
    align-items: center;

    .icon {
      padding-right: 10px;
    }

    &:hover {
      background: rgb(228, 228, 228);
    }
  }
  .default {
    background-color: rgb(241, 114, 2);
    color: rgb(255, 255, 255);
  }

  .li-chev {
    p {
      flex-grow: 1;
      text-align: right;
    }

    .chevron {
      flex-grow: 1;
    }
  }

  .files {
    flex-grow: 1;

    .title-bar {
      justify-content: flex-end;

      p {
        width: 55%;
      }
    }
  }
  /* Files */

  .img-container {
    overflow-y: auto;
    max-height: calc(100% - 50px);
    display: block;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(169, 169, 169);
      outline: 1px solid slategrey;
    }
  }

  .currImg {
    border-bottom: 1px solid grey;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee;
    padding: 10px 0;

    img {
      object-fit: cover;
      width: 40%;
      max-height: 90%;
      margin: 0 auto;
    }
  }

  .img-cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 8px;

    &:after {
      content: "";
      flex: auto;
    }

    .card {
      width: 33%;
      margin: 0 auto;
      padding: 5px;
    }

    img {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default SettingsStyled;
