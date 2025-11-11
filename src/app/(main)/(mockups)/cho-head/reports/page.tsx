import { TypographyLarge } from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import VaccineDemand from "./_components/vaccine-demand-report";
import InventoryReport from "./_components/inventory-report";
import ReportsTab from "./_components/tab";
import VaccinationReport from "./_components/vaccination-report";
import Distribution from "./_components/distribution-report";
import Verification from "./_components/verification";

interface Props {
    searchParams: Promise<{ tab: 'vaccine Demand' | 'inventory' | 'vaccination'| 'distribution' | 'immunization' | 'verification' | 'usage' }>
}
export default async function Page({ searchParams }: Props) {
     const sp = await searchParams
    const tab = sp.tab

    return (
       <div className="">
            <div className="flex items-center gap-1">
                <TypographyLarge>Reports</TypographyLarge>
                <ChevronRight className="size-4" />
                <TypographyLarge className="capitalize">{tab} {tab === "inventory" && "vaccination"&& "distribution"}</TypographyLarge>
            </div>
          
            <div className="mt-6">
                <ReportsTab tab={tab} />


                <div className="">
                    {tab === "verification" && (<Verification />)}
                    {tab === "vaccine Demand" && (<VaccineDemand />)}
                    {tab === "inventory" && (<InventoryReport />)}
                    {tab === "vaccination" && (<VaccinationReport />)}
                    {tab === "distribution" && (<Distribution />)}
                </div>
            </div>
        </div>
    )
}

