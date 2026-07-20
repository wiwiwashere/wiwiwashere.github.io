import { contact } from "@/data/contact";

export function ResumeViewer() {
  const resumePreviewUrl = contact.resumeUrl.replace(/\/view(\?.*)?$/, "/preview");

  return <div className="resume-viewer">
    <iframe
      src={resumePreviewUrl}
      title="Resume preview"
      loading="lazy"
      allow="autoplay"
      width = "100%"
      height = "600px"
    />
    {/* <object data={contact.resumeUrl} type="application/pdf" width="100%" height="600px"> </object> */}
  </div>;
}
