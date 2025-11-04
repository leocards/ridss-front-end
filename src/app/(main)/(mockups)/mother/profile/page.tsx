import ProfileDetails from "./_components/details";
import EditProfile from "./_components/edit-profile";
import HeaderProfile from "./_components/header";

interface Props {
    searchParams: Promise<{ isEdit?: Boolean }>
}
export default async function Page({ searchParams }: Props) {
    const search = await searchParams
    const isEdit = search.isEdit

    return (
        <div className="">
            {!isEdit && (<HeaderProfile />)}

            {!isEdit && (<ProfileDetails />)}

            {isEdit && (<EditProfile />)}
        </div>
    )
}