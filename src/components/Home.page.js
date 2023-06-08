import { Link, Route, Router, Routes } from "react-router-dom"
import { SuperHeroesPage } from "./superHeroes.page"
import { RQSuperHeroesPage } from "./RQSuperHeroes.page"

export const HomePage = () => {
  return (
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
      <Routes>
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
      </Routes>
    </div>
  </Router>
  )
}
