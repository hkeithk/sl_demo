import Layout from 'Layout';
import { Provider } from 'react-redux';
import { store } from 'reducers';

export const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
};

export default App;
