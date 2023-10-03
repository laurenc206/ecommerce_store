"use client"
// REMOVE HARD CODED VIDEO PLAYER AND MAKE FETCH FROM BACKEND 
import { scale } from "@cloudinary/url-gen/actions/resize";
import { toAnimated } from "@cloudinary/url-gen/actions/transcode";
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { edit } from "@cloudinary/url-gen/actions/animated";
import { preview } from "@cloudinary/url-gen/actions/videoEdit";

interface VideoGifProps {
    fileName: string
}

const VideoGif: React.FC<VideoGifProps> = ({
    fileName
}) => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dhekoldby'
        }
    })

    const video = cld.video(`${fileName}`);
    
    const image = video
                    .videoEdit(preview().duration("10.0"))
                    .transcode(toAnimated("auto"))
                    .animated(edit().loop())
                    .setAssetType("video");

    return (
        <AdvancedImage cldImg={image} />
    )
};

export default VideoGif;
