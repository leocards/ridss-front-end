import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menubar, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Edit, Ellipsis, Eye, Settings2, Trash2 } from "lucide-react";

export default function Page() {
    return (
        <div className="min-h-[calc(100vh-6rem)]">
            <TypographyLarge>Records</TypographyLarge>

            <div className="mt-6">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Menubar className="p-0 border-0 shadow-none">
                            <MenubarMenu>
                                <MenubarTrigger asChild>
                                    <Button variant="outline">
                                        <Settings2 />
                                        <span>Filter</span>
                                    </Button>
                                </MenubarTrigger>
                                <MenubarContent align="start" alignOffset={0} sideOffset={1}>
                                    <div className="">
                                        <MenubarLabel className="text-muted-foreground text-[13px]">Immunization Status</MenubarLabel>
                                        <MenubarItem> <div className="rounded-full size-2 bg-green-600"></div> Active</MenubarItem>
                                        <MenubarItem> <div className="rounded-full size-2 bg-purple-600"></div> Graduate</MenubarItem>
                                        <MenubarItem> <div className="rounded-full size-2 bg-blue-600"></div> Completed</MenubarItem>
                                    </div>
                                    {/* <MenubarSeparator />
                                    <div className="">
                                        <MenubarLabel className="text-muted-foreground text-[13px]">Age</MenubarLabel>
                                        <MenubarItem></MenubarItem>
                                        <MenubarItem></MenubarItem>
                                        <MenubarItem></MenubarItem>
                                    </div> */}
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                    <div className="max-sm:hidden sm:max-w-sm xl:max-w-lg w-full mb-4 ml-auto">
                        <SearchInput placeholder="Search name" />
                    </div>
                </div>

                <Card className="gap-0 rounded-md p-0 shadow-xs overflow-hidden border-none">
                    <div className="bg-primary border border-primary text-primary-foreground">
                        <div className="h-12 grid grid-cols-[repeat(5,_1fr)] items-center w-full bg-primary text-primary-foreground">
                            <TypographySmall className="px-4">Name</TypographySmall>
                            <TypographySmall className="px-4">Sex</TypographySmall>
                            <TypographySmall className="px-4">Age</TypographySmall>
                            <TypographySmall className="px-4">Status</TypographySmall>
                            <TypographySmall className="px-4 text-center">Action</TypographySmall>
                        </div>
                    </div>
                    <div className="border border-t-0 border-border rounded-b-[inherit] divide-y divide-border">
                        {Array.from({ length: 2 }).map((_, index) => (
                            <div key={index} className="h-11 grid grid-cols-[repeat(5,_1fr)] items-center w-full hover:bg-secondary transition duration-200">
                                <div className="text-[15px] px-4 line-clamp-1">John Doe</div>
                                <div className="text-[15px] px-4 line-clamp-1">Male</div>
                                <div className="text-[15px] px-4 line-clamp-1">1 yr/s</div>
                                <div className="text-[15px] px-4">
                                    <div className="rounded-full py-1 px-2 shad ow-xs text-xs font-medium text-muted-foreground flex items-center gap-2 border border-border w-fit">
                                        <div className="rounded-full size-2 bg-green-600"></div>
                                        <span className="">Active</span>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-3">
                                    <Button size="icon" variant="outline" className="size-7 cursor-pointer"><Eye /></Button>
                                    <Button size="icon" variant="outline" className="size-7 cursor-pointer"><Edit /></Button>
                                    <Button size="icon" variant="outline" className="size-7 cursor-pointer"><Trash2 /></Button>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </Card>
                <div className="flex items-center px-4">
                    <div className="">
                        <TypographySmall className="text-muted-foreground">2 of 50</TypographySmall>
                    </div>
                    <div className="flex items-center gap-2 mt-4 ml-auto">
                        <Button className="" variant={'outline'}>
                            Page 1 of 5
                        </Button>
                        <Button size="icon" variant={'outline'}>
                            <ChevronsLeft />
                        </Button>
                        <Button size="icon" variant={'outline'}>
                            <ChevronLeft />
                        </Button>
                        <Button size="icon" variant={'outline'}>
                            <ChevronRight />
                        </Button>
                        <Button size="icon" variant={'outline'}>
                            <ChevronsRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}