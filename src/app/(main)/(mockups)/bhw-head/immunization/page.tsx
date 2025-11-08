import { TypographyLarge } from "@/components/ui/typography";
import ImmunizationTabs from "./_components/immunization-tabs";
import Verification from "./_components/verification";
import Reports from "./_components/reports";

interface Props {
    searchParams: Promise<{ tab: 'verification'|'report' }>
}
export default async function Page({ searchParams }:Props) {
    const sp = await searchParams
    const tab = sp.tab

    return (
        <div className="">
            <TypographyLarge>Immunization</TypographyLarge>

            <div className="mt-6">
                <div className="mb-4">
                    <ImmunizationTabs active={tab} />
                </div>

                {tab === 'verification' && <Verification />}
                {tab === 'report' && <Reports />}
            </div>
        </div>
    )
}

