import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL =
    "https://media.istockphoto.com/id/856939024/photo/cracked-earth-soil-sunset-landscape.jpg?s=612x612&w=is&k=20&c=tt6ONtMQECoQcq4KSXT4XzFDF7cY_4ORXT6eZG017Vk="
   
    const HOT_URL = "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=612x612&w=is&k=20&c=BGUWvOZp-tqxGzKABRNgMbBQUeNeirukuJqfP9Bf324=";
    const COLD_URL = "https://images.unsplash.com/photo-1548637432-600ccc7fbda6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlciUyMHBob3RvfGVufDB8fDB8fHww";
    const RAIN_URL ="https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return(
        <div className="InfoBox">
       
            <div className='cardContainer' >
       <Card sx={{ maxWidth: 345 }}>
         <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAIN_URL
          : info.temp > 15
          ? HOT_URL
          : COLD_URL 
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80 
          ?  <ThunderstormIcon/> 
          : info.temp > 15
          ?  <WbSunnyIcon/>
          : <AcUnitIcon />
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} >
         <div>Temperature = {info.temp}&deg;C</div>
         <div>Humidity = {info.humidity}</div>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather} </i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
     </div>
    )
}