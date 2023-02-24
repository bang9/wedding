import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid red;
  padding: ${(props) => `${props.theme.size.px12} ${props.theme.size.px24}`};
`;
