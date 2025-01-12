import { BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';
import Layout from './components/layout/Layout';
import AppRoutes from './routes';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
  font-family: ${props => props.theme.fonts.body};
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Layout>
          <AppRoutes />
        </Layout>
      </AppContainer>
    </Router>
  );
}

export default App;
