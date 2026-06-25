const TECH = [
  "PySpark", "Java", "Python", "Scala", "SQL", "ETL", "AWS EMR", "AWS S3", "EC2", "IAM",
  "Azure", "Oracle", "PostgreSQL", "MongoDB", "Tableau", "Pandas", "NumPy", "PyTorch",
  "FB Prophet", "K-Means", "Docker", "Jenkins", "Git", "Backstage", "React",
];

/** A HUD-style marquee of the tech stack — always-on motion that fits the profession. */
export function TechTicker() {
  const row = [...TECH, ...TECH];
  return (
    <div className="relative mx-auto max-w-content overflow-hidden px-5 sm:px-8">
      <div className="glass relative flex items-center gap-3 overflow-hidden py-3">
        <span className="z-10 shrink-0 rounded-md bg-sky/12 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-sky">
          Stack
        </span>
        <div className="flex w-max animate-marquee items-center gap-6 pr-6">
          {row.map((t, i) => (
            <span key={i} className="flex shrink-0 items-center gap-6 font-mono text-sm text-text-lo">
              {t}
              <span className="h-1 w-1 rounded-full bg-goldhi/60" />
            </span>
          ))}
        </div>
        {/* fade edges */}
        <span className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#eaf5ff] to-transparent" />
        <span className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#eaf5ff] to-transparent" />
      </div>
    </div>
  );
}
