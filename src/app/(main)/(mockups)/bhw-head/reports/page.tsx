import { TypographyLarge } from "@/components/ui/typography";
import ForecastChart from "./_components/forecast";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Reports</TypographyLarge>

            
            <div className="mt-6">
                <ForecastChart />
            </div>
        </div>
    )
}