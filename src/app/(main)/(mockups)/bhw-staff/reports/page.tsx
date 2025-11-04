import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { CalendarDays, ChevronLeft, ChevronRight, Download, Ellipsis } from "lucide-react";
import Report1 from "./_components/report-1";
import { Report2 } from "./_components/report-2";
import Report3 from "./_components/report-3";
import Report4 from "./_components/report4";
import { ChartBarStacked } from "./_components/test-report";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Reports</TypographyLarge>

            <div className="mt-6">
                <div className="flex items-center justify-end gap-3 border-b border-border pb-3 mb-5">
                    <Button variant="outline" className="mr-auto">
                        <CalendarDays />
                        <span>October 2025</span>
                    </Button>

                    <Button variant="outline">
                        <Download />
                        PDF Export
                    </Button>
                    <Button variant="outline">
                        <Download />
                        Excel Export
                    </Button>
                </div>
                
                <div className="space-y-5">
                    <Report1 />

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-4 ">
                        <Report2 label="2.) No. of Fully Immunized Child (FIC)" />
                        <Report2 label="3.) No. of Completely Immunized Children  (CIC) 12 - 23 months" />
                        <Report2
                            label="4.) No. of  Livebirths, born in the current year registered in the EPI-TCL this month"
                            footerLabel="No. of infants (0 -11 mos old)  protected at birth (PAB) from neonatal tetanus"
                        />
                        <Report2 label="5.) No. of infants with Birth Certificate" />
                        <Report2 label="6.) No. of infants referred for newborn screening" />
                        <Report3 label="7.) No. of Infants underwent for newborn screening within 25 hours to 72 hours" />
                        <Report2 label="8.) No. of infants exclusively breastfeed up to 6th months" />
                        <Report2 label="9.) No. of infants 6-8 months of age who started/received complementary feeding" />
                        <Report2 label="10.) No. of infants (2-6 months old) with low-birth weight (LBW) less than 2,500 g" />
                        <Report2 label="11.) No. of infants with low-birth weight (2,500 g) given iron supplementation for four (4) months" />
                        <Report4 label="12.) Anemic children seen" />
                    </div>
                </div>
            </div>
        </div>
    )
}