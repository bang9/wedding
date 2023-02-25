import styled from '@emotion/styled';

export const AppContainer = styled.div`
  margin: 0 auto;

  max-width: ${(props) => props.theme.size.viewport};
  min-height: 100vh;

  overflow: scroll;
  background-color: ${(props) => props.theme.color.background};
`;
