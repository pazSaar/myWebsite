import React, { FC, useEffect, useState } from "react";
import Popup from "./Popup";
import { TagMode } from "./common/types";
import { CiFloppyDisk, GoFileDirectory } from "react-icons/all";

type SearchBarProps = {
  onChange: (value: string) => void;
  setTagMode: (mode: TagMode) => void;
};

const SearchBar: FC<SearchBarProps> = ({ onChange, setTagMode }) => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [openPopup, setOpenPopup] = useState(false);
  const [popupUserChoice, SetPopupUserChoice] = useState<string[]>([]);
  const savedFiltersLSKey = "savedFilters";

  useEffect(() => {
    if (popupUserChoice.length > 0) {
      onChange(popupUserChoice.join());
    }
  }, [popupUserChoice]);

  const handleSaveFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const savedFilters = localStorage.getItem(savedFiltersLSKey);

    if (savedFilters) {
      localStorage.setItem(
        savedFiltersLSKey,
        savedFilters + "," + searchBarValue
      );
    } else {
      localStorage.setItem(savedFiltersLSKey, searchBarValue);
    }
  };

  const handleOpenFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenPopup(true);
  };

  const handleSearchBarOnChange = (event: any) => {
    event.preventDefault();
    const newValue = event.target.value;
    setSearchBarValue(newValue);
    onChange && onChange(newValue);
  };

  const handelPopupUserChoiceChange = (userChoice: string[]) => {
    SetPopupUserChoice(userChoice);
  };

  const handlePopupOpenChange = (openPopup: boolean) => {
    setOpenPopup(openPopup);
  };
  const removeDuplication = (value: string, index: number, array: string[]) => {
    return array.indexOf(value) === index;
  };
  const removeEmptyString = (value: string) => {
    return !!value;
  };

  return (
    <div className="flex items-center justify-center">
      <input
        className="pl-2 m-1 w-52 self-center bg-gray-100 border-2 border-blue-300 rounded"
        type="text"
        id="searchBar"
        onChange={handleSearchBarOnChange}
        value={searchBarValue}
        placeholder="Filter images"
      />
      <div className="flex flex-col">
        <button title="save text" onClick={handleSaveFilter}>
          <CiFloppyDisk className="text-xl" />
        </button>
        <button title="load text" onClick={handleOpenFilter}>
          <GoFileDirectory className="text-xl" />
        </button>
      </div>
      {openPopup ? (
        <Popup
          options={
            localStorage.getItem(savedFiltersLSKey)
              ? localStorage
                  .getItem(savedFiltersLSKey)!
                  .split(",")
                  .filter(removeEmptyString)
                  .filter(removeDuplication)
              : []
          }
          setOpen={handlePopupOpenChange}
          isOpen={openPopup}
          setUserChoice={handelPopupUserChoiceChange}
          setParentTagMode={setTagMode}
        />
      ) : null}
    </div>
  );
};

export default SearchBar;
