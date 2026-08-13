import { EllipsisIcon } from "@/components/icons";
import { timeframes, type Activity } from "@/data";
import { formatHours, hoursUnit } from "@/lib";

const cardColors: Record<Activity["id"], string> = {
  work: "before:bg-work text-work-icon",
  play: "before:bg-play text-play-icon",
  study: "before:bg-study text-study-icon",
  exercise: "before:bg-exercise text-exercise-icon",
  social: "before:bg-social text-social-icon",
  "self-care": "before:bg-self-care text-self-care-icon",
};

export default function ActivityCard({ activity }: { activity: Activity }) {
  const { id, title, icon: Icon, artwork, hours } = activity;

  return (
    <li
      className={`group relative overflow-hidden rounded-card before:absolute before:inset-x-0 before:top-0 before:h-25 ${cardColors[id]}`}
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

        <div className="mt-1.5 flex items-center justify-between md:mt-6 md:block">
          <p
            aria-hidden="true"
            className="v-hours text-hours-sm font-light md:text-hours"
            style={
              {
                "--hours-daily": hours.daily.current,
                "--hours-weekly": hours.weekly.current,
                "--hours-monthly": hours.monthly.current,
              } as React.CSSProperties
            }
          >
            {timeframes.map((timeframe) => (
              <span key={timeframe.id} data-timeframe={timeframe.id}>
                {hoursUnit(hours[timeframe.id].current)}
              </span>
            ))}
          </p>

          <div className="text-label text-pale-blue md:mt-2">
            {timeframes.map((timeframe) => (
              <p key={timeframe.id} data-timeframe={timeframe.id}>
                <span className="sr-only">
                  {formatHours(hours[timeframe.id].current)}.
                </span>{" "}
                {timeframe.previousLabel} -{" "}
                {formatHours(hours[timeframe.id].previous)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
