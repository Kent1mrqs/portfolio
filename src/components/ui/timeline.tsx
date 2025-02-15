import * as React from "react";
import {cn, formateLocalDate} from "@/lib/utils";

interface TimelineItem {
  data: {
    startDate: string;
    title: string;
  };
  children?: React.ReactNode;
}


interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[];
}

function Timeline({ className, items, ...props }: TimelineProps) {
  return (
    <div className={cn("relative flex flex-col items-center bg-background text-foreground", className)} {...props}>
      {items.map((item, index) => (
        <div key={index} className={cn("relative flex w-full max-w-2xl mb-8", index % 2 === 0 ? "justify-start" : "justify-end")}>
          <div className={cn(
            "relative flex items-center w-1/2 p-4 bg-muted rounded-lg shadow-md",
            index % 2 === 0 ? "mr-auto text-left" : "ml-auto text-right"
          )}>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.data.title}</h3>
              <p className="text-base font-normal text-muted-foreground">{item.children}</p>
              <time className="block mt-2 text-sm font-normal leading-none text-muted-foreground">
                {formateLocalDate(item.data.startDate)}
              </time>
            </div>
          </div>
          <div
            className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full flex items-center justify-center ring-0 ring-background">
          <svg
              className="w-3 h-3 text-primary-foreground"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export { Timeline };
