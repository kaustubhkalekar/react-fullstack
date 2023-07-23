import { Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material"
import './styles.scss'
import { Controller, useForm } from "react-hook-form"
import TextFields from "../../sharedComponents/textFields"
import { useDispatch } from "react-redux"
import { addUser } from "../../../redux/user/actions"

export const Admin = () => {

    const { control, handleSubmit } = useForm({})
    const dispatch = useDispatch()

    const submitHandler = (data) => {
        const payload = { name: data.firstName }
        console.log("data", payload)
        dispatch(addUser(payload))
    }

    return (
        <Grid className={'adminMain'}>
            <Grid container style={{ background: 'white' }}>
                {/* <Grid item container> */}
                {/* <Paper> */}
                <form onSubmit={handleSubmit(submitHandler)}>
                    <Grid item container spacing={2} style={{ padding: '5px' }}>
                        {/* <Grid container spacing={2}> */}

                        <Grid item xs={12}>
                            <Typography variant="h6" >Add User</Typography>
                        </Grid>

                        {/* </Grid> */}
                        <Grid item direction='column' spacing={3}>
                            <Stack direction={'column'} spacing={1}>
                                <label>First Name</label>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    rules={{
                                        // required:{
                                        //     value:!0
                                        // }
                                        minLength: {
                                            value: 2,
                                            message: 'Must be greater than 2 characters'
                                        }
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextFields
                                            value={value}
                                            placeholder={'Enter user fisrt name'}
                                            onChangeHandler={(e) => {
                                                onChange(e)
                                            }}
                                        />
                                    )}
                                />
                            </Stack>
                        </Grid>

                        {/* <Grid item direction='column' spacing={3}>
                            <Stack direction={'column'} spacing={1}>
                                <label>Last Name</label>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    rules={{
                                        // required:{
                                        //     value:!0
                                        // }
                                        minLength: {
                                            value: 2,
                                            message: 'Must be greater than 2 characters'
                                        }
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextFields
                                            value={value}
                                            placeholder={'Enter user last name'}
                                            onChangeHandler={(e) => {
                                                onChange(e)
                                            }}
                                        />
                                    )}
                                />
                            </Stack>
                        </Grid> */}
                        <Grid item container justifyContent="flex-end" alignItems="flex-end" >
                            <button className="buttonStyle">Submit</button>
                        </Grid>
                    </Grid>
                    {/* <Button>Submit</Button> */}

                </form>
                {/* </Paper> */}
                {/* </Grid> */}


            </Grid>
        </Grid>

    )
}