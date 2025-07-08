import myimg from "../assets/user.jpg"; 
const Hero = () => {
  return (
    <div>
        <div className="container">
                <div className="introduction">
                    <h3>HEY THERE</h3>
                    <h2>I AM JO BREED</h2>
                    <h3>CREATIVE ART DIRECTOR & DESIGNER</h3>
                </div>
                <div className="imagesection">
                      <img src={myimg} alt=""/>
                </div>
        </div>
    </div>
  )
}

export default Hero