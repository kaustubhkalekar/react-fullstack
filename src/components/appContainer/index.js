import { Box, Grid, Tabs, Typography, Tab } from "@mui/material";
import { Fragment, useState } from "react";
import TabPanel from "../sharedComponents/tabPanel";
import { Dashboard } from "../scenes/Dashboard";
import { Admin } from "../scenes/Admin";
import './styles.scss'

export const AppIndex = () => {
    const [value, setValue] = useState(0)

    const handleChange = (evetn, newValue) => {
        setValue(newValue)
    }

    return (
        <Fragment>
            <Grid>
                {/* <Grid style={{ backgroundColor: '#9a9abb', height: '60px' }}>
                    <Grid style={{ padding: '10px' }}>
                        <Typography variant="h4">rEgister</Typography>
                    </Grid>
                </Grid> */}
                <Grid>
                    <Box sx={{ width: '100%', height: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider", background: 'white' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                            >
                                <Tab style={{ minWidth: '10%' }} label="Dashboard" />
                                <Tab style={{ minWidth: '10%' }} label="Admin" />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0} styleClass={'main'}>
                            {(value === 0) ? <Dashboard /> : ''}
                        </TabPanel>

                        <TabPanel value={value} index={1} styleClass={'main'}>
                            {(value === 1) ? <Admin /> : ''}
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    )
}