import { PropsWithChildren } from "react";
import Header from "./_components/header";
import { TypographyLarge } from "@/components/ui/typography";

interface Props extends PropsWithChildren {}
export default function Layout({ children }: Props) {
    return (
        <div className="">
            <TypographyLarge>Registration</TypographyLarge>

            <div className="mb-8">
                <Header />
            </div>

            {children}
        </div>
    )
}