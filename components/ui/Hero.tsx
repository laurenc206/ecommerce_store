
import VideoGif from "./video-gif";
import CloudinaryVideo from "./cloudinary-video";
import HeroCard from "./hero-card";
import Container from "./container";



const Hero = () => {
    //<div className="h-screen w-full object-cover absolute z-10">
                
   // <CloudinaryVideo fileName="/dolphins" className="object-fill absolute md:inset-y-12 h-full w-full blur-sm  opacity-80"/>
    return (
        
        <div className="h-screen w-full -top-[calc(theme(spacing.safe-top)+theme(spacing.nav-height))] relative flex flex-col justify-center items-center overflow-hidden ">


                <HeroCard />

                <CloudinaryVideo fileName="/dolphins" className="object-fill absolute md:inset-y-12 h-full w-full blur-sm  opacity-80"/>
          
        </div> 
        
     
    );
}

export default Hero;