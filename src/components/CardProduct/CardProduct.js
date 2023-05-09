import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contexto } from '../../App';
import Button from '@mui/material/Button';


const CardProduct = ({data, esCarrito, subtexto}) =>  {
    const contexto = useContext(Contexto)

    if (data.img == undefined)
        return(
            <div>Artículo no encontrado</div>
        );
    if(!esCarrito)
        
        return (
            <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
            <Link to={`/detalle-producto/${data.id}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.img}
                    alt="green iguana"
                /> 
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${data.precio}
                </Typography>
                    <Typography onClick={ () => {contexto.agregarAlCarrito(data);} } gutterBottom variant="small" component="div">
                        Agregar una unidad al carrito
                    </Typography>
                
            </CardContent>
            </CardActionArea>
        </Card>
        );
    else
        return (
            <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
            <Link to={`/detalle-producto/${data.id}`}>
                <CardMedia
                    component="img"
                    height="200"
                    image={data.img}
                    alt="green iguana"
                /> 
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.nombre}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {subtexto}
                </Typography>
                
            </CardContent>

            </CardActionArea>
            <Button onClick={ () => {contexto.decrementar(data);} } variant="contained">-</Button>
            <Button onClick={ () => {contexto.incrementar(data);} } variant="outlined">+</Button>
        </Card>
        );
}
export default CardProduct;
