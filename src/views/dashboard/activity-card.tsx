import { EllipsisIcon } from "@/components/icons";
import { timeframes, type Activity } from "@/data";
import { formatHours } from "@/lib";

const cardColors: Record<Activity["id"], string> = {
  work: "bg-work text-work-icon",
  play: "bg-play text-play-icon",
  study: "bg-study text-study-icon",
  exercise: "bg-exercise text-exercise-icon",
  social: "bg-social text-social-icon",
  "self-care": "bg-self-care text-self-care-icon",
};

export default function ActivityCard({ activity }: { activity: Activity }) {
  const { id, title, icon: Icon, artwork, hours } = activity;

  return (
    <li
      className={`group relative overflow-hidden rounded-card ${cardColors[id]}`}
    >
      <Icon
        className="absolute"
        style={{ top: artwork.top, right: artwork.right }}
      />

      <div className="relative mt-9.5 rounded-card bg-dark-blue px-6 py-7 text-white transition-colors group-hover:bg-dark-blue-hover motion-reduce:transition-none md:mt-11 md:px-7.5 md:pb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-title font-medium">{title}</h2>
          <button
            type="button"
            aria-label={`${title} options`}
            className="flex size-6 items-center justify-center text-pale-blue transition-colors hover:text-white motion-reduce:transition-none"
          >
            <EllipsisIcon />
          </button>
        </div>

        {timeframes.map((timeframe) => (
          <div
            key={timeframe.id}
            data-timeframe={timeframe.id}
            className="mt-1.5 flex items-center justify-between md:mt-6 md:block"
          >
            <p className="text-hours-sm font-light md:text-hours">
              {formatHours(hours[timeframe.id].current)}
            </p>
            <p className="text-label text-pale-blue md:mt-2">
              {timeframe.previousLabel} -{" "}
              {formatHours(hours[timeframe.id].previous)}
            </p>
          </div>
        ))}
      </div>
    </li>
  );
}
