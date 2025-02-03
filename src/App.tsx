import { ErrorAfter2s } from './components/ErrorAfter2s';
import Providers from './providers';

function App() {
  return (
    <Providers>
      {/* <TestIcon /> */}
      <ErrorAfter2s />
    </Providers>
  );
}

export default App;
