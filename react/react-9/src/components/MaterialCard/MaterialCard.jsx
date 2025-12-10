import { Card, CardHeader, CardContent, CardActions, IconButton, Typography, CardMedia } from "@mui/material"
import { Favorite, Share } from "@mui/icons-material"

export default function MaterialCard({ data }) {
    return (
        <Card sx={{maxWidth: "300px"}}>
            <CardHeader title={data.title} subheader={data.subtitle} />
            <CardMedia component="img" image={`./${data.imageUrl}`} alt={data.title} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">{data.text}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Add to favorites"><Favorite /></IconButton>
                <IconButton aria-label="Share"><Share /></IconButton>
            </CardActions>
        </Card>
    )
}
