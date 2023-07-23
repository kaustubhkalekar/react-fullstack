import { Card, CardContent, Grid, Typography } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../../redux/user/actions";

export const Dashboard = () => {

    const { users } = useSelector(state => state.user)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <Grid container direction="row" spacing={2}>
            {users.map((user) =>
            (
                <Grid item cotainer>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5">
                                {user.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )

            )}

        </Grid>
    )
}