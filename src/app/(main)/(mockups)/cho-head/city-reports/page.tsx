import { TypographyLarge } from "@/components/ui/typography";
import CityReportTabs from "./_components/tabs";
import CityReports from "./_components/city-reports";
import Verification from "./_components/verification";
import VaccineUsage from "./_components/vaccine-usage";

interface Props {
    searchParams: Promise<{ tab: 'immunization' | 'verification' | 'usage' }>
}
export default async function Page({ searchParams }: Props) {
    const sp = await searchParams
    const tab = sp.tab

    return (
        <div className="">
            <TypographyLarge>City Report</TypographyLarge>

            <div className="mt-6">
                <div className="mb-5">
                    <CityReportTabs tab={tab} />
                </div>

                {tab === 'immunization' && (
                    <CityReports />
                )}
                {tab === 'verification' && (
                    <Verification />
                )}
                {tab === 'usage' && (
                    <VaccineUsage />
                )}
            </div>
        </div>
    )
}