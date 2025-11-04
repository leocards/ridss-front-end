import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";

export default function ChildRegistrationForm() {

    return (
        <div className="space-y-8 mx-auto">
            <div className="space-y-3">
                <TypographyMuted>Child Details</TypographyMuted>
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
                    <TypographySmall>Address</TypographySmall>
                    <Input className="" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <TypographySmall>Sex</TypographySmall>
                    <Select>
                        <SelectTrigger className="w-full h-9 rounded-sm">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Male">Male</SelectItem>
                                <SelectItem value="Female">Female</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-1.5">
                    <TypographySmall>Date Registered in the TCL</TypographySmall>
                    <Input className="" />
                </div>
            </div>
            <div className="space-y-3">
                <TypographyMuted>Father Details</TypographyMuted>
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
                    <TypographySmall>Occupation</TypographySmall>
                    <Input className="" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <TypographySmall>Contact No.</TypographySmall>
                    <Input className="" />
                </div>
            </div>
            <div className="space-y-3">
                <TypographyMuted>Mother Details</TypographyMuted>
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
                    <TypographySmall>Occupation</TypographySmall>
                    <Input className="" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <TypographySmall>Contact No.</TypographySmall>
                    <Input className="" />
                </div>
            </div>

            <div className="space-y-3 mt-6">
                <Button className="w-full">Register</Button>
                <Button className="w-full" variant="secondary">Cancel</Button>
            </div>
        </div>
    )
}