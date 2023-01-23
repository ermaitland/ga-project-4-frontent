import {
  styled,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  CardActionArea
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Products.scss';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export default function ProductCard({
  name,
  brand,
  image,
  dose,
  side_effects,
  primary_use,
  id
}) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const navigateToProduct = () => navigate(`/products/${id}`);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className='productCard'>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={name} subheader={brand} />
        <CardActionArea onClick={navigateToProduct}>
          <CardMedia component='img' height='194' image={image} alt={name} />
        </CardActionArea>
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            Find out more
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='Read more'
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Basic info on: {name}</Typography>
            <Typography display='block'>Dose: {dose}</Typography>
            <Typography display='block'>
              Side Effects: {side_effects}
            </Typography>
            <Typography display='block'>Used for: {primary_use}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </section>
  );
}
