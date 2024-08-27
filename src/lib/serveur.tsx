import cloudinary from "./cloudinary";

interface Resource {
    asset_id: string;
    public_id: string;
    folder: string;
    filename: string;
    format: string;
    version: number;
    resource_type: string;
    type: string;
    created_at: string;
    uploaded_at: string;
    bytes: number;
    backup_bytes: number;
    width: number;
    height: number;
    aspect_ratio: number;
    pixels: number;
    url: string;
    secure_url: string;
    status: string;
    access_mode: string;
    access_control: any;
    etag: string;
    created_by: any;
    uploaded_by: any;
  }
  
type ImageProps = string[];


 async function getData(): Promise<ImageProps> {
    const results = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute();
    const secureUrls = results.resources.map((resource: Resource) => resource.secure_url);
    console.log(secureUrls);
    return secureUrls;
    

  }

  export default getData;
 
  
