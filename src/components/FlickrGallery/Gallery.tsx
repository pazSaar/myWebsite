import React, { FC, useEffect, useRef, useState } from "react";
import FlickrPhoto from "./FlickrPhoto";
import LoadingAnimation from "./LoadingAnimation";
import useDebounce from "./hooks/useDebounce";

type GalleryProps = {
  filterText?: string;
  tagMode?: "any" | "all";
};

type flickerImage = {
  id?: string;
  owner?: string;
  secret?: string;
  server?: string;
  farm?: number;
  title?: string;
  ispublic?: number;
  isfriend?: number;
  isfamily?: number;
};

const Gallery: FC<GalleryProps> = ({ filterText = "", tagMode = "any" }) => {
  const apiKey = "d986d1e0e73415b16709220cf8a064ea";
  const pageNum = 1;
  const [flickrImages, setFlickrImage] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debounceFilterText = useDebounce(filterText, 500);

  const flickrAPICall = `https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=18&api_key=${apiKey}&content_type=1&is_getty=1&tags=${debounceFilterText}&tag_mode=${tagMode}&page=${pageNum}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(flickrAPICall)
      .then((response) => {
        return response.json();
      })
      .then((images) => {
        setFlickrImage(images.photos.photo);
      })
      .catch((error) => {
        console.error(
          `Flickr images could not be fetched due to error: ${error.message}`
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [debounceFilterText, tagMode]);

  return isLoading ? (
    <LoadingAnimation />
  ) : flickrImages.length > 0 ? (
    <div className="grid grid-cols-auto gap-0">
      {flickrImages.map((image: flickerImage) => (
        <FlickrPhoto
          key={image.id}
          serverId={image.server}
          id={image.id}
          secret={image.secret}
          title={image.title}
        />
      ))}
    </div>
  ) : (
    <span className="flex items-center justify-center">No Images Found</span>
  );
};

export default Gallery;
