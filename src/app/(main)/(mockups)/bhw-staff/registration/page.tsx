import { ArkUITab } from "@/components/ark-ui-tab";
import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight, Ellipsis, Filter, SlidersHorizontal } from "lucide-react";
import Tab from "./_components/tab";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Registration</TypographyLarge>

            <div className="mt-5 w-full">

                {/* <div className="flex items-center grow w-full">
                    <div className="flex items-center">
                        <Menubar className="border-none p-0">
                            <MenubarMenu>
                                <MenubarTrigger asChild>
                                    <Button variant="outline" className="h-10">
                                        <SlidersHorizontal className="" />
                                        <span>Filter</span>
                                    </Button>
                                </MenubarTrigger>
                                <MenubarContent align="start" alignOffset={0} sideOffset={1} className="rounded-sm">
                                    <MenubarItem></MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>

                    <div className="max-w-lg grow ml-auto">
                        <SearchInput className="w-full" placeholder="Search child" />
                    </div>
                </div> */}

                <div className="mt-3">
                    <div className="pl-6 flex items-end">
                        <Tab />

                        <div className="flex justify-end gap-3 mb-3 grow">
                            <div className="flex items-center">
                                <Menubar className="border-none !p-0 shadow-none">
                                    <MenubarMenu>
                                        <MenubarTrigger asChild>
                                            <Button variant="outline" className="h-10 !rounded-md">
                                                <SlidersHorizontal className="" />
                                                <span>Filter</span>
                                            </Button>
                                        </MenubarTrigger>
                                        <MenubarContent align="end" alignOffset={0} sideOffset={1} className="round ed-sm">
                                            <MenubarItem></MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            </div>

                            <div className="max-w-sm w-full">
                                <SearchInput className="h-10 w-full rounded-md" placeholder="Search child" />
                            </div>
                        </div>
                    </div>
                    <Card className="gap-0 p-0 shadow-xs rounded-lg">
                        <div className="h-11 border-b border-border">

                        </div>
                        <div className="min-h-120">

                        </div>
                    </Card>

                    <div className="flex items-center px-4">
                        <div className="">
                            <TypographySmall className="text-muted-foreground">10 of 50</TypographySmall>
                        </div>
                        <div className="flex items-center gap-2 mt-4 ml-auto">
                            <Button size="icon" variant={'outline'}>
                                <ChevronLeft />
                            </Button>
                            <Button size="icon" variant={'default'}>1</Button>
                            <Button size="icon" variant={'outline'}>2</Button>
                            <Button size="icon" variant={'outline'}><Ellipsis /></Button>
                            <Button size="icon" variant={'outline'}>
                                <ChevronRight />
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}