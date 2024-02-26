import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_cloud_name, 
  api_key: process.env.CLOUDINARY_api_key, 
  api_secret:process.env.CLOUDINARY_api_secret
});

const uploadoncloudinary =async (localfilepath) =>{
  try{
    if(!localfilepath){
      return null;
    }
    const response =await cloudinary.uploader.upload(localfilepath,{resource_type:
    'auto'})
    console.log("file has been uploded sucessfully", response.url)
    return response


  }
  catch(error){
    fs.unlinkSync(localfilepath)
    return null;

  }
}




export { uploadoncloudinary}