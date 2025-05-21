import { Link } from 'react-router';


import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Product = ({name, imgSrc}) => {
  const link = "/product/" + name
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
  return (
    <Card sx={{ minWidth: 275}} className='shadow-sm w-16'>
      <CardHeader title={name} />

      <CardMedia
        className=' w-auto'
        component="img"
        image={imgSrc}
      />

      <CardActions>
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