<!-- ============================================================
     Alex Schiff — Portfolio
     Three sections: Hero/Bio, Projects & Speaking, Hobby
     Dark-mode-first, responsive CSS grid/flex layout
     ============================================================ -->

<!-- ── Hero / Professional Bio ─────────────────────────────── -->
<section class="hero-section">
  <div class="hero-inner">
    <div class="hero-text">
      <h1>Alex Schiff</h1>
      <p class="title-tag">Senior Backend Engineer</p>
      <p class="bio">
        I am a Backend Software Engineer with 12 years of experience architecting
        high-throughput, low-latency distributed systems. My expertise is deeply
        rooted in the JVM ecosystem (Java and Kotlin), having owned and scaled
        critical backend services for General Motors, Ford, Google, and Ally Financial.
      </p>
      <div class="hero-links">
        <a
          class="btn"
          href="https://github.com/Alex-Schiff"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
          class="btn"
          href="https://linkedin.com/in/alex-schiff"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
    </div>
  </div>
</section>

<!-- ── Projects & Speaking ──────────────────────────────────── -->
<section class="section projects-section">
  <div class="section-inner">
    <h2 class="section-title">Projects &amp; Speaking</h2>
    <div class="cards-grid">

      <!-- Card 1 — Speaking (featured) -->
      <article class="card card--featured">
        <div class="card-badge">Speaking</div>
        <h3 class="card-title">Google Cloud Next 2025 Speaker</h3>
        <p class="card-desc">
          Presented a novel approach to distributed tracing by integrating GCP Firestore
          with the open-source Living Sequence Diagrams project. This architecture allows
          engineering teams to visualize complex microservice interactions in real-time,
          drastically reducing debugging time at scale.
        </p>
      </article>

      <!-- Card 2 — Open Source -->
      <article class="card">
        <div class="card-badge">Open Source</div>
        <h3 class="card-title">k-random</h3>
        <p class="card-desc">
          Created and maintain a Java/Kotlin fork of the deprecated easy-random library
          for generating complex random test data.
        </p>
        <p class="card-note">
          Also submitted a talk proposal for KotlinConf 2026 on the experience of
          migrating this library to Kotlin.
        </p>
        <a
          class="card-link"
          href="https://github.com/k-random"
          target="_blank"
          rel="noreferrer"
        >View on GitHub &rarr;</a>
      </article>

      <!-- Card 3 — Current Build -->
      <article class="card">
        <div class="card-badge">Current Build</div>
        <h3 class="card-title">Jira-Integrated Planning Poker</h3>
        <p class="card-desc">
          Currently developing a Kotlin-based planning poker application as a
          proof-of-concept to drive Kotlin adoption on my team. The architecture
          utilizes Maven and JUnit 6 to ensure robust, scalable testing and building.
        </p>
      </article>

    </div>
  </div>
</section>

<!-- ── Beyond the Code ─────────────────────────────────────── -->
<section class="section hobby-section">
  <div class="section-inner">
    <h2 class="section-title">Beyond the Code</h2>
    <div class="hobby-layout">
      <div class="hobby-text">
        <h3 class="hobby-game-title">Magic: The Gathering</h3>
        <p>
          When I'm not writing code, I am an avid Magic: The Gathering player. I spend
          my free time analyzing card mechanics, attending events like MagicCon, and
          optimizing decks. My absolute favorite formats are Commander and Commander
          Draft, where the multiplayer politics and highly variable board states make
          every game a complex system design puzzle of its own.
        </p>
      </div>
      <div class="hobby-images">
        <img src="/mtg-1.jpg" alt="Magic: The Gathering — image 1" class="mtg-img" />
        <img src="/mtg-2.jpg" alt="Magic: The Gathering — image 2" class="mtg-img" />
      </div>
    </div>
  </div>
</section>

<footer class="site-footer">
  <p>&copy; {new Date().getFullYear()} Alex Schiff</p>
</footer>

