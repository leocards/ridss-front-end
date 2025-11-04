import { Fragment } from "react";
import ChildRegistrationForm from "./_components/child-registration";
import MotherRegistration from "./_components/mother-registration";

interface Props {
    searchParams: { registration?: string };
}
export default function Page({ searchParams }: Props) {
    const registration = searchParams.registration || "parent";

    return (
        <Fragment>
            {registration == "parent" ? <MotherRegistration /> : <ChildRegistrationForm />}
        </Fragment>
    );
}
