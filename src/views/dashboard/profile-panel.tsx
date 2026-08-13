import Image from "next/image";
import avatar from "@/assets/images/avatar-abdelrhman.webp";
import { reportSubject } from "@/data";
import TimeframeFilter from "./timeframe-filter";

export default function ProfilePanel() {
  return (
    <section
      aria-labelledby="report-heading"
      className="rounded-card bg-dark-blue"
    >
      <div className="flex items-center gap-5 rounded-card bg-blue px-8 py-8.5 lg:block lg:pt-9 lg:pb-20">
        <Image
          src={avatar}
          alt=""
          width={78}
          height={78}
          className="size-16 shrink-0 rounded-full ring-3 ring-white lg:size-19.5"
        />

        <h1
          id="report-heading"
          className="text-name-sm font-light lg:mt-11 lg:text-name"
        >
          <span className="mb-0.75 block text-label font-normal text-pale-blue-on-blue">
            Report for
          </span>{" "}
          {reportSubject}
        </h1>
      </div>

      <TimeframeFilter />
    </section>
  );
}
