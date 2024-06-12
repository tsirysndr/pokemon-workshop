import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: rgb(58, 44, 1);
  background: linear-gradient(
    0deg,
    rgba(58, 44, 1, 1) 0%,
    rgba(255, 176, 68, 1) 100%
  );
`;

export const CardInner = styled.div`
  width: 65vw;
  height: 80vh;
`;
