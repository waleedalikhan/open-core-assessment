import React, { useState } from "react";
import cn from "classnames";
import { IDropdownOption } from "@/interfaces";
import { ChevronIcon, FilterIcon } from "@/components/global/icons";

type Props = {
  options?: IDropdownOption[];
  selectedOption?: IDropdownOption;
  onOptionClick?: (index?: number) => void;
};

const FiltersDropdown: React.FC<Props> = ({
  options,
  selectedOption,
  onOptionClick,
}) => {
  let [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <div className="flex w-full justify-between items-center gap-4">
      <div className="lg:flex hidden gap-4">
        {options &&
          options?.map((option, index) => {
            return (
              <React.Fragment key={`${index}${Math.random()}`}>
                <button
                  type="button"
                  className={cn(
                    "outline-none focus:outline-none px-4 py-2.5 transition-all ease-in-out duration-300 font-medium rounded-lg border border-[#eaecf0]",
                    {
                      "text-primary bg-[#edf2f5]": option.isActive,
                      "text-primary-faded bg-white": !option.isActive,
                    }
                  )}
                  onClick={() => onOptionClick && onOptionClick(index)}
                >
                  {option.name}
                </button>
              </React.Fragment>
            );
          })}
      </div>
      <div className="lg:hidden block relative">
        <button
          type="button"
          className="px-4 py-2.5 bg-[#edf2f5] outline-none focus:outline-none text-primary font-medium rounded-lg flex items-center gap-2"
          onClick={() => setShowDropdown((showDropdown = !showDropdown))}
        >
          {selectedOption?.name}
          <ChevronIcon
            classnames={cn({
              "rotate-0": !showDropdown,
              "-rotate-180": showDropdown,
            })}
          />
        </button>
        <div
          className={cn(
            "absolute top-14 z-10 bg-white border border-border-color rounded-lg",
            {
              "lg:hidden block": showDropdown,
              hidden: !showDropdown,
            }
          )}
        >
          {options &&
            options.map((option, index) => {
              return (
                <React.Fragment key={`${index}${Math.random()}`}>
                  <button
                    type="button"
                    className={cn(
                      "outline-none focus:outline-none px-4 py-2.5 transition-all ease-in-out duration-300 font-medium border border-[#eaecf0] truncate w-full",
                      {
                        "text-primary bg-[#edf2f5]": option.isActive,
                        "text-primary-faded bg-white": !option.isActive,
                      }
                    )}
                    onClick={() => {
                      onOptionClick && onOptionClick(index);
                      setShowDropdown((showDropdown = false));
                    }}
                  >
                    {option.name}
                  </button>
                </React.Fragment>
              );
            })}
        </div>
      </div>
      <div className="border border-[#eaecf0] bg-white px-4 py-3.5 flex items-center gap-2 rounded-lg">
        <div className="text-primary-faded">
          <FilterIcon />
        </div>
        <div>
          <span className="font-medium text-primary-faded">Filters</span>
        </div>
      </div>
    </div>
  );
};

export default FiltersDropdown;
