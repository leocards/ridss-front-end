import { TypographyLarge, TypographySmall } from "@/components/ui/typography"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenLine, Plus, Trash2 } from "lucide-react"

interface Props {
    onClickNew: CallableFunction;
}
export default function EventList({ onClickNew }: Props) {
    return (
        <div className="h-full p-3">
            <div className="mb-4">
                <Button onClick={() => onClickNew(true)}>
                    <Plus />
                    <span>New Schedule</span>
                </Button>
            </div>

            <div className="space-y-3">
                <Card className="p-2 shadow-xs rounded-md">
                        <CardContent className="px-1">
                            <div className="">
                                <TypographySmall className="text-base">Bakuna Para sa Bayan: Community Vaccination Drive</TypographySmall>
                                <div className="">
                                    <div className="flex">
                                        <div className="text-sm text-muted-foreground w-20 shrink-0">Date: </div>
                                        <div className="ml-4">March 22, 2025</div>
                                    </div>
                                    <div className="flex mb-4">
                                        <div className="text-sm text-muted-foreground w-20 shrink-0">Time: </div>
                                        <div className="ml-4">8:00 AM to 4:00 PM</div>
                                    </div>

                                    <div className="text-sm text-muted-foreground w-40 shrink-0">Venue: </div>
                                    <div className="ml-4">Barangay Covered Court, Barangay San Roque, Panabo City</div>
                                    <div className="text-sm text-muted-foreground w-40 shrink-0">Target Beneficiaries: </div>
                                    <div className="ml-4">Infants, toddlers, pregnant women, and adults needing booster shots</div>
                                </div>
                            </div>

                            <div className="flex justify-end items-center gap-2 mt-3">
                                <Button variant="ghost" className="">
                                    <PenLine />
                                    <span>Edit</span>
                                </Button>
                                <Button variant="ghost" className="text-destructive">
                                    <Trash2 />
                                    <span>Delete</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
            </div>

            <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
            </div>
        </div>
    )
}