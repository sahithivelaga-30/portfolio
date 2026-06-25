import { profile } from "../content";

export function Footer() {
  return (
    <footer className="border-t border-glass-edge">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-text-lo sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <p className="font-mono">The Data Palace</p>
      </div>
    </footer>
  );
}
