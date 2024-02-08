import React from "react";
import Script from "next/script";
import ParseReplay from "@/app/lib/slippi";

type Props = {
  slp: File[];
};

const SlpPreview = ({ slp }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 my-2">
        {/* iterates thru File array */}
        {/* TODO: run slippi parser script for each .slp file */}
        {slp.map((slp) => {
          // ParseReplay(slp); -> Module not found: Can't resolve 'ws'
          return (
            <div className="relative aspect-video col-span-4" key={slp.name}>
                <div className="object-cover">
                  {slp.name};
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlpPreview;