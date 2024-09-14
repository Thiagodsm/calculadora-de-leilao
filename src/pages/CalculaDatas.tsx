import DateCalculator from "../components/DateCalculator";
import HolidayList from "../components/HolidayList";
import InfoSection from "../components/InfoSection";

export default function CalculaDatas() {
  return (
    <div className="p-0">
        <DateCalculator />
        <HolidayList />
        <InfoSection />
    </div>
  )
}
