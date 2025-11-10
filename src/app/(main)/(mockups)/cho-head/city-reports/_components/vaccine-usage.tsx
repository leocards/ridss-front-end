import ForecastChart from "./forecast";

export default function VaccineUsage() {
    return (
        <div className="grid grid-cols-2 gap-3">
            <ForecastChart vaccine="BCG" />
            <ForecastChart vaccine="Pentavalent" />
            <ForecastChart vaccine="HEAP B" />
            <ForecastChart vaccine="IPV" />
            <ForecastChart vaccine="OPV" />
        </div>
    )
}