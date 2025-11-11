import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Calendar, Download, Plus } from "lucide-react";
import { eachMonthOfInterval, format } from "date-fns";
import VaccineDemand from "./_components/vaccine-demand-report";
import InventoryReport from "./_components/inventory-report";
import ReportsTab from "./_components/tab";
import VaccinationReport from "./_components/vaccination-report";
import Distribution from "./_components/distribution-report";

interface Props {
    searchParams: Promise<{ tab: 'vaccine Demand' | 'inventory' | 'vaccination'| 'distribution' }>
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
                    {tab === "vaccine Demand" && (<VaccineDemand />)}
                    {tab === "inventory" && (<InventoryReport />)}
                    {tab === "vaccination" && (<VaccinationReport />)}
                    {tab === "distribution" && (<Distribution />)}
                </div>
            </div>
        </div>
    )
}

