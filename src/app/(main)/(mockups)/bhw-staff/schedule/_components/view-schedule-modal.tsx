import Modal, { ModalCloseButton, ModalProps, ModalTitle } from "@/components/ui/modal-spring";
import { TooltipComponent } from "@/components/ui/tooltip";
import { TypographySmall } from "@/components/ui/typography";
import { CalendarDays, Clock, PillBottle } from "lucide-react";

interface Props extends ModalProps {}
export default function ViewScheduleModal({ open, onClose }: Props) {
    return (
        <Modal open={open} onClose={onClose} maxWidth="xl" preventAutoFocus>
            <ModalTitle>Monthly Vaccination Schedule</ModalTitle>
            <ModalCloseButton onClick={() => onClose(false)} />

            <div className="space-y-3">
                <div className="space-y-2">
                    <div className="text-muted-foreground mb-2">Vaccination Date and Time</div>
                    <div className="flex gap-2 items-center ml-3">
                        <CalendarDays className="size-5 text-muted-foreground" />
                        <TypographySmall className="text-[15px] font-semibold">November 13, 2025</TypographySmall>
                    </div>
                    <div className="flex gap-2 items-center ml-3">
                        <Clock className="size-5 text-muted-foreground" />
                        <TypographySmall className="text-[15px] font-semibold">08:00 AM</TypographySmall>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="text-muted-foreground">Vaccines Available</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <TooltipComponent title="Pentavalent 1,2&3">
                            <div className="flex gap-2 items-center ml-3 cursor-default">
                                <PillBottle className="size-5 text-muted-foreground" />
                                <TypographySmall className="text-[15px] font-semibold line-clamp-1">PENTA 1, 2, & 3</TypographySmall>
                            </div>
                        </TooltipComponent>
                        <TooltipComponent title="Hepatitis B">
                            <div className="flex gap-2 items-center ml-3 cursor-default">
                                <PillBottle className="size-5 text-muted-foreground" />
                                <TypographySmall className="text-[15px] font-semibold line-clamp-1">HEPATITIS B</TypographySmall>
                            </div>
                        </TooltipComponent>
                        <TooltipComponent title="BCG">
                            <div className="flex gap-2 items-center ml-3 cursor-default">
                                <PillBottle className="size-5 text-muted-foreground" />
                                <TypographySmall className="text-[15px] font-semibold line-clamp-1">BCG</TypographySmall>
                            </div>
                        </TooltipComponent>
                    </div>
                </div>
                <div className="">
                    <div className="text-muted-foreground mb-2">Vaccination Details</div>
                    <div className="max-h-70 overflow-y-auto ml-3">
                        <div className="whitespace-pre-line break-words text-[15px]">
                            Venue: Barangay Covered Court, Barangay San Roque, Panabo City <br />
                            Flow of Activities: <br />
                            • 8:00 AM – Orientation and health briefing<br />
                            • 8:30 AM – Vaccination starts<br />
                            • 12:00 NN – Break (minimal operations continue)<br />
                            • 1:00 PM – Vaccination resumes<br />
                            • 4:00 PM – Closing and final documentation<br />
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}