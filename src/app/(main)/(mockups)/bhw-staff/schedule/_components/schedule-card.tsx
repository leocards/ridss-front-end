"use client";

import { TypographySmall } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Participants from "./participants";
import { Button } from "@/components/ui/button";
import { UsersRound } from "lucide-react";
import ViewScheduleModal from "./view-schedule-modal";
import { TooltipComponent } from "@/components/ui/tooltip";

interface Props {}
export default function ScheduleCard({}: Props) {
    const [open, setOpen] = useState(false)
    const [openSchedule, setOpenSchedule] = useState(false)

    return (
        <div className="">
            <Card className="gap-0 overflow-hidden rounded-md shadow-xs p-0 relative">
                <div className="hover:bg-secondary cursor-pointer p-2 px-3" onClick={() => setOpenSchedule(true)}>
                    <TypographySmall className="text-[15px] font-semibold">November 13, 2025 | 8:00 AM</TypographySmall>
                    <div className="text-sm">
                        <TypographySmall className="text-muted-foreground">Vaccines: </TypographySmall>
                        <span> PENTAVALENT 1,2 & 3,</span>
                        <span> HEPATITS B</span>
                    </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-3">
                    <TooltipComponent title="Participants">
                        <Button onClick={() => setOpen(true)}>
                            <UsersRound />
                            <span>0</span>
                        </Button>
                    </TooltipComponent>
                </div>
            </Card>

            <Participants open={open} onClose={setOpen} />
            <ViewScheduleModal open={openSchedule} onClose={setOpenSchedule} />
        </div>
    );
}
