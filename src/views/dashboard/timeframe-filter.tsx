import { timeframes } from "@/data";

export default function TimeframeFilter() {
  return (
    <fieldset className="grid grid-cols-3 py-5 text-center lg:grid-cols-1 lg:justify-items-start lg:gap-3 lg:px-8 lg:pt-5.5 lg:text-left">
      <legend className="sr-only">Timeframe</legend>

      {timeframes.map((timeframe) => (
        <div key={timeframe.id}>
          <input
            type="radio"
            name="timeframe"
            id={`timeframe-${timeframe.id}`}
            defaultChecked={timeframe.id === "weekly"}
            className="peer sr-only"
          />
          <label
            htmlFor={`timeframe-${timeframe.id}`}
            className="block cursor-pointer py-1 text-title text-desaturated-blue v-focus-ring-peer transition-colors peer-checked:text-white hover:text-white motion-reduce:transition-none"
          >
            {timeframe.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
}
