"use client"

import OverlayScrollbar from "@/components/orverlay-scrollbar"
import SearchInput from "@/components/search-input"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Modal, { ModalProps, ModalTitle } from "@/components/ui/modal-spring"
import { TypographySmall } from "@/components/ui/typography"
import { useState } from "react"
import ParticipantsCard from "./participants-card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface Props extends ModalProps {}
export default function Participants({ open, onClose }: Props) {
    const [selectAll, setSelectAll] = useState(false)

    return (
        <Modal open={open} onClose={onClose} maxWidth="xl" thight>
            <ModalTitle className="p-5 pb-3">Adding Of Participants</ModalTitle>
            <div className="px-5 mb-4 text-sm">
                <div className="">Participants for the following Vaccines:</div>
                <div className="flex gap-2">
                    <TypographySmall><span className="text-muted-foreground">1.)</span> <i>PENTA 1, 2 & 3</i></TypographySmall>
                    <TypographySmall><span className="text-muted-foreground">2.)</span> <i>HEPA B</i></TypographySmall>
                    <TypographySmall><span className="text-muted-foreground">3.)</span> <i>BCG</i></TypographySmall>
                </div>
            </div>
            <div className="px-5">
                <SearchInput placeholder="Search participants" />
            </div>
            <div className="pb-5">
                <div className="flex items-center mt-5 px-5">
                    <div className="flex gap-1 p-2 px-3.5 border border-border rounded-sm hover:bg-secondary cursor-pointer">
                        <TypographySmall className="text-muted-foreground">Selected:</TypographySmall>
                        <TypographySmall className="">5</TypographySmall>
                        <Eye className="size-4 ml-1" />
                    </div>
                    <label className="flex gap-2 items-center ml-auto cursor-pointer select-none">
                        <Checkbox onCheckedChange={(check) => setSelectAll(!!check)} /> <TypographySmall>Select All</TypographySmall>
                    </label>
                </div>
                <OverlayScrollbar className="max-h-[48vh] overflow-y-auto mt-4 px-5">
                    <div className="space-y-2">
                        {records.map((u) => (
                            <ParticipantsCard key={u.id} user={u} isSelectAll={selectAll} />
                        ))}
                    </div>
                </OverlayScrollbar>
            </div>
            <div className="flex items-center justify-between p-5 pt-0 gap-3">
                <Button variant="outline">
                    Cancel
                </Button>
                <Button>
                    Add Participants
                </Button>
            </div>
        </Modal>
    )
}

const records = [
  { id: 1,  parent: "John Doe",        child: "Michael Doe" },
  { id: 2,  parent: "Anna Smith",      child: "Paul Smith" },
  { id: 3,  parent: "Robert Johnson",  child: "Ella Johnson" },
  { id: 4,  parent: "Maria Garcia",    child: "Sofia Garcia" },
  { id: 5,  parent: "James Wilson",    child: "Ethan Wilson" },
  { id: 6,  parent: "Linda Brown",     child: "Chloe Brown" },
  { id: 7,  parent: "David Martinez",  child: "Lucas Martinez" },
  { id: 8,  parent: "Sarah Thompson",  child: "Grace Thompson" },
  { id: 9,  parent: "William Anderson",child: "Noah Anderson" },
  { id: 10, parent: "Patricia Lee",    child: "Ava Lee" },
  { id: 11, parent: "Christopher King",child: "Liam King" },
  { id: 12, parent: "Karen Walker",    child: "Mia Walker" }
];
