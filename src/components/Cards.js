import React from 'react'
import { Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
const Cards = () => {
    return (
        <>
            <Typography variant="h4"> 
                <Stack direction="row" justifyContent="space-evenly" sx={{ flexWrap: "wrap" }}>
                    <Card sx={{ maxWidth: 250, mt: "30px", backgroundColor: "blueviolet" }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="70"
                        // image="/static/images/cards/contemplative-reptile.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" >
                                $500.00
                                {<ArrowCircleUpIcon />}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Total Earning
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 900, height: 200, mt: "30px", backgroundColor: "blueviolet" }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="70"
                        // image="/static/images/cards/contemplative-reptile.jpg"
                        />
                        <Button variant="text" size= "small" color="inherit" sx={{ float: "right" }}>month</Button>
                        <Button variant="contained" size= "small" color="primary" sx={{ float: "right" }}>year</Button>
                        <CardContent>
                            <Typography gutterBottom variant="h4" >
                                $961
                                {<ArrowCircleUpIcon />}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Total order
                            </Typography>
                        </CardContent>
                    </Card>
                   
                        <Card sx={{ Width: 300, height: 100, mt: "30px", backgroundColor: "rgb(30, 136, 229)" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" >
                                    $203k
                                    {<ArrowCircleUpIcon />}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Total Income
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ Width: 300, height: 100, mt: "30px",fontColor:"secondary", backgroundColor: "rgb(97, 97, 97)"}}>
                            <CardContent >
                                <Typography gutterBottom variant="h6"  direction="column">
                                    $203k
                                    {<ArrowCircleUpIcon />}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Total Income
                                </Typography>
                            </CardContent>
                        </Card>   
                </Stack>

            </Typography>
        </>
    )
}

export default Cards