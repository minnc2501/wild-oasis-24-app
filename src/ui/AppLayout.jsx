import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

const MainStyle = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 3rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <MainStyle>
        <Container>
          <Outlet />
        </Container>
      </MainStyle>
      {/* <Footer /> */}
    </StyledAppLayout>
  );
}

export default AppLayout;
