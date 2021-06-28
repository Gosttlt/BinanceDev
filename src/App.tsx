/** @format */

import { Route } from 'react-router-dom'
import Header from 'Components/Header'
import Container from 'Components/Container'
import React from 'react'
import Preloader from 'Components/Preloader'
import './App.css'

const PageOneContainer = React.lazy(() => import('Containers/PageOneContainer'))
const PageTwoContainer = React.lazy(() => import('Containers/PageTwoContainer'))

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Route
          path='/'
          exact
          render={() => (
            <React.Suspense fallback={<Preloader />}>
              <PageOneContainer />
            </React.Suspense>
          )}
        />
        <Route
          path='/pagetwo'
          exact
          render={() => (
            <React.Suspense fallback={<Preloader />}>
              <PageTwoContainer />
            </React.Suspense>
          )}
        />
      </Container>
    </div>
  )
}

export default App
