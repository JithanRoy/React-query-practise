import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/superHeroes.page';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/super-heroes'>Traditional Super Heroes</Link>
                  </li>
                  <li>
                    <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                  <Route path='/super-heroes'>
                    <SuperHeroesPage />
                  </Route>
                  <Route path='/rq-super-heroes/:heroId'>
                    <RQSuperHeroesPage />
                  </Route>
                  <Route path='/rq-super-heroes'>
                    <RQSuperHeroesPage />
                  </Route>
                  <Route path='/'>
                    <HomePage />
                  </Route>
              </Switch>
            </div>
          </Router>
       </QueryClientProvider>
  );
}

export default App;
