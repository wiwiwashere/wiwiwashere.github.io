import { contact } from "@/data/contact";
import { ButtonLink } from "@/components/ui/ButtonLink";
export function ResumeDownloadButton() { return <ButtonLink href={contact.resumeUrl} external>Download</ButtonLink>; }