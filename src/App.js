
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import queryClient from './Hooks/queryClient/client';
import SingleUser from './Page/View/SingleUser';
import Users from './Page/View/Users';

function App() {
  //default window focus stoper 
  // {defaultOptions: {queries : {refetchOnWindowFocus:false}}}
  

  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route path="/user/:id">
          <SingleUser />
        </Route>
      </Switch>
    </Router>

    <ReactQueryDevtools/>
    </QueryClientProvider>
    
    
      
    </div>
  );
}

export default App;
