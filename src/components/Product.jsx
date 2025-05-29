//ok
import { Link } from 'react-router';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

//used in home page to display product. get the product name, money and image from parent element
const Product = ({money, name, imgSrc}) => {
  //the click link in button
  const link = "/product/" + name
  
  //make use of mui card component
  return (
    <Card sx={{ minWidth: 275}} className='shadow-sm  w-1/5 '>
      <Link to={link}>
      <CardContent className='text-2xl font-semibold'>
        {name + money}
      </CardContent>

      <CardMedia
        className=' w-auto'
        component="img"
        image={imgSrc}
      />

      </Link>
    </Card>
  )
}

export default Product