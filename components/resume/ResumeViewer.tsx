import { contact } from "@/data/contact";
export function ResumeViewer() {
  return <div className="resume-viewer"><iframe title="Winnie Lin Resume" src={contact.resumeUrl} /></div>;
}
