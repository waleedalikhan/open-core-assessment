import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  img?: string | StaticImport;
  title?: string;
  tags?: { name?: string; icon?: React.ReactNode }[];
};

const ResourceCard: React.FC<Props> = ({ img, title, tags }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="w-full h-[15.438rem] rounded-[18px] bg-[url(/img/card-bg.svg)] bg-center bg-cover bg-no-repeat overflow-hidden place-content-center">
        <img src={img as string} alt="card-img" className="mx-auto" />
      </div>
      <div className="w-full">
        <h3 className="text-primary font-medium md:text-2xl md:leading-9 text-xl leading-[1.875rem]">
          {title}
        </h3>
      </div>
      <div className="w-full flex items-center gap-2">
        {tags?.map((tag, index) => {
          return (
            <React.Fragment key={`${index}${Math.random()}`}>
              <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#f9fafb]">
                {tag.icon && tag.icon}
                <span className="text-sm font-medium text-[#667085]">
                  {tag.name}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ResourceCard;
