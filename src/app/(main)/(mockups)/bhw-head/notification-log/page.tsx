import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { format } from "date-fns";
import { Bell, Eye, MoveRight, PenLine, Trash2, TriangleAlert } from "lucide-react";

export default function Page() {
    return (
        <div className="max-w-2xl mx-auto">
            <TypographyLarge>Notification Logs</TypographyLarge>

            <div className="mt-6">
                {/* <Card className="gap-0 rounded-md p-0 shadow-xs overflow-hidden border-none">
                    <div className="bg-primary border border-primary text-primary-foreground">
                        <div className="h-12 grid grid-cols-[repeat(5,_1fr)] items-center w-full bg-primary text-primary-foreground">
                            <TypographySmall className="px-4">Recipient</TypographySmall>
                            <TypographySmall className="px-4">Date</TypographySmall>
                            <TypographySmall className="px-4">Type</TypographySmall>
                            <TypographySmall className="px-4">Status</TypographySmall>
                            <TypographySmall className="px-4 text-center">Action</TypographySmall>
                        </div>
                    </div>
                    <div className="border border-t-0 border-border rounded-b-[inherit] divide-y divide-border">
                        <div className="h-11 grid grid-cols-[repeat(5,_1fr)] items-center w-full hover:bg-secondary transition duration-200">
                            <div className="text-[15px] px-4 line-clamp-1">John Doe</div>
                            <div className="text-[15px] px-4 line-clamp-1">{format(new Date(), "MMMM d, Y")}</div>
                            <div className="text-[15px] px-4 line-clamp-1">Lorem ipsum</div>
                            <div className="text-[15px] px-4 line-clamp-1">Lorem ipsum</div>
                            <div className="flex justify-center gap-3">
                                <Button size="icon" variant="outline" className="size-7 cursor-pointer"><Eye /></Button>
                                <Button size="icon" variant="outline" className="size-7 cursor-pointer"><Trash2 /></Button>
                            </div>
                        </div>
                        <div className="h-11 grid grid-cols-[repeat(5,_1fr)] items-center w-full hover:bg-secondary transition duration-200">
                            <div className="text-[15px] px-4 line-clamp-1">John Doe</div>
                            <div className="text-[15px] px-4 line-clamp-1">{format(new Date(), "MMMM d, Y")}</div>
                            <div className="text-[15px] px-4 line-clamp-1">Lorem ipsum</div>
                            <div className="text-[15px] px-4 line-clamp-1">Lorem ipsum</div>
                            <div className="flex justify-center gap-3">
                                <Button size="icon" variant="outline" className="size-7 cursor-pointer"><Eye /></Button>
                                <Button size="icon" variant="outline" className="size-7 cursor-pointer"><Trash2 /></Button>
                            </div>
                        </div>
                    </div>
                </Card> */}

                <div className="space-y-2">
                    <Card className="rounded-lg shadow-xs gap-0 p-3 cursor-pointer grid grid-cols-[1fr_auto] hover:bg-secondary">
                        <div className="">
                            <div className="mb-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <TriangleAlert className="size-4 text-amber-600" />
                                    <TypographySmall className="text-amber-600">Low stock</TypographySmall>
                                </div>
                                <TypographySmall>(BCG) - Bacillus-Calmette-Guerin</TypographySmall>
                            </div>
                            <TypographySmall className="text-muted-foreground/70">3 min ago</TypographySmall>
                        </div>

                        <div className="">
                            <MoveRight className="size-4" />
                        </div>
                    </Card>
                    <Card className="rounded-lg shadow-xs gap-0 p-3 cursor-pointer grid grid-cols-[1fr_auto] hover:bg-secondary">
                        <div className="">
                            <div className="mb-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <Bell className="size-4" />
                                    <TypographySmall className="">Approve Vaccination Record</TypographySmall>
                                </div>
                                <TypographySmall>Johny Bravo (Head)</TypographySmall>
                                <span className="text-sm text-mu ted-foreground"> has approved the vaccination record you sent.</span>
                            </div>
                            <TypographySmall className="text-muted-foreground/70">1 week ago</TypographySmall>
                        </div>
                        <div className="">
                            <MoveRight className="size-4" />
                        </div>
                    </Card>
                </div>

            </div>
            <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
            </div>
        </div>
    )
}