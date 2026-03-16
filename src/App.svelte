<script lang="ts">
  const startDate = new Date(2014, 3, 1); // April 1st 2014
  const now = new Date();
  const yearsExperience = Math.floor(
    (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );

  const skills = ['Java', 'Kotlin', 'Distributed Systems', 'GCP', 'Microservices', 'JVM'];

  let lightboxSrc = $state<string | null>(null);
  let lightboxAlt = $state<string>('');

  function openLightbox(src: string, alt: string) {
    lightboxSrc = src;
    lightboxAlt = alt;
  }

  function closeLightbox() {
    lightboxSrc = null;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeLightbox();
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <meta name="description" content="Alex Schiff — Backend Engineer specializing in high-throughput distributed systems on the JVM." />
</svelte:head>

<div class="min-h-screen bg-[#0d0f18] text-[#8b92a5]" style="font-family: 'Inter', system-ui, sans-serif;">

  <!-- Nav -->
  <header class="sticky top-0 z-50 border-b border-[#252836]/70 bg-[#0d0f18]/85 backdrop-blur-md">
    <div class="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
      <a href="#hero-heading"
         class="text-sm font-semibold text-[#eef0f6] tracking-tight hover:text-white transition-colors duration-200">
        Alex Schiff
      </a>
      <nav aria-label="Site navigation" class="flex items-center gap-6 text-sm">
        <a href="#projects"
           class="text-[#8b92a5] hover:text-[#a78bfa] transition-colors duration-200">
          Projects
        </a>
        <a href="#beyond"
           class="text-[#8b92a5] hover:text-[#a78bfa] transition-colors duration-200">
          Beyond
        </a>
        <a
          href="https://github.com/Alex-Schiff"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile (opens in new tab)"
          class="text-[#8b92a5] hover:text-[#a78bfa] transition-colors duration-200"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
      </nav>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-6">

    <!-- Hero -->
    <section aria-labelledby="hero-heading" class="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      <div class="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full
                  bg-[#7c3aed] opacity-[0.06] blur-[96px] pointer-events-none" aria-hidden="true"></div>
      <div class="absolute top-32 right-0 w-64 h-64 rounded-full
                  bg-[#6d28d9] opacity-[0.04] blur-[72px] pointer-events-none" aria-hidden="true"></div>

      <div class="relative">
        <p class="animate-fade-up text-xs font-semibold tracking-[0.2em] uppercase text-[#7c3aed] mb-5">
          Backend Engineer
        </p>
        <h1 id="hero-heading"
            class="animate-fade-up delay-1 text-5xl sm:text-6xl md:text-[4.5rem] font-extrabold
                   text-[#eef0f6] tracking-[-0.03em] leading-[1.04] mb-7">
          Alex<br />Schiff
        </h1>
        <p class="animate-fade-up delay-2 text-[1.05rem] leading-[1.85] text-[#8b92a5] max-w-[520px] mb-10">
          {yearsExperience} years building high-throughput, low-latency distributed systems.
          Deeply rooted in the JVM ecosystem —
          <span class="text-[#a78bfa] font-medium">Java</span> and <span class="text-[#a78bfa] font-medium">Kotlin</span> —
          with production experience at General Motors, Ford, Google, and Ally Financial.
        </p>

        <ul class="animate-fade-up delay-3 flex flex-wrap gap-2 mb-10 list-none p-0 m-0" aria-label="Skills">
          {#each skills as skill}
            <li class="px-3 py-1 text-xs font-medium rounded-full
                       bg-[#1a1d2a] border border-[#252836] text-[#8b92a5]
                       hover:border-[#7c3aed]/50 hover:text-[#a78bfa] transition-colors duration-200 cursor-default">
              {skill}
            </li>
          {/each}
        </ul>

        <div class="animate-fade-up delay-4 flex flex-wrap gap-3">
          <a
            href="https://github.com/Alex-Schiff"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold
                   text-white rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9]
                   shadow-[0_1px_12px_rgba(124,58,237,0.35)]
                   hover:shadow-[0_2px_20px_rgba(124,58,237,0.5)]
                   transition-all duration-200"
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
            aria-label="LinkedIn profile (opens in new tab)"
            class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold
                   text-[#a78bfa] rounded-lg
                   border border-[#7c3aed]/35 bg-[#7c3aed]/5
                   hover:bg-[#7c3aed]/12 hover:border-[#7c3aed]/60 hover:text-[#c4b5fd]
                   transition-all duration-200"
          >
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <hr class="border-t border-[#252836]" aria-hidden="true" />

    <!-- Projects & Speaking -->
    <section id="projects" aria-labelledby="projects-heading" class="py-20">
      <div class="flex items-center gap-3 mb-12">
        <div class="w-[3px] h-6 rounded-full bg-[#7c3aed]" aria-hidden="true"></div>
        <h2 id="projects-heading" class="text-2xl font-bold text-[#eef0f6] tracking-tight">Projects &amp; Speaking</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <!-- Card 1 — Speaking (featured, full width) -->
        <article aria-labelledby="card-speaking-title"
                 class="md:col-span-2 group relative overflow-hidden rounded-[14px] p-7
                        bg-[#1a1d2a] border border-[#252836]
                        shadow-[0_2px_16px_rgba(0,0,0,0.4)]
                        transition-all duration-250
                        hover:border-[#7c3aed]/45 hover:-translate-y-0.5
                        hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_40px_rgba(124,58,237,0.1)]">
          <div class="absolute inset-0 rounded-[14px] bg-gradient-to-br from-[#7c3aed]/6 via-transparent to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>
          <div class="relative">
            <div class="flex items-start justify-between gap-4 mb-5">
              <span class="inline-block text-[0.68rem] font-bold tracking-[0.15em] uppercase
                           text-[#a78bfa] bg-[#7c3aed]/12 border border-[#7c3aed]/22
                           rounded-full px-3 py-1">
                Speaking
              </span>
              <span class="text-xs text-[#8b92a5]/55 font-medium tabular-nums">2025</span>
            </div>
            <h3 id="card-speaking-title" class="text-xl font-bold text-[#eef0f6] mb-3 tracking-tight">
              Google Cloud Next 2025 Speaker
            </h3>
            <p class="text-[#8b92a5] leading-[1.75] text-[0.95rem]">
              Presented a novel approach to distributed tracing by integrating GCP Firestore
              with the open-source Living Sequence Diagrams project. This architecture allows
              engineering teams to visualize complex microservice interactions in real-time,
              reducing debugging time at scale.
            </p>
          </div>
        </article>

        <!-- Card 2 — Open Source -->
        <article aria-labelledby="card-krandom-title"
                 class="group relative overflow-hidden rounded-[14px] p-7
                        bg-[#1a1d2a] border border-[#252836]
                        shadow-[0_2px_16px_rgba(0,0,0,0.4)]
                        flex flex-col gap-4
                        transition-all duration-250
                        hover:border-[#7c3aed]/45 hover:-translate-y-0.5
                        hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_40px_rgba(124,58,237,0.1)]">
          <div class="absolute inset-0 rounded-[14px] bg-gradient-to-br from-[#7c3aed]/6 via-transparent to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>
          <div class="relative flex flex-col gap-4 flex-1">
            <span class="inline-block text-[0.68rem] font-bold tracking-[0.15em] uppercase
                         text-[#a78bfa] bg-[#7c3aed]/12 border border-[#7c3aed]/22
                         rounded-full px-3 py-1 w-fit">
              Open Source
            </span>
            <div>
              <h3 id="card-krandom-title" class="text-lg font-bold text-[#eef0f6] mb-2 tracking-tight">k-random</h3>
              <p class="text-[#8b92a5] leading-[1.75] text-sm">
                Created and maintain a <span class="text-[#a78bfa] font-medium">Java</span>/<span class="text-[#a78bfa] font-medium">Kotlin</span>
                fork of the deprecated easy-random library for generating complex random test data.
              </p>
              <p class="text-xs text-[#8b92a5]/55 italic mt-3">
                Talk proposal submitted for KotlinConf 2026 on migrating this library to Kotlin.
              </p>
            </div>
            <a
              href="https://github.com/k-random"
              target="_blank"
              rel="noreferrer"
              aria-label="View k-random on GitHub (opens in new tab)"
              class="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold
                     text-[#a78bfa] hover:text-[#c4b5fd] transition-colors duration-200 w-fit group/link"
            >
              View on GitHub
              <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
                   viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
          </div>
        </article>

        <!-- Card 3 — Current Build -->
        <article aria-labelledby="card-poker-title"
                 class="group relative overflow-hidden rounded-[14px] p-7
                        bg-[#1a1d2a] border border-[#252836]
                        shadow-[0_2px_16px_rgba(0,0,0,0.4)]
                        flex flex-col gap-4
                        transition-all duration-250
                        hover:border-[#7c3aed]/45 hover:-translate-y-0.5
                        hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_40px_rgba(124,58,237,0.1)]">
          <div class="absolute inset-0 rounded-[14px] bg-gradient-to-br from-[#7c3aed]/6 via-transparent to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>
          <div class="relative flex flex-col gap-4 flex-1">
            <div class="flex items-center gap-2.5 flex-wrap">
              <span class="inline-block text-[0.68rem] font-bold tracking-[0.15em] uppercase
                           text-[#a78bfa] bg-[#7c3aed]/12 border border-[#7c3aed]/22
                           rounded-full px-3 py-1 w-fit">
                Current Build
              </span>
              <span class="flex items-center gap-1.5 text-xs font-medium text-emerald-400" aria-label="Active project">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
                Active
              </span>
            </div>
            <div>
              <h3 id="card-poker-title" class="text-lg font-bold text-[#eef0f6] mb-2 tracking-tight">
                Jira-Integrated Planning Poker
              </h3>
              <p class="text-[#8b92a5] leading-[1.75] text-sm">
                A <span class="text-[#a78bfa] font-medium">Kotlin</span>-based planning poker application
                as a proof-of-concept to drive Kotlin adoption on my team. Built with Maven and JUnit 6.
              </p>
            </div>
          </div>
        </article>

      </div>
    </section>

    <hr class="border-t border-[#252836]" aria-hidden="true" />

    <!-- Beyond the Code -->
    <section id="beyond" aria-labelledby="beyond-heading" class="py-20">
      <div class="flex items-center gap-3 mb-12">
        <div class="w-[3px] h-6 rounded-full bg-[#7c3aed]" aria-hidden="true"></div>
        <h2 id="beyond-heading" class="text-2xl font-bold text-[#eef0f6] tracking-tight">Beyond the Code</h2>
      </div>

      <div class="rounded-[14px] bg-[#1a1d2a] border border-[#252836]
                  shadow-[0_2px_16px_rgba(0,0,0,0.4)] p-7 md:p-10">
        <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div class="flex-1 min-w-0">
            <h3 class="text-xl font-bold text-[#eef0f6] mb-4 tracking-tight">Magic: The Gathering</h3>
            <p class="text-[#8b92a5] leading-[1.85] text-[0.95rem]">
              When I'm not writing code, I'm an avid Magic: The Gathering player. I spend
              my free time analyzing card mechanics, attending events like MagicCon, and
              optimizing decks. My favorite formats are Commander and Commander Draft —
              where multiplayer politics and variable board states make every game a
              complex system design puzzle of its own.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-3 w-full md:w-52 md:shrink-0" role="group" aria-label="MagicCon photos">
            <button
              type="button"
              class="rounded-xl overflow-hidden aspect-square w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
              aria-label="View full size: Josh Lee Kwai and Jimmy Wong at MagicCon"
              onclick={() => openLightbox('/mtg-1.jpg', 'Josh Lee Kwai and Jimmy Wong at MagicCon')}
            >
              <img
                src="/mtg-1.jpg"
                alt="Josh Lee Kwai and Jimmy Wong at MagicCon"
                class="rounded-xl object-cover shadow-lg border border-[#252836]
                       aspect-square w-full transition-transform duration-300 hover:scale-[1.04] cursor-zoom-in"
              />
            </button>
            <button
              type="button"
              class="rounded-xl overflow-hidden aspect-square w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
              aria-label="View full size: Mark Rosewater at MagicCon"
              onclick={() => openLightbox('/mtg-2.jpg', 'Mark Rosewater at MagicCon')}
            >
              <img
                src="/mtg-2.jpg"
                alt="Mark Rosewater at MagicCon"
                class="rounded-xl object-cover shadow-lg border border-[#252836]
                       aspect-square w-full transition-transform duration-300 hover:scale-[1.04] cursor-zoom-in"
              />
            </button>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Lightbox -->
  {#if lightboxSrc}
    <!-- Backdrop: clicking it closes the lightbox -->
    <button
      type="button"
      aria-label="Close image"
      class="fixed inset-0 z-[100] w-full h-full bg-black/80 backdrop-blur-sm cursor-default"
      onclick={closeLightbox}
      onkeydown={handleKeydown}
    ></button>
    <!-- Image sits above the backdrop and is not interactive -->
    <div
      class="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
      aria-hidden="true"
    >
      <img
        src={lightboxSrc}
        alt={lightboxAlt}
        class="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
      />
    </div>
  {/if}

  <footer class="border-t border-[#252836]/70 py-8 mt-4">
    <div class="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3
                text-sm text-[#8b92a5]/45">
      <p>&copy; {new Date().getFullYear()} Alex Schiff</p>
      <nav aria-label="Footer navigation" class="flex items-center gap-5">
        <a href="https://github.com/Alex-Schiff" target="_blank" rel="noreferrer"
           aria-label="GitHub profile (opens in new tab)"
           class="hover:text-[#a78bfa] transition-colors duration-200">
          GitHub
        </a>
        <a href="https://linkedin.com/in/alex-schiff" target="_blank" rel="noreferrer"
           aria-label="LinkedIn profile (opens in new tab)"
           class="hover:text-[#a78bfa] transition-colors duration-200">
          LinkedIn
        </a>
      </nav>
    </div>
  </footer>

</div>
