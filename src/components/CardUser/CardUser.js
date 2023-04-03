import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import spock from "./spock.png";
const CardUser = ({data}) =>  {
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="140"
            image={spock}
            alt="green iguana"
        /> 
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.email}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    );
}
export default CardUser;

