import styled from "styled-components";

const TaskbarStyled = styled.div`
  width: 100%;
  background-color: rgb(40, 40, 40);
  height: 24px;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;

  .activities,
  .stats,
  .date {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .date {
    justify-content: center;
  }

  .stats {
    justify-content: flex-end;
  }

  .icon {
    padding: 0 6px;
  }

  .percent {
    padding-left: 0;
    padding-right: 6px;

    .battery {
      transform: rotate(270deg);
      padding: 0;
      margin-left: 6px;
      font-size: 12px;
    }
    span {
      padding-left: 2px;
      font-size: 12px;
    }
  }
`;

export default TaskbarStyled;
