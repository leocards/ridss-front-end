import { TypographyLarge } from "@/components/ui/typography";
import { ChevronRight } from "lucide-react";
import ManageVaccineTab from "./_components/manage-vaccine-tab";
import Inventory from "./_components/inventory";
import WithdrawalConfirmation from "./_components/withdrawal-confirmation";
import Transaction from "./_components/transaction";

interface Props {
    searchParams: Promise<{ tab: 'inventory' | 'withdrawal' | 'transaction' }>
}
export default async function Page({ searchParams }: Props) {
    const sp = await searchParams
    const tab = sp.tab

    return (
        <div className="">
            <div className="flex items-center gap-1">
                <TypographyLarge>Vaccine</TypographyLarge>
                <ChevronRight className="size-4" />
                <TypographyLarge className="capitalize">{tab} {tab === "withdrawal" && "Confirmation"}</TypographyLarge>
            </div>

            <div className="mt-6">
                <ManageVaccineTab />

                <div className="">
                    {tab === "inventory" && (<Inventory />)}
                    {tab === "withdrawal" && (<WithdrawalConfirmation />)}
                    {tab === "transaction" && (<Transaction />)}
                </div>
            </div>
        </div>
    )
}