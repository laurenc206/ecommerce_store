"use client"
// REMOVE HARD CODED VIDEO PLAYER AND MAKE FETCH FROM BACKEND 
import {AdvancedVideo, AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { format } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { pad } from "@cloudinary/url-gen/actions/resize";
import { blurred } from "@cloudinary/url-gen/qualifiers/background";

import { cn } from '@/lib/utils';

interface CloudinaryVideoProps {
    fileName: string
    videoHeight?: string
    videoWidth?: string,
    maxHeight?: string,
    maxWidth?: string,
    className?: string
}

const CloudinaryVideo: React.FC<CloudinaryVideoProps> = ({
    fileName,
    videoHeight,
    videoWidth,
    maxHeight,
    maxWidth,
    className
}) => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dhekoldby'
        }
    })

   



    const video = cld.video(`${fileName}`).quality(50).delivery(format(auto()))

    // add logic to get certian video size
    // make sure to eager resize but lazy load 
    // <AdvancedImage cldImg={imageurl} alt="" plugins={[lazyload(), placeholder()]} />
    //<AdvancedVideo 
    //cldVid={cld.video(`${fileName}`).quality("auto").delivery(format(auto()))} 
    //autoPlay 
    //loop 
    //muted
    //playsInline
///>
    return (
   
        <AdvancedVideo 
            cldVid={video} 
            autoPlay 
            loop 
            muted
            playsInline
            className={ cn(className) }
        />
  

      
    );
};

export default CloudinaryVideo;
