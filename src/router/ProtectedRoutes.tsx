import React, { useEffect } from 'react'
import { useHistory, Route } from 'react-router-dom'

import Dashboard from '../screen/admin/dashboard/Dashboard'
import User from '../screen/admin/user/User'

import { routerPathProtected } from './RouterPath'
import { RootState } from './../store/ConfigureStore'
import { useSelector } from 'react-redux'

function ProtectedRoutes() {

    const history = useHistory()

    const authen = useSelector((state: RootState) => state.user.auth)

    useEffect(() => {

        if (authen) {
            console.log("true login !")
        } else {

            history.replace(`/login`)
        }
    
    })

    return (
        <>
        <Route  path={`${routerPathProtected.Dashboard}`} component={Dashboard} />
        <Route  path={`${routerPathProtected.User}`} component={User} />
        </>
    )
}

export default ProtectedRoutes