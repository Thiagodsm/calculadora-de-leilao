import DateCalculator from "../components/DateCalculator";
import HolidayList from "../components/HolidayList";
import InfoSection from "../components/InfoSection";

export default function CalculosDatas() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <DateCalculator />
        <HolidayList />
        <InfoSection />
    </div>
  )
}
