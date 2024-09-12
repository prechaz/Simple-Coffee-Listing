import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../comonent/nav/Nav'
function MainLayout() {
    return (
        <>
            <div>
                <Nav/>
            </div>
            <Outlet />
        </>
    )
}

export default MainLayout
