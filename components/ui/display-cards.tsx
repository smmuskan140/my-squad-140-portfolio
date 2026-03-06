"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-white/10 bg-black/40 px-4 py-3 backdrop-blur-sm transition-all duration-700 hover:border-white/20",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="relative inline-block rounded-full bg-blue-900 p-1">{icon}</span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg">{description}</p>
      <p className="text-sm text-gray-300">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    { className: "[grid-area:stack] hover:-translate-y-10 grayscale hover:grayscale-0" },
    { className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 grayscale hover:grayscale-0" },
    { className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10" },
  ];

  const displayCards = cards ?? defaultCards;

  return (
    <div className="grid place-items-center [grid-template-areas:'stack'] opacity-100 transition-opacity duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}