import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import ScreenDC from '../components/dc/ScreenDC'
import HeroScreen from '../components/heroes/HeroScreen'
import ScreenMarvel from '../components/marvel/ScreenMarvel'
import SearchScreen from '../components/search/SearchScreen'
import { Navbar } from '../components/UI/Navbar'

const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className='super-div'>
                <Switch>
                    <Route exact path='/marvel' component={ScreenMarvel} />
                    <Route exact path='/hero/:heroeId' component={HeroScreen} />
                    <Route exact path='/dc' component={ScreenDC} />
                    <Route exact path='/search' component={SearchScreen} />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
