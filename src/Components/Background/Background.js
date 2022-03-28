
import images from "./Images.js"


function index(backgrounds) {

  return (
    <div className='background' >
        <div className="overlay"></div>
        <images situatie={backgrounds}/>
        
    </div>
  )
}

export default index