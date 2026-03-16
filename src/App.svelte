<script lang="ts">
  const startDate = new Date(2014, 3, 1); // April 1st 2014
  const now = new Date();
  const yearsExperience = Math.floor(
    (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );
</script>

<div class="min-h-screen bg-slate-950 text-slate-300 font-sans">
  <main class="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-20">

    <!-- ── Hero / Professional Bio ──────────────────────────── -->
    <section>
      <h1 class="text-5xl md:text-4xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-2">
        Alex Schiff
      </h1>
      <p class="text-lg font-medium text-cyan-400 tracking-wide mb-6">
        Backend Engineer
      </p>
      <p class="text-lg leading-relaxed text-slate-400 max-w-2xl mb-8">
        I am a Backend Software Engineer with {yearsExperience} years of experience architecting
        high-throughput, low-latency distributed systems. My expertise is deeply
        rooted in the JVM ecosystem (<span class="text-cyan-400">Java</span> and <span class="text-cyan-400">Kotlin</span>), having owned and scaled
        critical backend services for General Motors, Ford, Google, and Ally Financial.
      </p>
      <div class="flex flex-wrap gap-3">
        <a
          href="https://github.com/Alex-Schiff"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium
                 text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors
                 focus:ring-4 focus:outline-none focus:ring-cyan-900"
        >
          <svg class="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
              0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
              -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
              .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
              -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004
              1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
              .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
              0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017
              C22 6.484 17.522 2 12 2z"/>
          </svg>
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/alex-schiff"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium
                 text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors
                 focus:ring-4 focus:outline-none focus:ring-cyan-900"
        >
          <svg class="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
              0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
              1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
              7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782
              13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0
              1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24
              22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </section>

    <!-- ── Projects & Speaking ───────────────────────────────── -->
    <section>
      <h2 class="text-3xl font-bold text-slate-100 tracking-tight mb-8">
        Projects &amp; Speaking
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Card 1 — Speaking (featured) -->
        <article class="md:col-span-2 flex flex-col gap-3 bg-slate-900 border border-slate-800
                        rounded-2xl p-6 transition-all duration-300
                        hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-900/20">
          <div class="inline-block text-[0.72rem] font-semibold tracking-widest uppercase
                      text-cyan-400 bg-cyan-950/60 border border-cyan-500/20
                      rounded px-2 py-0.5 w-fit">
            Speaking
          </div>
          <h3 class="text-lg font-semibold text-slate-100 m-0">
            Google Cloud Next 2025 Speaker
          </h3>
          <p class="text-slate-400 leading-relaxed">
            Presented a novel approach to distributed tracing by integrating GCP Firestore
            with the open-source Living Sequence Diagrams project. This architecture allows
            engineering teams to visualize complex microservice interactions in real-time,
            drastically reducing debugging time at scale.
          </p>
        </article>

        <!-- Card 2 — Open Source -->
        <article class="flex flex-col gap-3 bg-slate-900 border border-slate-800
                        rounded-2xl p-6 transition-all duration-300
                        hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-900/20">
          <div class="inline-block text-[0.72rem] font-semibold tracking-widest uppercase
                      text-cyan-400 bg-cyan-950/60 border border-cyan-500/20
                      rounded px-2 py-0.5 w-fit">
            Open Source
          </div>
          <h3 class="text-lg font-semibold text-slate-100 m-0">k-random</h3>
          <p class="text-slate-400 leading-relaxed">
            Created and maintain a <span class="text-cyan-400">Java</span>/<span class="text-cyan-400">Kotlin</span> fork of the deprecated easy-random library
            for generating complex random test data.
          </p>
          <p class="text-sm text-slate-500 italic">
            Also submitted a talk proposal for KotlinConf 2026 on the experience of
            migrating this library to Kotlin.
          </p>
          <a
            href="https://github.com/k-random"
            target="_blank"
            rel="noreferrer"
            class="mt-auto text-sm font-medium text-cyan-400 no-underline w-fit
                   transition-colors duration-200 hover:text-cyan-300"
          >
            View on GitHub &rarr;
          </a>
        </article>

        <!-- Card 3 — Current Build -->
        <article class="flex flex-col gap-3 bg-slate-900 border border-slate-800
                        rounded-2xl p-6 transition-all duration-300
                        hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-900/20">
          <div class="inline-block text-[0.72rem] font-semibold tracking-widest uppercase
                      text-cyan-400 bg-cyan-950/60 border border-cyan-500/20
                      rounded px-2 py-0.5 w-fit">
            Current Build
          </div>
          <h3 class="text-lg font-semibold text-slate-100 m-0">
            Jira-Integrated Planning Poker
          </h3>
          <p class="text-slate-400 leading-relaxed">
            Currently developing a <span class="text-cyan-400">Kotlin</span>-based planning poker application as a
            proof-of-concept to drive Kotlin adoption on my team. The architecture
            utilizes Maven and JUnit 6 to ensure robust, scalable testing and building.
          </p>
        </article>

      </div>
    </section>

    <!-- ── Beyond the Code ──────────────────────────────────── -->
    <section>
      <h2 class="text-3xl font-bold text-slate-100 tracking-tight mb-8">
        Beyond the Code
      </h2>
      <div class="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-slate-100 mb-4">
            Magic: The Gathering
          </h3>
          <p class="text-slate-400 leading-[1.8]">
            When I'm not writing code, I am an avid Magic: The Gathering player. I spend
            my free time analyzing card mechanics, attending events like MagicCon, and
            optimizing decks. My absolute favorite formats are Commander and Commander
            Draft, where the multiplayer politics and highly variable board states make
            every game a complex system design puzzle of its own.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 w-full md:w-auto md:shrink-0 md:max-w-xs">
          <img
            src="/mtg-1.jpg"
            alt="Josh Lee Kwai and Jimmy Wong"
            class="rounded-xl object-cover shadow-lg border border-slate-800 aspect-video md:aspect-square w-full"
          />
          <img
            src="/mtg-2.jpg"
            alt="Mark Rosewater"
            class="rounded-xl object-cover shadow-lg border border-slate-800 aspect-video md:aspect-square w-full"
          />
        </div>
      </div>
    </section>

  </main>

  <footer class="py-8 text-center text-sm text-slate-600 border-t border-slate-800/60">
    <p>&copy; {new Date().getFullYear()} Alex Schiff</p>
  </footer>
</div>
