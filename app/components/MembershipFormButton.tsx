import CTARounded from "@/app/components/CTARounded";

export function MembershipFormButton() {
    return (
        <CTARounded
            href={"/membership-form"}
            heading={"Membership Form"}
            subheading={"Join the movement of Adventist lay professionals in the UK"}
            containerClass="my-8"
        />
    )
}