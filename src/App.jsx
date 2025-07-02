import GlobalStyles, { breakpoints } from "./styles/GlobalStyles";

import Form from "./ui/Form";
import Sidebar from "./ui/Sidebar";
import styled from "styled-components";

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12rem 1fr;

  min-height: 100dvh;
  max-width: ${breakpoints.md};
  width: 100%;

  @media screen and (min-width: ${breakpoints.md}) {
    grid-template-columns: 18rem 1fr;
    grid-template-rows: minmax(35rem, auto);
    margin-top: auto;
    padding: 1rem;
    background-color: var(--white);
    border-radius: 16px;
    min-height: unset;
    gap: 3rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <h1 className="sr-only">Solución de formulario de varios pasos</h1>
        <Container>
          <Sidebar />
          <Form />
        </Container>

      </StyledApp>
    </>
  );
}

export default App;
