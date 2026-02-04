"use client";
import { cn } from "../lib/utils";
import React, {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  SVGProps,
} from "react";

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.22 2.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 8.5H3.75a.75.75 0 0 1 0-1.5h8.19L8.22 3.78a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export const BentoGrid: FC<BentoGridProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[40rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
  textColor?: string;
}

export const BentoCard: FC<BentoCardProps> = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  textColor = "text-white",
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105",

      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",

      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    
    {/* Label at top */}
    <div className="pointer-events-none z-10 absolute top-10 left-10">
      <h3 className={cn("text-xs font-semibold uppercase tracking-widest opacity-90", textColor)}>
        {name}
      </h3>
    </div>

    {/* Description in middle */}
    <div className="pointer-events-none z-10 flex flex-col justify-start flex-1 px-10 pt-20">
      {Icon && (
        <Icon className={cn("h-10 w-10 mb-4", textColor)} />
      )}
      <p className={cn("text-3xl md:text-4xl font-medium leading-tight", textColor)}>
        {description}
      </p>
    </div>

    {href && (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <a
          href={href}
          className="pointer-events-auto text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 flex items-center"
        >
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);
