import { ChevronRight } from "lucide-react";
import VaccineAttendance from "./_components/attendance";
import VaccineRequest from "./_components/requests";
import VaccinationTabs from "./_components/tabs";

import { TypographyLarge } from "@/components/ui/typography";
import VaccinationQueue from "./_components/queue";

interface Props {
    searchParams: Promise<{ tab: 'request'|'attendance'|'queue'|'summary' }>
}
export default async function Page({ searchParams }: Props) {
    const sp = await searchParams
    const tab = sp.tab

    return (
        <div className="">
            <TypographyLarge className="flex items-center gap-1">Vaccination <ChevronRight className="size-4.5" /> <span className="capitalize">{tab}</span></TypographyLarge>

            <div className="mt-6">
                <VaccinationTabs tab={tab} />

                <div className="">
                    {tab === 'request' && (
                        <VaccineRequest />
                    )}
                    {tab === 'attendance' && (
                        <VaccineAttendance />
                    )}
                    {tab === 'queue' && (
                        <VaccinationQueue />
                    )}
                </div>
            </div>
        </div>
    )
}