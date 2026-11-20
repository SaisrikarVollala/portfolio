import Link from "next/link";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { ExternalLink } from "lucide-react";

/** Split "org/repo" into two parts for styled display */
function splitRepo(repo: string) {
  const idx = repo.indexOf("/");
  if (idx === -1) return { org: "", name: repo };
  return { org: repo.slice(0, idx + 1), name: repo.slice(idx + 1) };
}

export default function OpenSourceSection() {
  const contributions: { repo: string; pullsUrl: string }[] = (DATA as any).openSourceContributions ?? [];

  return (
    <section id="open-source" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Open Source
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              I contribute to open source
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Actively contributing to the cloud-native ecosystem Kubernetes,
              chaos engineering, and identity platforms.
            </p>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contributions.map((repoData) => {
            const { org, name } = splitRepo(repoData.repo);

            return (
              <div
                key={repoData.repo}
                className="group relative flex flex-col justify-between rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* ── Card header ── */}
                <div className="flex items-center justify-between gap-3 px-5 py-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="shrink-0 rounded-lg bg-muted p-2">
                      <Icons.github className="size-5 text-foreground/80" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground font-medium leading-none mb-1">
                        {org}
                      </p>
                      <p className="text-base font-semibold text-foreground truncate leading-none">
                        {name}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2">
                  <Link
                    href={repoData.pullsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-muted/50 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors border border-border/50"
                  >
                    View Pull Requests
                    <ExternalLink className="size-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
