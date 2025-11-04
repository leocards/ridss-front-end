import Modal, { ModalCloseButton, ModalProps, ModalTitle } from "@/components/ui/modal-spring";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { Syringe } from "lucide-react";
import { CalendarDay } from "./calendar/methods";
import { format } from "date-fns";

interface Props extends ModalProps {
    date: CalendarDay | null
}
export default function ViewDetailsOfImmunizationEvent({ open, date, onClose }: Props) {
    return (
        <Modal open={open} onClose={onClose} maxWidth="lg" preventAutoFocus>
            <ModalTitle className="flex items-center gap-3"> <span className="rounded-full size-10 flex items-center justify-center shrink-0 bg-blue-100/40"><Syringe className="size-5" /></span> Immunization</ModalTitle>
            <ModalCloseButton onClick={() => onClose(null)} />
            <div className="">
                <div className="">Date and Time: <TypographySmall>{format(new Date(`2025/${date?.month||1}/1`), "MMMM")} {date?.day}, {date?.year} 8:00 AM - 4:00 PM</TypographySmall></div>
                <div className="mt-5">
                    <div className="grid grid-cols-3 mb-4">
                        <TypographySmall>Type</TypographySmall>
                        <TypographySmall className="text-center">Vials</TypographySmall>
                        <TypographySmall className="text-center">Children</TypographySmall>
                    </div>
                    <div className="space-y-2">
                        <div className="grid grid-cols-3">
                            <div className="text-[15px]">Lorem ipsum</div>
                            <div className="text-[15px] text-center">2</div>
                            <div className="text-[15px] text-center">38</div>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-[15px]">Lorem ipsum</div>
                            <div className="text-[15px] text-center">2</div>
                            <div className="text-[15px] text-center">20</div>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-[15px]">Lorem ipsum</div>
                            <div className="text-[15px] text-center">2</div>
                            <div className="text-[15px] text-center">15</div>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-[15px]">Lorem ipsum</div>
                            <div className="text-[15px] text-center">2</div>
                            <div className="text-[15px] text-center">14</div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}