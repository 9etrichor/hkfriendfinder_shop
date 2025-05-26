//ok
import { Link } from 'react-router';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
  
  //mui change button color
  const theme = createTheme({
    palette:{
      newPri:{
        main: "#FAAD9D",
        light: "#F1A798",
        dark: "#8B6058",
        contrastText: "#193228"
      }
    }
  })

  //make use of mui card component
  return (
    <Card sx={{ minWidth: 275}} className='shadow-sm  w-1/5 '>
      <CardHeader title={name} />

      <CardMedia
        className=' w-auto'
        component="img"
        image={imgSrc}
      />

      <CardContent className='font-light'>
        {money}
      </CardContent>

      <CardActions className='flex justify-end'>
        <ThemeProvider theme={theme} >
          <Link to={link} >
            <Button variant='contained' endIcon={<LocalMallIcon />} color='newPri'>
              Buy
            </Button>
          </Link>
        </ThemeProvider>
      </CardActions>
    </Card>
  )
}

export default Product