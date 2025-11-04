import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TypographySmall } from "@/components/ui/typography";

export default function MotherRegistration() {
    return (
        <div className="">
            <div className="space-y-3">
                <div className="flex flex-col gap-1.5">
                    <TypographySmall>Blood Type</TypographySmall>
                    <Select >
                        <SelectTrigger className="w-full h-9 rounded-sm">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="A+">A+</SelectItem>
                                <SelectItem value="A-">A-</SelectItem>
                                <SelectItem value="B+">B+</SelectItem>
                                <SelectItem value="B-">B-</SelectItem>
                                <SelectItem value="AB+">AB+</SelectItem>
                                <SelectItem value="AB-">AB-</SelectItem>
                                <SelectItem value="O+">O+</SelectItem>
                                <SelectItem value="O-">O-</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-1.5">
                    <TypographySmall>Pregnancy related condition</TypographySmall>
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