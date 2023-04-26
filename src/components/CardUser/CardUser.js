import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
const CardUser = ({data}) =>  {
    return (
    <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
        <CardMedia
            component="img"
            height="140"

            image={data.img}
            alt="green iguana"
        /> 
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {data.descripcion}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.precio}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    );
}
export default CardUser;

