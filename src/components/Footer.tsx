import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted/50 tracking-widest">
          © {year} {siteConfig.name}
        </p>
        <p className="font-mono text-xs text-muted/30 tracking-widest">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
