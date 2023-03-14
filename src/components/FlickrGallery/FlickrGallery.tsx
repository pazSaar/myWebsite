import React, { FC, useState } from "react";
import SearchBar from "./SearchBar";
import Gallery from "./Gallery";
import { TagMode } from "./common/types";
import { BsGithub } from "react-icons/all";

type FlickrGalleryProps = {};

const FlickrGallery: FC<FlickrGalleryProps> = ({}) => {
  const [imageFilter, setImageFilter] = useState("");
  const [tagMode, setTagMode] = React.useState<TagMode>("any");

  const handleTagModeChange = (mode: TagMode) => {
    setTagMode(mode);
  };

  const handleSearchBarTextChange = (newValue: string) => {
    setImageFilter(String(newValue));
  };
  return (
    <div className="my-10">
      <h1 className="mb-2">
        The Flickr Gallery{" "}
        <a>
          {" "}
          <BsGithub className="inline-block text-xl" />{" "}
        </a>
      </h1>
      <div className="text-center mx-10 p-10 flex flex-col h-auto bg-onPrimaryBg border-8 border-dashed border-black">
        <SearchBar
          onChange={handleSearchBarTextChange}
          setTagMode={handleTagModeChange}
        />
        <Gallery filterText={imageFilter} tagMode={tagMode} />
      </div>
    </div>
  );
};

export default FlickrGallery;
