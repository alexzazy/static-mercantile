# Static Mercantile — project context

Dawn (Shopify theme) fork for **Static Mercantile**, a 90s coastal/skate-surf
mercantile brand: apparel, coffee, mugs, and accessories, fulfilled through a
mix of Printful (print-on-demand apparel/headwear) and self-fulfillment
(coffee, mugs, stickers).

## Source of truth

Three reference documents, in this priority order, are the operating source
of truth for this project. They live outside the repo (not committed) at:

`C:\Users\tadam\OneDrive\Desktop\Static Mercantile\`

1. **`static-mercantile-master-build-plan.md`** — the actual execution plan.
   Staged (Stage 0–9) with ready-to-paste build prompts for each piece of
   work: theme corrections, homepage sections, product/collection templates,
   catalog creation, fulfillment setup, store settings, content, domain
   cutover, approval gates, launch. **Always work from this plan's staging**,
   not from memory of earlier ad hoc prompts.
2. **`Static_Mercantile_Shop_Buildout_Theme_Blueprint_v1.pdf`** — store
   architecture and theme spec: navigation, the 10-section homepage spec,
   the Heritage vs. Broadcast visual theme system table, Shopify collection
   structure, product page templates, fulfillment/order routing, launch
   build sequence, launch acceptance checklist.
3. **`Static_Mercantile_Complete_Product_Bible_Shopify_v1.pdf`** — full
   catalog data: all 21 SKUs (11 Heritage, 10 Broadcast 001) with title,
   type, collection, color, price, fulfillment, blank/base product, artwork
   placement, tags, SEO fields, and URL handles. Also global product rules
   (SKU format, vendor, variant order, draft-until-sample-approved), artwork
   production rules, fulfillment configuration, and the product approval
   gate checklist.

An older standalone prompt file, `static-mercantile-build-prompt.md`
(in `~/Downloads`), was the original 4-phase homepage plan. It is now
**superseded** by the master build plan above — don't resume it.

## Critical open correction (Stage 0 of the master build plan)

What's built so far (theme foundation + `broadcast-hero` +
`signal-marquee` sections) used a **single flat brand palette**
(cream/teal/pink/orange/ink/sand) defined directly in
`config/settings_schema.json` / `layout/theme.liquid` / `assets/base.css`.

The bible/blueprint actually define a **dual palette system**:

- **Heritage** (permanent, calm, timeless): pine green, navy, rust, vintage
  cream, warm sand.
- **Broadcast** (seasonal, loud, collectible): hot pink, teal, purple,
  signal yellow, aqua, panel dark (near-black/deep navy).
- **Shared neutrals**: page cream, ink/near-black, warm white.

Master build plan Stage 0.1 calls for rebuilding the settings as this dual
system (namespaced `--heritage-*` / `--broadcast-*` CSS custom properties,
plus a `.mode--heritage` / `.mode--broadcast` remapping mechanism onto
generic `--mode-*` variables) **before** any further sections are built,
since every section built on the flat palette inherits the flattening. This
correction has not been done yet — do it first when build work resumes.

## Known deviation from the blueprint (already decided, carried forward)

Master build plan Stage 3.1: **Headwear is not its own collection.** Hats,
beanies, and stickers all live under **Accessories**. Six SKUs
(SM-H-005/006/007, SM-B001-005/006/007) get `product_type` = Accessories
(not Headwear); their `headwear` tag stays for filtering. The Product Bible
should be treated as updated to match this when doing catalog work.

## Store/brand north star

> Heritage is the permanent signal. Broadcast is the current transmission.
> The store should make both immediately understandable without ever
> feeling like two unrelated brands.

Product approval test (bible §12): does it feel like Static? Would we want
to own it? Does it have a reason to exist beyond a logo? Will it still look
good in five years? Four yeses = proceed.

## Workstreams (master build plan)

Three streams run in parallel: **THEME** (this repo, via Claude Code → GitHub
→ Shopify), **CATALOG** (Shopify admin / MCP Shopify connector), **ADMIN**
(store owner only — identity, payments, Printful samples, domain).

## Current build status

- Foundation (brand settings, base CSS, decorative SVG snippets) and the
  `broadcast-hero` / `signal-marquee` homepage sections are built and pushed
  to `main` — but built under the flat palette described above and due for
  the Stage 0 dual-system rework.
- No products/collections created yet.
- No product or collection templates built yet.
