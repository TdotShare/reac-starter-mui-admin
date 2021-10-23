import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material'
import React, { useState , useEffect } from 'react'
import Paperbase from '../../../template/Paperbase'

import { useDispatch } from 'react-redux'
import { setBreadCms } from './../../../store/reducer/Breadcrumbs'
import { setTitle } from './../../../store/reducer/TitleHeader'
import { routerPathProtected } from '../../../router/RouterPath'

function Dashboard() {

    return (
        <Paperbase children={Pages()} />
    )
}


function Pages() {

    const dispatch = useDispatch()

    const [title] = useState<string>("ภาพรวมระบบ")


    useEffect(() => {
        dispatch(setBreadCms([
            { value : "หน้าหลัก" ,  link : routerPathProtected.Dashboard , active : false , },
            { value : title ,  link : undefined , active : true , }
        ])) 
        dispatch(setTitle(title))
    }, [dispatch , title])


    return (
        <>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Typography >{title}</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ mr: 1 }}>
                                Add user
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Container >
                <Typography>test</Typography>
            </Container>
        </>
    )
}

export default Dashboard