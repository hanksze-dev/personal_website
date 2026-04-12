import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/data";

// TODO: update siteConfig.resumeUrl in src/lib/data.ts with your actual hosted PDF URL.
// Options:
//   • Drop a resume.pdf into /public and it will be served at /resume.pdf (already set as default)
//   • Or use a Google Drive direct-download link
// This page will redirect there automatically.

export default function ResumePage() {
  redirect(siteConfig.resumeUrl);
}
