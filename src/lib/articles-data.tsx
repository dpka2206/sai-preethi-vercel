import React from "react";

export interface ArticleData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

const Section = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <section className="mt-14">
    <h2 className="font-serif text-3xl text-foreground md:text-4xl">{heading}</h2>
    <div className="mt-5 space-y-5 text-[1.0625rem] leading-[1.85] text-foreground/85">
      {children}
    </div>
  </section>
);

export const articles: ArticleData[] = [
  {
    id: "why-melanin-is-your-skins-best-friend",
    category: "Pigmentation",
    title: "Why Melanin Is Your Skin's Best Friend",
    subtitle: "And why lightening creams may be doing more harm than good.",
    image: "/images/articles/melanin_article_hero_1778609981560.png",
    date: "August 12, 2023",
    readTime: "4 min read",
    content: (
      <>
        <Section heading="Melanin is not your enemy — it's your secret protector">
          <p>
            Melanin is your skin's built-in shield. It blocks UV radiation, protects your DNA from sun damage, and reduces the long-term risk of skin cancer. For darker skin tones, especially across South India, it is a natural defence against year-round intense sun. Biology designed it that way for a reason.
          </p>
          <p>
            Wanting to address uneven pigmentation or dark spots is completely valid. But how you go about it matters — and this is where millions of people unknowingly put their skin at serious risk.
          </p>
        </Section>

        <Section heading="The science behind that dark patch on your face">
          <p>
            Pigmentation is controlled by specialised cells called melanocytes, which produce melanin and distribute it across the skin. When this process is disrupted — by sun exposure, hormonal changes, inflammation, or injury — melanin production becomes uneven, resulting in dark patches, spots, or discolouration.
          </p>
          <p>
            Treating it effectively requires understanding the underlying cause — not simply suppressing melanin production with a cream bought off a shelf.
          </p>
        </Section>

        <Section heading="That cream you just bought — have you read what's inside?">
          <p>
            Over-the-counter pigmentation and fairness creams are everywhere — pharmacies, supermarkets, and online platforms. Many carry compelling promises. But before you apply anything to your skin, the ingredient list deserves careful attention.
          </p>
          <p>These are the names you need to watch out for:</p>

          {[
            ["\"It works fast!\" — the problem with hydroquinone", "A commonly used skin lightening agent that, without medical supervision, can cause a condition called exogenous ochronosis — a paradoxical, permanent darkening of the skin that is extremely difficult to reverse."],
            ["\"Instant fairness\" — the truth about steroids", "Steroids temporarily lighten skin, but prolonged use creates dependency. When you stop, the pigmentation comes back darker than before — a condition dermatologists call Topical Steroid Dependent Face (TSDF)."],
            ["The fast results you didn't bargain for — mercury", "Mercury suppresses melanin aggressively, producing quick visible results. It is also toxic — accumulating in the body and causing kidney damage, neurological harm, and immune disruption. It is banned in regulated markets globally yet continues to appear in products sold openly."],
            ["The ingredient nobody talks about — lead and arsenic", "Studies testing commonly sold fairness creams in India have found trace amounts of lead and arsenic. No level of lead exposure is considered safe."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
              <p className="font-serif text-lg text-foreground">{t}</p>
              <p className="mt-2 text-base text-foreground/80">{d}</p>
            </div>
          ))}

          <p>If you see any of these on a label — or if there is no label at all — that is your signal to stop.</p>
        </Section>

        <Section heading="What happens when you keep using these creams">
          <p>The damage builds quietly. By the time it shows, it is much harder to undo.</p>
          <ul className="space-y-3 pl-0">
            {[
              "Your dark spots come back darker — once you stop, pigmentation rebounds worse than where you started.",
              "Your skin gets paper thin — fragile, easily bruised, and permanently sensitised.",
              "You can't stop even if you want to — your skin becomes dependent on the cream to feel normal.",
              "Your face starts changing colour permanently — a blue-black discolouration sets in that even dermatologists struggle to treat.",
              "The sun becomes your worst enemy — sensitivity spikes, making every hour outdoors accelerate the damage.",
              "Unexpected changes appear — acne flare-ups, facial hair growth, and a constant burning sensation.",
              "The damage goes deeper than your skin — mercury and heavy metals are silently absorbed into your bloodstream; kidneys, nerves, and immune system pay the price too.",
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section heading="When a doctor prescribes it — that is a different story">
          <p>
            Some of these ingredients, including hydroquinone and certain steroids, do have a legitimate role in dermatological treatment. A qualified dermatologist may prescribe them for specific conditions, at carefully calibrated concentrations, for a defined and limited period, with regular monitoring.
          </p>
          <p>
            The danger is self-use — applying prescription-strength or unregulated formulations without a diagnosis, without the right concentration, and without a time limit. What works safely for six weeks under supervision can cause irreversible damage when used for six months on your own.
          </p>
          <p>
            When in doubt, consult a dermatologist before starting any pigmentation cream — not after the damage is done.
          </p>
        </Section>

        <Section heading="Ditch the creams — there is a smarter way">
          <p>
            The money spent on cream after cream, serum after serum, adds up faster than most people realise — often with little to show for it, and sometimes with damage that costs far more to fix.
          </p>
          <p>
            A single consultation with a dermatologist can do what years of over-the-counter products cannot — identify exactly what is causing your pigmentation, and treat it at the root. The right diagnosis leads to the right treatment. And the right treatment, delivered professionally, is not only safer — it is more effective and more economical in the long run.
          </p>
          <p className="font-serif text-xl italic text-foreground">
            Your skin deserves better than a gamble. Consult a dermatologist, understand your skin, and invest in solutions that actually work.
          </p>
        </Section>

        <Section heading="Frequently asked questions">
          {[
            ["Are all skin lightening creams harmful?", "Not all brightening products are dangerous. Many well-formulated options use safe ingredients such as niacinamide, kojic acid, azelaic acid, and tranexamic acid. The concern is specifically with unregulated products that contain steroids, mercury, or high concentrations of hydroquinone — often without disclosing these on the label."],
            ["How do I know if my cream contains steroids or mercury?", "Check the ingredient list carefully. Mercury may appear as mercurous chloride, calomel, mercuric, or Hg. Steroids may be listed as betamethasone, clobetasol, or fluocinolone. No label, an incomplete label, or no manufacturer details — treat it as unsafe."],
            ["Can I stop my fairness cream suddenly?", "If you have used a steroid-based cream for an extended period, stopping abruptly can trigger a severe rebound reaction. A dermatologist can guide a safe, gradual withdrawal and manage any skin reactions that follow."],
            ["Is it safe to use these creams during pregnancy?", "No. Most active depigmenting agents are contraindicated during pregnancy. Any pigmentation concerns during pregnancy should be discussed exclusively with a qualified dermatologist."],
            ["What is the right way to treat pigmentation?", "Effective treatment begins with identifying the underlying cause — sun damage, hormonal changes, post-inflammatory marks, or a specific skin condition. A dermatologist can recommend targeted, safe, and evidence-based treatments that address the root cause rather than temporarily masking symptoms."],
          ].map(([q, a]) => (
            <details key={q} className="group rounded-xl border border-border bg-card p-5">
              <summary className="cursor-pointer list-none font-serif text-lg text-foreground marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{q}</span>
                  <span className="text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-base text-foreground/80">{a}</p>
            </details>
          ))}
        </Section>

        <p className="mt-14 border-l-4 border-sage pl-5 font-serif text-xl italic text-foreground">
          Pigmentation is a medical concern, not a cosmetic shortcoming. Approaching it with the right information — and the right professional — is always the safer and more effective path.
        </p>
      </>
    )
  },
  {
    id: "why-acne-happens-causes-myths-treatments",
    category: "Acne",
    title: "Why Acne Happens: Causes, Myths & Treatments",
    subtitle: "What's actually happening beneath the surface — and what helps.",
    image: "/images/articles/acne-causes-myths-hero.png",
    date: "August 3, 2026",
    readTime: "6 min read",
    content: (
      <>
        <Section heading="Acne is common. Misunderstanding it is even more common.">
          <p>
            Acne is one of the most common skin conditions in the world, affecting people well beyond their teenage years — yet it remains one of the most misunderstood. Here's what's actually happening beneath the surface, and what helps.
          </p>
        </Section>

        <Section heading="What causes acne, really">
          <p>
            Acne develops through a combination of four main factors working together:
          </p>

          {[
            ["1. Excess oil (sebum) production", "Hormonal signals, especially androgens, increase oil gland activity — particularly during puberty, before periods, or with conditions like PCOS."],
            ["2. Clogged pores", "Dead skin cells that don't shed properly mix with oil and block the follicle opening, forming the basis of a comedone — a blackhead or whitehead."],
            ["3. Bacteria", "Cutibacterium acnes, a bacteria naturally present on skin, multiplies inside clogged, oil-rich follicles, contributing to inflammation."],
            ["4. Inflammation", "The body's immune response to the clogged, bacteria-filled follicle produces the redness, swelling, and pain associated with inflammatory acne — papules, pustules, and cysts."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
              <p className="font-serif text-lg text-foreground">{t}</p>
              <p className="mt-2 text-base text-foreground/80">{d}</p>
            </div>
          ))}

          <p>
            Genetics, hormones, stress, certain medications, and some cosmetic products can all influence how strongly these four factors act.
          </p>
        </Section>

        <Section heading="Common acne myths">
          {[
            ["Myth: Acne is caused by poor hygiene", "Over-washing doesn't clear acne — it strips the skin's barrier and often makes inflammation worse. Acne is not caused by dirty skin."],
            ["Myth: Only teenagers get acne", "Adult acne is extremely common, particularly in women, often linked to hormonal fluctuations, stress, or underlying conditions like PCOS."],
            ["Myth: Chocolate and greasy food cause breakouts", "Diet's role in acne is more nuanced. High-glycemic diets and, for some people, dairy have shown links to acne severity in research — but chocolate itself has not been clearly proven as a direct cause."],
            ["Myth: You should let acne \"run its course\" without treatment", "Untreated inflammatory acne carries a real risk of permanent scarring and post-inflammatory pigmentation. Early, appropriate treatment reduces this risk significantly."],
            ["Myth: Popping a pimple speeds up healing", "Popping pushes bacteria and inflammation deeper into the skin, increasing the risk of scarring and spreading the breakout rather than resolving it."],
            ["Myth: Natural or \"chemical-free\" products are safer for acne-prone skin", "Many natural ingredients (like essential oils) are more likely to irritate acne-prone skin than well-studied active ingredients like salicylic acid or benzoyl peroxide."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
              <p className="font-serif text-lg text-foreground">{t}</p>
              <p className="mt-2 text-base text-foreground/80">{d}</p>
            </div>
          ))}
        </Section>

        <Section heading="Treatment options">
          <p>
            Effective acne care is rarely one product. It is about matching the right tools to the factors driving your breakouts.
          </p>

          {[
            ["Topical treatments", "Benzoyl peroxide, salicylic acid, and topical retinoids remain first-line treatments for mild to moderate acne, targeting clogged pores, bacteria, and inflammation directly."],
            ["Oral medications", "For moderate to severe or hormonal acne, options include oral antibiotics for short-term inflammation control, hormonal treatments (like certain birth control pills or spironolactone) for hormonally driven acne, and isotretinoin for severe, scarring, or treatment-resistant acne."],
            ["In-clinic procedures", "Chemical peels, certain laser and light therapies, and extraction of stubborn comedones can complement a daily skincare routine — especially for acne that isn't fully responding to topical treatment alone."],
            ["Scar management", "Once active acne is under control, treatments like microneedling, certain lasers, and chemical peels can address resulting scarring and pigmentation."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
              <p className="font-serif text-lg text-foreground">{t}</p>
              <p className="mt-2 text-base text-foreground/80">{d}</p>
            </div>
          ))}
        </Section>

        <Section heading="The bigger cultural shift">
          <p>
            One encouraging shift is the move away from "hiding" acne toward understanding and destigmatizing it. Acne is a medical condition influenced by genetics and hormones — not a personal failing or a hygiene issue. Treating it effectively starts with understanding what's actually causing it in your specific case.
          </p>
        </Section>

        <Section heading="When to see a dermatologist">
          <p>
            If over-the-counter treatments haven't improved your skin after eight to twelve weeks, if breakouts are painful, cystic, or leaving marks, or if you suspect a hormonal cause, a dermatologist can identify exactly which of the four underlying factors is driving your acne — and build a treatment plan targeted to it, rather than more trial and error.
          </p>
          <p className="font-serif text-xl italic text-foreground">
            Struggling with persistent or scarring acne? Book a consultation for a personalized treatment plan built around your skin's specific triggers.
          </p>
        </Section>

        <p className="mt-14 border-l-4 border-sage pl-5 font-serif text-xl italic text-foreground">
          Acne is a medical condition — not a personal failing. Understanding the cause is the first step toward clearer, healthier skin.
        </p>
      </>
    )
  },
  {
    id: "everything-you-need-to-know-about-scalp-health",
    category: "Hair & Scalp",
    title: "Everything You Need to Know About Scalp Health",
    subtitle: "Healthy hair starts beneath the strands — at the scalp.",
    image: "/images/articles/scalp-health-hero.png",
    date: "August 3, 2026",
    readTime: "5 min read",
    content: (
      <>
        <Section heading="Hair care starts where the hair grows">
          <p>
            For years, hair care meant caring for the hair shaft — the strands themselves. But healthy hair actually starts beneath it, at the scalp. Scalp-first hair care is one of the biggest shifts in the industry, with the scalp finally being treated with the same rigor people apply to their facial skin.
          </p>
        </Section>

        <Section heading="Why the scalp matters so much">
          <p>
            The scalp is skin — it has the same layers, the same barrier function, and the same oil (sebum) and microbiome balance as facial skin. Every hair follicle grows out of it, which means the health of the scalp directly determines the health, thickness, and growth rate of the hair.
          </p>
          <p>
            An imbalanced scalp — too oily, too dry, inflamed, or clogged — creates a poor environment for follicles, often showing up as excess shedding, slowed growth, itchiness, flaking, or dullness in the hair itself.
          </p>
        </Section>

        <Section heading="Common scalp issues">
          {[
            ["Dandruff and seborrheic dermatitis", "Flaking and itching caused by an overgrowth of yeast (Malassezia) on the scalp, often combined with excess oil production."],
            ["Scalp acne (folliculitis)", "Clogged follicles leading to small, tender bumps — often from product buildup, sweat, or friction from helmets and tight hairstyles."],
            ["Excess oil (seborrhea)", "Overactive sebaceous glands leave hair looking greasy quickly after washing, and can contribute to flaking and irritation."],
            ["Dry, flaky scalp", "Often mistaken for dandruff, this is usually barrier-related dryness rather than a yeast overgrowth — and needs hydration rather than anti-fungal treatment."],
            ["Scalp sensitivity and inflammation", "Redness, tightness, or a burning sensation, often triggered by harsh sulfates, styling product buildup, or over-washing."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
              <p className="font-serif text-lg text-foreground">{t}</p>
              <p className="mt-2 text-base text-foreground/80">{d}</p>
            </div>
          ))}
        </Section>

        <Section heading="Building a scalp-first routine">
          <ul className="space-y-3 pl-0">
            {[
              "Treat the scalp, not just the hair. Choose shampoo based on your scalp's needs — oily, dry, flaky, or sensitive — rather than your hair type alone.",
              "Exfoliate gently, and not too often. Scalp scrubs or exfoliating shampoos once every one to two weeks can clear buildup from oil, dead skin, and styling products. Over-exfoliating the scalp causes the same irritation it does on facial skin.",
              "Don't skip scalp serums. Just as facial serums target specific concerns, scalp serums with ingredients like niacinamide, salicylic acid, or peptides can target oil control, flaking, or follicle stimulation.",
              "Massage regularly. Scalp massage — with fingers or a scalp massager — improves circulation to the follicles and can be done daily during washing or with oil treatments.",
              "Watch your wash frequency. Both over-washing and under-washing can disrupt the scalp's natural balance. Most people do best somewhere between every other day and twice a week, depending on oil production.",
              "Protect from the sun. The scalp, especially along the part line, is frequently sunburned — and this can affect both skin health and hair growth.",
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section heading="When to see a specialist">
          <p>
            Persistent itching, unusual bald patches, painful bumps, or shedding that feels excessive can point to conditions that need professional diagnosis — from fungal infections to early-stage alopecia. A proper scalp analysis can identify exactly what's happening beneath the surface before it affects the hair long-term.
          </p>
          <p className="font-serif text-xl italic text-foreground">
            Interested in a professional scalp assessment? Our clinic offers detailed scalp analysis to identify the right treatment path for your hair goals.
          </p>
        </Section>

        <p className="mt-14 border-l-4 border-sage pl-5 font-serif text-xl italic text-foreground">
          Healthy hair is grown, not just styled. Caring for the scalp is caring for every strand that follows.
        </p>
      </>
    )
  },
  {
    id: "the-truth-behind-viral-skincare-trends",
    category: "Skincare",
    title: "The Truth Behind Viral Skincare Trends",
    subtitle: "A dermatologist's look at the hacks going viral — and what the science actually says.",
    image: "/images/articles/viral-skincare-trends-hero.png",
    date: "August 3, 2026",
    readTime: "6 min read",
    content: (
      <>
        <Section heading="Not every viral hack is harmless">
          <p>
            Every few weeks, a new skincare "hack" takes over social media promising overnight glass skin, instant pore shrinkage, or a cure for acne using items from your kitchen. Some of it is harmless. Some of it can genuinely damage your skin. Here's a dermatologist's-eye look at some of the most viral trends — and what the science actually says.
          </p>
        </Section>

        <Section heading="Trend by trend — the claim vs the truth">
          {[
            ["Trend: Slugging", "The claim: Coating your face in petroleum jelly overnight locks in hydration for \"glass skin.\" The truth: Petroleum jelly is an occlusive — it doesn't add hydration itself, but it does seal in whatever you've already applied and reduce water loss. It can genuinely help very dry or barrier-compromised skin. It is not suitable for oily or acne-prone skin, where it can trap oil and worsen breakouts."],
            ["Trend: Lemon juice or baking soda for acne", "The claim: Natural acids and alkaline pastes clear breakouts fast. The truth: This is one of the more dangerous viral trends. Lemon juice is highly acidic and photosensitizing, and can cause chemical burns and dark marks — especially with sun exposure. Baking soda disrupts the skin's natural pH, which is mildly acidic to protect the barrier and control acne-causing bacteria. Neither belongs on the face."],
            ["Trend: Rice water for \"poreless\" skin", "The claim: Fermented rice water shrinks pores and brightens skin. The truth: Pores don't actually shrink or grow — their appearance changes with oil levels, buildup, and skin elasticity. Rice water may have mild antioxidant content, but there's no solid evidence it meaningfully changes pore size. It's not harmful, but it's not the transformation the trend promises either."],
            ["Trend: DIY chemical peels at home", "The claim: Household acids can replicate a professional peel. The truth: Professional peels are formulated and applied under controlled concentrations and timing precisely because uneven application, wrong pH, or leaving a peel on too long can cause burns, scarring, and pigmentation issues. This is one trend where DIY carries real risk."],
            ["Trend: Ice facials / ice rolling", "The claim: Rubbing ice on the face reduces puffiness and \"tightens\" skin instantly. The truth: Cold does constrict blood vessels temporarily, which can reduce puffiness short-term. It does not tighten skin, shrink pores permanently, or replace legitimate skin tightening treatments. Direct ice contact can also cause frostbite-like damage with prolonged use."],
            ["Trend: 10+ step routines", "The claim: More products, more actives, more results. The truth: This is arguably the most damaging trend of the last several years. Layering multiple actives — retinoids, acids, vitamin C, scrubs — overwhelms the skin's barrier faster than it can repair, leading to redness, sensitivity, and paradoxically worse skin. The current shift in the industry is toward fewer, well-chosen products used consistently."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
              <p className="font-serif text-lg text-foreground">{t}</p>
              <p className="mt-2 text-base text-foreground/80">{d}</p>
            </div>
          ))}
        </Section>

        <Section heading="The common thread">
          <p>
            Nearly every viral trend either oversimplifies how skin actually works or borrows a real mechanism and applies it in an unsafe or exaggerated way. The ingredients that consistently perform — sunscreen, retinoids, niacinamide, ceramides, gentle exfoliating acids at the correct concentration — are rarely the ones that go viral, because "use sunscreen every day for years" doesn't make for a dramatic video.
          </p>
        </Section>

        <Section heading="Our advice">
          <p>
            Before trying the next viral hack, ask three questions:
          </p>
          <ul className="space-y-3 pl-0">
            {[
              "Is there real clinical research behind this?",
              "Is it being used at a safe concentration and frequency?",
              "Is a dermatologist recommending it, or is it just popular?",
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p>
            If the answer to any of these is unclear, it's worth checking with a professional before your skin becomes the test case.
          </p>
          <p className="font-serif text-xl italic text-foreground">
            Not sure if a trend you've seen online is right for your skin? Book a consultation and we'll walk you through what's actually worth trying.
          </p>
        </Section>

        <p className="mt-14 border-l-4 border-sage pl-5 font-serif text-xl italic text-foreground">
          Good skincare is rarely viral. It is consistent, evidence-based, and tailored to your skin — not the algorithm.
        </p>
      </>
    )
  },
  {
    id: "prp-vs-gfc-hair-treatment",
    category: "Hair Restoration",
    title: "PRP vs GFC Hair Treatment: Which Is Better?",
    subtitle: "Both use your own blood to stimulate follicles — but they aren't the same treatment.",
    image: "/images/articles/prp-gfc-hair-hero.png",
    date: "August 3, 2026",
    readTime: "6 min read",
    content: (
      <>
        <Section heading="Two regenerative options, one common goal">
          <p>
            Regenerative treatments are one of the fastest-growing categories in hair restoration, and two names come up constantly: PRP and GFC. Both are injectable, both use your own blood, and both aim to stimulate hair follicles — but they aren't the same treatment. Here's how they actually differ.
          </p>
        </Section>

        <Section heading="What is PRP (Platelet-Rich Plasma)?">
          <p>
            PRP is prepared by drawing a small sample of the patient's blood and spinning it in a centrifuge to concentrate the platelets — the cells responsible for clotting and releasing growth factors. This platelet-rich layer is then injected into the scalp.
          </p>
          <p>
            Platelets release a range of growth factors (like PDGF, VEGF, and TGF-beta) that are believed to stimulate dormant follicles, improve blood supply to the scalp, and extend the hair's growth phase.
          </p>
          <div className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
            <p className="font-serif text-lg text-foreground">Pros</p>
            <ul className="mt-3 space-y-2">
              {[
                "Well-established, with more long-term clinical data than newer alternatives",
                "Relatively simple preparation process",
                "Widely available",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-base text-foreground/80">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
            <p className="font-serif text-lg text-foreground">Cons</p>
            <ul className="mt-3 space-y-2">
              {[
                "Contains white blood cells and some plasma components that can trigger mild inflammation in a subset of patients",
                "Growth factor concentration can vary depending on preparation method and individual blood composition",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-base text-foreground/80">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="What is GFC (Growth Factor Concentrate)?">
          <p>
            GFC is a step further in processing. Rather than just concentrating platelets, GFC treatments extract and concentrate the growth factors themselves — often using additional processing steps or calcium chloride activation to release growth factors from the platelets before injection, sometimes filtering out red and white blood cells entirely.
          </p>
          <p>
            The result is a more purified, growth-factor-dense injection with fewer of the inflammatory components found in whole PRP.
          </p>
          <div className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
            <p className="font-serif text-lg text-foreground">Pros</p>
            <ul className="mt-3 space-y-2">
              {[
                "Higher concentration of active growth factors per session",
                "Fewer inflammatory components, often meaning less post-procedure redness or discomfort",
                "Some patients report faster visible improvement in hair density",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-base text-foreground/80">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border-l-4 border-primary/70 bg-card p-5 soft-shadow">
            <p className="font-serif text-lg text-foreground">Cons</p>
            <ul className="mt-3 space-y-2">
              {[
                "Requires more specialized processing and equipment",
                "Fewer long-term studies compared to PRP, since it's a newer technique",
                "Usually a higher cost per session",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-base text-foreground/80">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="PRP vs GFC: side by side">
          <div className="overflow-x-auto rounded-xl border border-border bg-card soft-shadow">
            <table className="w-full min-w-[32rem] text-left text-base">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-4 font-serif text-lg font-normal text-foreground">Factor</th>
                  <th className="px-5 py-4 font-serif text-lg font-normal text-foreground">PRP</th>
                  <th className="px-5 py-4 font-serif text-lg font-normal text-foreground">GFC</th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                {[
                  ["Preparation", "Centrifuged blood, platelets concentrated", "Further processed, growth factors isolated"],
                  ["Inflammatory components", "Present (plasma, some WBCs)", "Largely removed"],
                  ["Growth factor concentration", "Moderate", "Higher"],
                  ["Clinical track record", "Longer-established", "Newer, growing evidence base"],
                  ["Typical downtime", "Minimal", "Minimal"],
                  ["Cost", "Generally lower", "Generally higher"],
                ].map(([factor, prp, gfc], i) => (
                  <tr key={factor} className={i < 5 ? "border-b border-border" : undefined}>
                    <td className="px-5 py-4 font-medium text-foreground">{factor}</td>
                    <td className="px-5 py-4">{prp}</td>
                    <td className="px-5 py-4">{gfc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section heading="Which one should you choose?">
          <p>
            Neither treatment is universally "better" — the right choice depends on the stage of hair loss, scalp sensitivity, and treatment goals.
          </p>
          <ul className="space-y-3 pl-0">
            {[
              "Patients with early to moderate thinning and no history of scalp inflammation often do very well with standard PRP, which is more cost-effective for a multi-session protocol.",
              "Patients who are more sensitive to inflammation, or who want a more concentrated growth-factor dose per session, may benefit more from GFC.",
              "Both typically require multiple sessions (often 3–6, spaced four to six weeks apart) with maintenance sessions afterward, and results build gradually over several months as follicles respond.",
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p>
            Combining either treatment with a proper diagnostic workup — checking for underlying causes like thyroid issues, iron deficiency, or androgenetic alopecia — significantly improves outcomes, since PRP and GFC work best as follicle stimulators, not as a fix for an untreated underlying condition.
          </p>
        </Section>

        <Section heading="The bottom line">
          <p>
            PRP and GFC both harness the body's own regenerative signals to support hair growth, but GFC represents a more refined, growth-factor-concentrated version of the same underlying science. The best treatment for you depends on your specific hair loss pattern, scalp condition, and budget — which is best assessed in person.
          </p>
          <p className="font-serif text-xl italic text-foreground">
            Curious which treatment fits your hair loss pattern? Book a scalp and hair assessment with our team to find out whether PRP, GFC, or a combined protocol is right for you.
          </p>
        </Section>

        <p className="mt-14 border-l-4 border-sage pl-5 font-serif text-xl italic text-foreground">
          The right regenerative treatment starts with the right diagnosis — not with the trendier acronym.
        </p>
      </>
    )
  }
];
