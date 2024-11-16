import DateCalculator from "../components/DateCalculator";
import HolidayList from "../components/HolidayList";
import InfoSection from "../components/InfoSection";

export default function CalculosDatas() {
  return (
    <div className="grid">
        <DateCalculator />
        <HolidayList />
        <InfoSection />
    </div>
  )
}
