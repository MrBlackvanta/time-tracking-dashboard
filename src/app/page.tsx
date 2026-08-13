import { Footer } from "@/components/layout";
import { activities } from "@/data";
import { ActivityCard, ProfilePanel } from "@/views/dashboard";

export default function Home() {
  return (
    <>
      <main className="v-dashboard grid place-items-center px-6 py-20">
        <div className="grid w-full max-w-120 gap-6 md:max-w-174 lg:max-w-page lg:grid-cols-4 lg:gap-7.5">
          <ProfilePanel />

          <ul className="grid gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3 lg:gap-7.5">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
