"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function EditProfile() {
    return (
        <div className="space-y-7">
            <div className="">
                <Link href="/mother/profile">
                    <Button variant="link" className="!px-0">
                        <MoveLeft />
                        <span>Go Back</span>
                    </Button>
                </Link>
            </div>

            <div className="">
                <TypographyMuted className="mb-4">Personal Details</TypographyMuted>
                <div className="space-y-3">
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>First Name</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Middle Name</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Last Name</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Date of Birth</TypographySmall>
                        <Input type="date" className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Occupation</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Marital Status</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Contact No.</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Email Address</TypographySmall>
                        <Input className="" />
                    </div>
                </div>
            </div>

            <div className="">
                <TypographyMuted className="mb-4">Address</TypographyMuted>
                <div className="space-y-3">
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Province</TypographySmall>
                        <Select >
                            <SelectTrigger className="w-full h-9 rounded-sm">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Male">Davao del Norte</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>City/Municipality</TypographySmall>
                        <Select >
                            <SelectTrigger className="w-full h-9 rounded-sm">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Male">Panabo</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Barangay</TypographySmall>
                        <Select >
                            <SelectTrigger className="w-full h-9 rounded-sm">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Male">New Visayas</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Street</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>Subdivision/Village</TypographySmall>
                        <Input className="" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <TypographySmall>House/Block/Lot No.</TypographySmall>
                        <Input className="" />
                    </div>
                </div>
            </div>

            <div className="space-y-3 mt-6">
                <Button className="w-full">Save Changes</Button>
                <Button className="w-full" variant="secondary">Cancel</Button>
            </div>
        </div>
    )
}