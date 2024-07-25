import React, { useEffect, useState } from "react";
import FiltersDropdown from "@/components/global/FiltersDropdown";
import ResourceCard from "@/components/global/ResourceCard";
import {
  ClipIcon,
  CodeIcon,
  FileIcon,
  SearchIcon,
} from "@/components/global/icons";
import { IDropdownOption, IResourceCard } from "@/interfaces";

const ResourcesSection: React.FC = () => {
  let [searchVal, setSearchVal] = useState<string>("");
  let [filters, setFilters] = useState<IDropdownOption[]>([
    {
      name: "All Resources",
      isActive: true,
    },
    {
      name: "Design",
      isActive: false,
    },
    {
      name: "Development",
      isActive: false,
    },
    {
      name: "Marketing",
      isActive: false,
    },
    {
      name: "Branding",
      isActive: false,
    },
  ]);
  let [selectedFilter, setSelectedFilter] = useState<IDropdownOption>({
    name: "All Resources",
    isActive: true,
  });
  let [resourceCards, setResourceCards] = useState<IResourceCard[]>([
    {
      id: 1,
      img: "/img/card-img-1.png",
      title: "Case Study Template: FlipX, an Investment Attraction Startup",
      tags: [
        {
          name: "Design file",
          icon: <ClipIcon />,
        },
      ],
    },
    {
      id: 2,
      img: "/img/card-img-2.svg",
      title: "Designing Impression: The Power of First Impressions",
      tags: [
        {
          name: "Github Resource",
          icon: <CodeIcon />,
        },
      ],
    },
    {
      id: 3,
      img: "/img/card-img-3.svg",
      title: "Fluid Card Animation in After Effects",
      tags: [
        {
          name: "Design",
        },
        {
          name: "UI/UX",
        },
        {
          name: "Branding",
        },
      ],
    },
    {
      id: 4,
      img: "/img/card-img-2.svg",
      title: "Designing Impression: The Power of First Impressions",
      tags: [
        {
          name: "Design",
        },
        {
          name: "UI/UX",
        },
        {
          name: "Branding",
        },
      ],
    },
    {
      id: 5,
      img: "/img/card-img-4.svg",
      title: "Designing Impression: The Power of First Impressions",
      tags: [
        {
          name: "Design",
        },
      ],
    },
    {
      id: 6,
      img: "/img/card-img-5.svg",
      title: "OpenCore Customer Acquisition Strategy",
      tags: [
        {
          name: "Marketing PDF",
          icon: <FileIcon />,
        },
      ],
    },
  ]);
  let [updatedResourceCards, setUpdatedResourceCards] = useState<
    IResourceCard[]
  >([]);

  const handleSearchChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal((searchVal = e.target.value));
    let newResourceCards = resourceCards.filter((card) =>
      card.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUpdatedResourceCards((updatedResourceCards = newResourceCards));
  };

  const handleOptionChange = (index?: number) => {
    let updatedFilters = [...filters];
    setSelectedFilter((selectedFilter = updatedFilters[index]));
    updatedFilters.forEach((filter) => (filter.isActive = false));
    updatedFilters[index].isActive = true;
    setFilters((filters = updatedFilters));
  };

  useEffect(() => {
    setUpdatedResourceCards((updatedResourceCards = resourceCards));
  }, []);

  return (
    <section className="pb-7 lg:mb-[6.25rem] mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8">
          <div className="w-full border-2 border-[#eaecf0] bg-white px-4 md:py-5 py-2.5 md:rounded-2xl rounded-lg flex items-center gap-2">
            <div className="text-primary">
              <SearchIcon />
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={searchVal}
                onChange={handleSearchChange}
                className="text-primary placeholder:text-primary-faded w-full bg-transparent outline-none focus:outline-none ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0"
                placeholder="Search for resources and tutorials"
              />
            </div>
          </div>
          <FiltersDropdown
            options={filters}
            selectedOption={selectedFilter}
            onOptionClick={(index) => handleOptionChange(index)}
          />
          <div className="w-full mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-20 gap-y-10">
            {updatedResourceCards.map((card, index) => {
              return (
                <React.Fragment key={`${index}${card.id}${Math.random()}`}>
                  <div>
                    <ResourceCard
                      img={card.img}
                      title={card.title}
                      tags={card.tags}
                    />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
