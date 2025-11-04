import { TypographyLarge } from "@/components/ui/typography"
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
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card className="p-2 shadow-xs rounded-md" key={index}>
                        <CardContent className="px-1">
                            <div className="">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, non neque et voluptatum delectus illum esse amet hic eligendi sit voluptates qui excepturi ipsa exercitationem voluptatem, numquam quis. Dolor, placeat.
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
                ))}
            </div>

            <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
            </div>
        </div>
    )
}