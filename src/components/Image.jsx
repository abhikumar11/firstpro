import myimg from "../assets/texture.jpg";
const Image = () => {
     return (
          <div>
               <div>
                    <img src="river.jpg" alt="" />
               </div>
               <div>
                        <img src={myimg} alt="" />
               </div>
          </div>
     );
};

export default Image;
