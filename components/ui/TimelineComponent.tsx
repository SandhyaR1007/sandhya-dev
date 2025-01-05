import React from "react";
import { Timeline } from "@/components/shadcnUI/timeline";

export function TimelineComponent({ data }: any) {
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