<style>
  /* ── Design tokens ─────────────────────────────────────────── */
  :global(:root) {
    --bg:          #0f1117;
    --bg-surface:  #1a1d27;
    --bg-card:     #20232f;
    --border:      #2e3140;
    --text:        #9ca3af;
    --text-h:      #f3f4f6;
    --accent:      #7c3aed;
    --accent-light:#a78bfa;
    --accent-glow: rgba(124, 58, 237, 0.25);
    --radius:      12px;
    --shadow:      0 4px 24px rgba(0,0,0,0.5);
    --sans:        system-ui, 'Segoe UI', Roboto, sans-serif;
    font-family:   var(--sans);
    color:         var(--text);
    background:    var(--bg);
    line-height:   1.6;
    -webkit-font-smoothing: antialiased;
  }

  :global(*, *::before, *::after) { box-sizing: border-box; }
  :global(body) { margin: 0; }
  :global(img)  { display: block; max-width: 100%; }

  /* ── Layout shell ──────────────────────────────────────────── */
  :global(#app) {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ── Hero ──────────────────────────────────────────────────── */
  .hero-section {
    padding: 80px 0 64px;
    border-bottom: 1px solid var(--border);
  }

  .hero-inner {
    display: flex;
    align-items: flex-start;
    gap: 48px;
  }

  .hero-text { flex: 1; }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 700;
    color: var(--text-h);
    margin: 0 0 4px;
    letter-spacing: -1px;
  }

  .title-tag {
    font-size: 1.1rem;
    color: var(--accent-light);
    margin: 0 0 24px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .bio {
    font-size: 1.05rem;
    line-height: 1.75;
    max-width: 680px;
    margin: 0 0 32px;
  }

  .hero-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 8px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-h);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  }

  .btn:hover {
    border-color: var(--accent-light);
    box-shadow: 0 0 0 3px var(--accent-glow);
    background: var(--bg-surface);
  }

  .btn-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  /* ── Shared section chrome ─────────────────────────────────── */
  .section {
    padding: 64px 0;
    border-bottom: 1px solid var(--border);
  }

  .section-inner { width: 100%; }

  .section-title {
    font-size: clamp(1.4rem, 3vw, 1.9rem);
    font-weight: 700;
    color: var(--text-h);
    margin: 0 0 36px;
    letter-spacing: -0.5px;
  }

  /* ── Cards grid ────────────────────────────────────────────── */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .card:hover {
    border-color: var(--accent);
    box-shadow: var(--shadow), 0 0 0 1px var(--accent-glow);
  }

  /* Featured card spans full width on wider screens */
  .card--featured {
    grid-column: 1 / -1;
    border-color: var(--accent);
    background: linear-gradient(135deg, var(--bg-card) 0%, rgba(124,58,237,0.08) 100%);
  }

  .card-badge {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--accent-light);
    background: var(--accent-glow);
    border: 1px solid rgba(167,139,250,0.3);
    border-radius: 4px;
    padding: 3px 8px;
    width: fit-content;
  }

  .card-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-h);
    margin: 0;
  }

  .card-desc {
    margin: 0;
    line-height: 1.7;
  }

  .card-note {
    margin: 0;
    font-size: 0.88rem;
    color: var(--accent-light);
    font-style: italic;
  }

  .card-link {
    margin-top: auto;
    color: var(--accent-light);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s;
    width: fit-content;
  }

  .card-link:hover { color: #fff; }

  /* ── Hobby section ─────────────────────────────────────────── */
  .hobby-section { background: var(--bg-surface); }

  .hobby-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }

  .hobby-game-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-h);
    margin: 0 0 16px;
  }

  .hobby-text p {
    line-height: 1.8;
    margin: 0;
  }

  .hobby-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .mtg-img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    background: var(--bg-card);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .mtg-img:hover {
    transform: scale(1.03);
    box-shadow: var(--shadow);
  }

  /* ── Footer ────────────────────────────────────────────────── */
  .site-footer {
    padding: 32px 0;
    text-align: center;
    font-size: 0.85rem;
    color: var(--text);
  }

  /* ── Responsive ────────────────────────────────────────────── */
  @media (max-width: 768px) {
    .hero-section { padding: 48px 0 40px; }

    .hobby-layout {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .hobby-images {
      grid-template-columns: 1fr 1fr;
    }

    .cards-grid {
      grid-template-columns: 1fr;
    }

    .card--featured {
      grid-column: 1;
    }
  }

  @media (max-width: 480px) {
    .hobby-images {
      grid-template-columns: 1fr;
    }
  }
</style>
