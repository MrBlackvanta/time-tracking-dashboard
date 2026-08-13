export type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type TimeframeId = "daily" | "weekly" | "monthly";

export type Timeframe = {
  id: TimeframeId;
  label: string;
  previousLabel: string;
};

export type Hours = {
  current: number;
  previous: number;
};

export type Activity = {
  id: "work" | "play" | "study" | "exercise" | "social" | "self-care";
  title: string;
  icon: Icon;
  artwork: { top: number; right: number };
  hours: Record<TimeframeId, Hours>;
};
