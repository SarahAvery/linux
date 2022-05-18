import styled from "styled-components";

const ClockStyled = styled.div`
  display: flex;

  p span {
    padding-right: 3px;

    &:last-child {
      padding-right: 0;
    }
  }
  p {
    padding: 0 4px;
  }
`;

export default ClockStyled;
