import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographySmall } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

export default function VaccineAttendance() {
    return (
        <div className="mt-6">
            <div className="mb-4 ml-auto w-full max-w-sm">
                <SearchInput className="h-10 w-full rounded-md" placeholder="Search child" />
            </div>

            <Card className="gap-0 overflow-hidden rounded-md border-none p-0 shadow-xs">
                <div className="border-primary bg-primary text-primary-foreground grid h-12 grid-cols-[repeat(2,_1fr)_10rem] items-center rounded-t-[inherit] border-b">
                    <div className="px-4">
                        <TypographySmall>Child Name</TypographySmall>
                    </div>
                    <div className="px-4">
                        <TypographySmall>Queue Number</TypographySmall>
                    </div>
                    <div className="px-4 text-center">
                        <TypographySmall>Action</TypographySmall>
                    </div>
                </div>
                <div className="border-border divide-border divide-y rounded-b-[inherit] border border-t-0">
                    <div className="grid h-11 grid-cols-[repeat(2,_1fr)_10rem] items-center">
                        <div className="px-4">
                            <TypographySmall>John Doe</TypographySmall>
                        </div>
                        <div className="px-4">
                            <TypographySmall>001</TypographySmall>
                        </div>
                        <div className="flex items-center justify-center px-4">
                            <Button className="h-8 bg-green-600">
                                <span>Present</span>
                            </Button>
                        </div>
                    </div>
                    <div className="grid h-11 grid-cols-[repeat(2,_1fr)_10rem] items-center">
                        <div className="px-4">
                            <TypographySmall>John Doe</TypographySmall>
                        </div>
                        <div className="px-4">
                            <TypographySmall>002</TypographySmall>
                        </div>
                        <div className="flex items-center justify-center px-4">
                            <Button className="h-8 bg-green-600">
                                <span>Present</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="mx-auto mt-5 size-fit rounded-full shadow-xs dark:shadow-white/25">
                <div className="full size-2 rounded shadow-inner shadow-zinc-300/80 dark:shadow-white/25"></div>
            </div>

            <div className="flex items-center px-4" hidden>
                <div className="">
                    <TypographySmall className="text-muted-foreground">10 of 50</TypographySmall>
                </div>
                <div className="mt-4 ml-auto flex items-center gap-2">
                    <Button size="icon" variant={"outline"}>
                        <ChevronLeft />
                    </Button>
                    <Button size="icon" variant={"default"}>
                        1
                    </Button>
                    <Button size="icon" variant={"outline"}>
                        2
                    </Button>
                    <Button size="icon" variant={"outline"}>
                        <Ellipsis />
                    </Button>
                    <Button size="icon" variant={"outline"}>
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}
