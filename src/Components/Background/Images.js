import rainy from "../../assets/rainy.jpg"
import cloud from "../../assets/cloud.jpg"
import foggy from "../../assets/foggy.jpg"
import rainbow from "../../assets/rainbow.jpg"
import storm from "../../assets/storm.png"
import sunny from "../../assets/sunny.jpg"
import snow from "../../assets/snow.jpg"



function images({situatie}) {
    
  switch(situatie){
      case "Rain":
          return <img className="background-image" src={rainy} alt="rainy" />
      case "Drizzle":
          return <img className="background-image" src={rainy} alt="rainy" />
      case "Clear":
          return <img className="background-image" src={sunny} alt="sunny" />
      case "Mist":
          return <img className="background-image" src={foggy} alt="rainy" />
      case "Snow":
          return <img className="background-image" src={snow} alt="rainy" />
      case "Storm":
          return <img className="background-image" src={storm} alt="rainy" />
      case "Clouds":
          return <img className="background-image" src={cloud} alt="rainy" />
     default:
        return <img className="background-image" src={rainbow} alt="rainy" />

  }
  console.log(situatie);
}

export default images