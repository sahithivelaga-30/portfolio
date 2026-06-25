import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const SNIPPETS = [
  "spark.read.parquet('s3://raw/…')",
  "df.repartition(200).cache()",
  "# migrate Python UDF → PySpark",
  "emr.optimize(cluster)  // −40% resources",
  "java -jar perf-benchmark.jar",
  "talend → golden_record → BI",
];

/** A live "terminal" typewriter that cycles data-engineering snippets. */
export function TypingLine() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(SNIPPETS[0]);
      return;
    }
    const full = SNIPPETS[i];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text === full) {
      t = setTimeout(() => setDel(true), 1300);
    } else if (del && text === "") {
      setDel(false);
      setI((p) => (p + 1) % SNIPPETS.length);
    } else {
      t = setTimeout(
        () => setText(full.slice(0, del ? text.length - 1 : text.length + 1)),
        del ? 28 : 55
      );
    }
    return () => clearTimeout(t);
  }, [text, del, i, reduce]);

  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-lg border border-edge bg-white/60 px-3 py-2 font-mono text-xs text-text-hi shadow-glass backdrop-blur-[14px]">
      <span className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-danger/70" />
        <span className="h-2 w-2 rounded-full bg-goldhi/70" />
        <span className="h-2 w-2 rounded-full bg-success/70" />
      </span>
      <span className="truncate">
        <span className="text-sky">$</span> {text}
        <span className="ml-0.5 inline-block w-1.5 animate-caret-blink text-goldhi">▋</span>
      </span>
    </div>
  );
}
