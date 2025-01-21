import CTARounded from "@/app/components/CTARounded";

export function MembershipFormButton() {
    return (
        <CTARounded
            href={"https://forms.gle/WYLiMMsVrP8qjYdj6"}
            target="_blank"
            rel="noopener noreferrer"
            heading={"Membership Form"}
            subheading={"Join the movement of Adventist lay professionals in the UK"}
            containerClass="my-8"
        />
    )
}