<script lang="ts">
  const startDate = new Date(2014, 3, 1); // April 1st 2014
  const now = new Date();
  const yearsExperience = Math.floor(
    (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );

  const skills = ['Java', 'Kotlin', 'Distributed Systems', 'GCP', 'Microservices', 'JVM'];
</script>

<div class="min-h-screen bg-[#0f1117] text-[#9ca3af] font-sans">

  <!-- ── Nav ──────────────────────────────────────────────── -->
  <header class="sticky top-0 z-50 border-b border-[#2e3140]/60 bg-[#0f1117]/80 backdrop-blur-md">
    <div class="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
      <span class="text-sm font-semibold text-[#f3f4f6] tracking-tight">Alex Schiff</span>
      <nav class="flex items-center gap-6 text-sm text-[#9ca3af]">
        <a href="#projects" class="hover:text-[#a78bfa] transition-colors">Projects</a>
        <a href="#beyond" class="hover:text-[#a78bfa] transition-colors">Beyond</a>
        <a
          href="https://github.com/Alex-Schiff"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          class="hover:text-[#a78bfa] transition-colors"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
      </nav>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-6">

    <!-- ── Hero ─────────────────────────────────────────────── -->
    <section class="py-24 md:py-32 relative">
      <div class="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-[#7c3aed]/8 blur-3xl pointer-events-none"></div>
      <div class="relative">
        <p class="text-sm font-semibold tracking-widest uppercase text-[#7c3aed] mb-4">
          Backend Engineer
        </p>
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold text-[#f3f4f6] tracking-tight leading-[1.05] mb-6">
          Alex<br />Schiff
        </h1>
        <p class="text-lg leading-relaxed text-[#9ca3af] max-w-xl mb-10">
          {yearsExperience} years building high-throughput, low-latency distributed systems.
          Deeply rooted in the JVM ecosystem —
          <span class="text-[#a78bfa]">Java</span> and <span class="text-[#a78bfa]">Kotlin</span> —
          with production experience at General Motors, Ford, Google, and Ally Financial.
        </p>

        <div class="flex flex-wrap gap-2 mb-10">
          {#each skills as skill}
            <span class="px-3 py-1 text-xs font-medium rounded-full bg-[#1a1d27] border border-[#2e3140] text-[#9ca3af]">
              {skill}
            </span>
          {/each}
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            href="https://github.com/Alex-Schiff"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold
                   text-white bg-[#7c3aed] rounded-lg
                   hover:bg-[#6d28d9] transition-colors
                   focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/50"
          >
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/alex-schiff"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold
                   text-[#a78bfa] bg-transparent border border-[#7c3aed]/40 rounded-lg
                   hover:bg-[#7c3aed]/10 hover:border-[#7c3aed]/70 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/50"
          >
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <div class="border-t border-[#2e3140]"></div>

    <!-- ── Projects & Speaking ───────────────────────────── -->
    <section id="projects" class="py-20">
      <div class="flex items-center gap-3 mb-12">
        <div class="w-1 h-6 rounded-full bg-[#7c3aed]"></div>
        <h2 class="text-2xl font-bold text-[#f3f4f6] tracking-tight">Projects &amp; Speaking</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

        <!-- Card 1 — Speaking (featured, full width) -->
        <article class="md:col-span-2 group relative overflow-hidden
                        bg-[#1a1d27] border border-[#2e3140] rounded-2xl p-7
                        transition-all duration-300
                        hover:border-[#7c3aed]/40 hover:shadow-2xl hover:shadow-[#7c3aed]/10
                        hover:-translate-y-0.5">
          <div class="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
          <div class="relative">
            <div class="flex items-start justify-between gap-4 mb-4">
              <span class="inline-block text-[0.7rem] font-bold tracking-widest uppercase
                           text-[#a78bfa] bg-[#7c3aed]/15 border border-[#7c3aed]/25
                           rounded-full px-3 py-1">
                Speaking
              </span>
              <span class="text-xs text-[#9ca3af]/60 font-medium">2025</span>
            </div>
            <h3 class="text-xl font-bold text-[#f3f4f6] mb-3">Google Cloud Next 2025 Speaker</h3>
            <p class="text-[#9ca3af] leading-relaxed">
              Presented a novel approach to distributed tracing by integrating GCP Firestore
              with the open-source Living Sequence Diagrams project. This architecture allows
              engineering teams to visualize complex microservice interactions in real-time,
              reducing debugging time at scale.
            </p>
          </div>
        </article>

        <!-- Card 2 — Open Source -->
        <article class="group relative overflow-hidden
                        bg-[#1a1d27] border border-[#2e3140] rounded-2xl p-7
                        flex flex-col gap-4
                        transition-all duration-300
                        hover:border-[#7c3aed]/40 hover:shadow-2xl hover:shadow-[#7c3aed]/10
                        hover:-translate-y-0.5">
          <div class="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
          <div class="relative flex flex-col gap-4 flex-1">
            <span class="inline-block text-[0.7rem] font-bold tracking-widest uppercase
                         text-[#a78bfa] bg-[#7c3aed]/15 border border-[#7c3aed]/25
                         rounded-full px-3 py-1 w-fit">
              Open Source
            </span>
            <div>
              <h3 class="text-lg font-bold text-[#f3f4f6] mb-2">k-random</h3>
              <p class="text-[#9ca3af] leading-relaxed text-sm">
                Created and maintain a <span class="text-[#a78bfa]">Java</span>/<span class="text-[#a78bfa]">Kotlin</span>
                fork of the deprecated easy-random library for generating complex random test data.
              </p>
              <p class="text-xs text-[#9ca3af]/60 italic mt-3">
                Talk proposal submitted for KotlinConf 2026 on migrating this library to Kotlin.
              </p>
            </div>
            <a
              href="https://github.com/k-random"
              target="_blank"
              rel="noreferrer"
              class="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold
                     text-[#a78bfa] hover:text-[#c4b5fd] transition-colors w-fit"
            >
              View on GitHub
              <svg class="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
          </div>
        </article>

        <!-- Card 3 — Current Build -->
        <article class="group relative overflow-hidden
                        bg-[#1a1d27] border border-[#2e3140] rounded-2xl p-7
                        flex flex-col gap-4
                        transition-all duration-300
                        hover:border-[#7c3aed]/40 hover:shadow-2xl hover:shadow-[#7c3aed]/10
                        hover:-translate-y-0.5">
          <div class="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
          <div class="relative flex flex-col gap-4 flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="inline-block text-[0.7rem] font-bold tracking-widest uppercase
                           text-[#a78bfa] bg-[#7c3aed]/15 border border-[#7c3aed]/25
                           rounded-full px-3 py-1 w-fit">
                Current Build
              </span>
              <span class="flex items-center gap-1.5 text-xs text-emerald-400">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Active
              </span>
            </div>
            <div>
              <h3 class="text-lg font-bold text-[#f3f4f6] mb-2">Jira-Integrated Planning Poker</h3>
              <p class="text-[#9ca3af] leading-relaxed text-sm">
                A <span class="text-[#a78bfa]">Kotlin</span>-based planning poker application
                as a proof-of-concept to drive Kotlin adoption on my team. Built with Maven and JUnit 6.
              </p>
            </div>
          </div>
        </article>

      </div>
    </section>

    <div class="border-t border-[#2e3140]"></div>

    <!-- ── Beyond the Code ──────────────────────────────── -->
    <section id="beyond" class="py-20">
      <div class="flex items-center gap-3 mb-12">
        <div class="w-1 h-6 rounded-full bg-[#7c3aed]"></div>
        <h2 class="text-2xl font-bold text-[#f3f4f6] tracking-tight">Beyond the Code</h2>
      </div>

      <div class="bg-[#1a1d27] border border-[#2e3140] rounded-2xl p-7 md:p-10">
        <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div class="flex-1 min-w-0">
            <h3 class="text-xl font-bold text-[#f3f4f6] mb-4">Magic: The Gathering</h3>
            <p class="text-[#9ca3af] leading-[1.8]">
              When I'm not writing code, I'm an avid Magic: The Gathering player. I spend
              my free time analyzing card mechanics, attending events like MagicCon, and
              optimizing decks. My favorite formats are Commander and Commander Draft —
              where multiplayer politics and variable board states make every game a
              complex system design puzzle of its own.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-3 w-full md:w-52 md:shrink-0">
            <img
              src="/mtg-1.jpg"
              alt="Josh Lee Kwai and Jimmy Wong"
              class="rounded-xl object-cover shadow-lg border border-[#2e3140]
                     aspect-square w-full transition-transform duration-300 hover:scale-[1.03]"
            />
            <img
              src="/mtg-2.jpg"
              alt="Mark Rosewater"
              class="rounded-xl object-cover shadow-lg border border-[#2e3140]
                     aspect-square w-full transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>

  </main>

  <footer class="border-t border-[#2e3140]/60 py-8">
    <div class="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#9ca3af]/50">
      <p>&copy; {new Date().getFullYear()} Alex Schiff</p>
      <div class="flex items-center gap-4">
        <a href="https://github.com/Alex-Schiff" target="_blank" rel="noreferrer"
           class="hover:text-[#a78bfa] transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/alex-schiff" target="_blank" rel="noreferrer"
           class="hover:text-[#a78bfa] transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>

</div>
