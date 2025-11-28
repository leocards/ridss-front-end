import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ChevronDown, Ellipsis, Info, UserRoundCheck, UserRoundX, UserRoundPlus, Eye, PenLine } from "lucide-react";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>User Management</TypographyLarge>

            <div className="mt-6">
                <div className="flex items-center mb-4">
                    <Button className="ml-auto">
                        <UserRoundPlus />
                        <span>New User</span>
                    </Button>
                </div>

                <Card className="rounded-md shadow-xs p-0 gap-0 border-none">
                    <div className="h-12 bg-primary border border-primary rounded-t-[inherit] text-primary-foreground grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                        <div className=""> <TypographySmall>User</TypographySmall> </div>
                        <div className=""> <TypographySmall>Position</TypographySmall> </div>
                        <div className=""> <TypographySmall>Role</TypographySmall> </div>
                        <div className=""> <TypographySmall>Place of Assignment</TypographySmall> </div>
                        <div className=""> <TypographySmall></TypographySmall> </div>
                    </div>
                    <div className="rounded-b-[inherit] border border-t-0 border-border divide-y divide-border">
                        <div className="h-12 grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>John Doe</TypographySmall> </div>
                            <div className=""> <TypographySmall>Barangay Health Worker</TypographySmall> </div>
                            <div className=""> <TypographySmall>Staff</TypographySmall> </div>

                            <div className=""> <TypographySmall>Brgy. New Visayas</TypographySmall> </div>
                            <div className="flex justify-end">
                                <div className="flex items-center justify-center gap-2">
                                    <Button variant={'outline'} size="icon" className="size-8">
                                        <Eye />
                                    </Button>
                                    <Button variant={'outline'} size="icon" className="size-8">
                                        <PenLine />
                                    </Button>
                                </div>

                            </div>
                        </div>
                        <div className="h-12 grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>Peter Simone</TypographySmall> </div>
                            <div className=""> <TypographySmall>Barangay Health Worker</TypographySmall> </div>
                            <div className=""> <TypographySmall>Staff</TypographySmall> </div>

                            <div className=""> <TypographySmall>Brgy. Gredu</TypographySmall> </div>
                            <div className="flex justify-end">
                                <div className="flex items-center justify-center gap-2">
                                    <Button variant={'outline'} size="icon" className="size-8">
                                        <Eye />
                                    </Button>
                                    <Button variant={'outline'} size="icon" className="size-8">
                                        <PenLine />
                                    </Button>
                                </div>

                            </div>
                        </div>
                        <div className="h-12 grid grid-cols-[repeat(4,_1fr)_5rem] items-center [&>div]:px-4">
                            <div className=""> <TypographySmall>Anna Rose Sy</TypographySmall> </div>
                            <div className=""> <TypographySmall>City Health Worker</TypographySmall> </div>
                            <div className=""> <TypographySmall>Staff</TypographySmall> </div>

                            <div className=""> <TypographySmall>Brgy. New Malitbog</TypographySmall> </div>
                            <div className="flex justify-end">
                                <div className="flex items-center justify-center gap-2">
                                    <Button variant={'outline'} size="icon" className="size-8">
                                        <Eye />
                                    </Button>
                                    <Button variant={'outline'} size="icon" className="size-8">
                                        <PenLine />
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}