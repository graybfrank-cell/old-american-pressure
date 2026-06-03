# Old American Pressure — Go-Live Runbook (manual)

End-to-end, copy-pasteable. Do the phases in order. Each `$` block is a Terminal paste; non-code steps say "Dashboard" or "Registrar".

---

## 0. Prereqs (one-time)

Install if missing:

- **Node 18+** — `node -v` (you have v22 already from your Cowork sandbox; your Mac install is whatever you've got)
- **GitHub CLI** — `brew install gh`
- **Vercel CLI** — `npm i -g vercel`

Then log in to both:

```bash
gh auth login              # choose GitHub.com, HTTPS, web browser
vercel login               # use the email tied to your "Gray Frank's projects" personal scope
```

Verify:

```bash
gh auth status             # should show graybfrank-cell as the active account
vercel whoami              # should show your personal scope
vercel teams ls            # confirms "gray-franks-projects" is listed
```

If `gh auth status` shows the wrong GitHub user, run `gh auth switch` or `gh auth login` again. The repo target is **`graybfrank-cell/old-american-pressure`**, so the active GitHub user must own (or be able to push to) `graybfrank-cell`.

---

## 1. Move the project out of Cowork and into `~/code/`

```bash
mkdir -p ~/code
cp -R "/Users/graysonfrank/Library/Application Support/Claude/local-agent-mode-sessions/b0f913ac-801c-4f37-8e68-3201d770d207/fe9fd927-32e3-499c-a85f-441ba79eb030/local_9a92cb18-ae15-4bbf-8258-2e868404d8ea/outputs/" ~/code/old-american-pressure
cd ~/code/old-american-pressure
```

Sanity-check isolation (must say "OK"):

```bash
git rev-parse --show-toplevel 2>/dev/null && echo "STOP: parent .git found, abort" || echo "OK: no parent git"
pwd                          # should print /Users/graysonfrank/code/old-american-pressure
ls                           # should show app/  components/  lib/  package.json  etc.
```

If "STOP" appears, you've placed it inside another git repo — `cd` somewhere else and start over.

---

## 2. Install + local sanity build

```bash
npm install
npm run build                # should finish with "✓ Compiled successfully"
npm run dev                  # open http://localhost:3000, click around
# Ctrl-C when done
```

If `npm install` complains about peer deps: `rm -rf node_modules package-lock.json && npm install` (the package.json is already pinned to stable React 19, so it should resolve clean).

---

## 3. Push to GitHub

```bash
git init -b main
git add .
git commit -m "v1: Old American Pressure landing page scaffold"

gh repo create graybfrank-cell/old-american-pressure \
  --public \
  --source=. \
  --remote=origin \
  --push \
  --description "Exterior lot cleaning for Austin-metro dealerships"

gh repo view --web           # opens the new repo in your browser
```

Expected output of the `gh repo create` line: `✓ Created repository graybfrank-cell/old-american-pressure on GitHub` followed by `✓ Pushed commits to https://github.com/graybfrank-cell/old-american-pressure.git`.

**Save this URL:** `https://github.com/graybfrank-cell/old-american-pressure`

---

## 4. First Vercel deploy (CLI)

```bash
vercel link --scope gray-franks-projects
```

Answer the prompts exactly:

- `Link to existing project?` → **N**
- `What's your project's name?` → **old-american-pressure**
- `In which directory is your code located?` → **./** (just press enter)
- `Want to modify these settings?` → **N**

This creates `.vercel/project.json` linking this folder to a brand-new Vercel project under your personal scope. It does **not** touch the `nassau` project.

Then deploy:

```bash
vercel --prod
```

Expected tail of output: `✅  Production: https://old-american-pressure-<hash>.vercel.app`

**Save this URL.** Open it — you should see the live site.

---

## 5. Wire GitHub → Vercel (auto-deploy on push)

Dashboard, one-time:

1. Go to https://vercel.com/gray-franks-projects/old-american-pressure
2. **Settings → Git** → "Connect Git Repository"
3. Select **graybfrank-cell/old-american-pressure**, branch **main**
4. Save

From now on, every `git push origin main` auto-deploys to production. Every PR gets a preview URL.

---

## 6. Buy the domain

Pick one registrar (in order of recommendation for `.co`):

- **Cloudflare Registrar** — https://dash.cloudflare.com/?to=/:account/domains/register — at-cost pricing, no upsells. Requires a free Cloudflare account.
- **Porkbun** — https://porkbun.com — cheap, clean UI.
- **Namecheap** — https://www.namecheap.com — fine, watch out for upsells at checkout.

Search for `oldamericanpressure.co`. Register for 1+ years. Decline all add-ons except WHOIS privacy (free, take it).

---

## 7. Add the domain to Vercel

Dashboard:

1. https://vercel.com/gray-franks-projects/old-american-pressure → **Settings → Domains**
2. Add `oldamericanpressure.co` → click **Add**
3. Add `www.oldamericanpressure.co` → click **Add**
4. After both are added, click the **⋯** menu on `oldamericanpressure.co` → **Set as Primary Domain**
5. On the `www` entry, set redirect → **Redirect to oldamericanpressure.co** (301)

Vercel will now show DNS instructions. Note the exact records — copy them, then move to step 8.

---

## 8. Point DNS at Vercel (at your registrar)

In your registrar's DNS panel, add exactly these two records:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` (apex) | `76.76.21.21` | Auto / 3600 |
| CNAME | `www` | `cname.vercel-dns.com.` | Auto / 3600 |

Delete any conflicting records on `@` and `www` (old A/AAAA/CNAME pointing elsewhere).

If your registrar shows existing CAA records, make sure they allow Let's Encrypt — either remove them or add `0 issue "letsencrypt.org"`.

---

## 9. Wait for propagation + cert

DNS usually propagates in 5-30 minutes. Check:

```bash
dig +short oldamericanpressure.co               # should return 76.76.21.21
dig +short www.oldamericanpressure.co           # should return cname.vercel-dns.com (and IPs)
```

Or use https://dnschecker.org/#A/oldamericanpressure.co for a global view.

Once DNS resolves, Vercel automatically issues a Let's Encrypt cert (usually under 10 minutes). Refresh **Settings → Domains** until both entries show **Valid Configuration** with a green checkmark.

Then open https://oldamericanpressure.co — you should see the site, with HTTPS, no warnings.

---

## 10. Smoke test the live site

- **Tap-to-call (mobile):** open https://oldamericanpressure.co on your phone, tap the phone number in the header and footer. Should open the dialer with `214-701-4603`.
- **Form submission:** scroll to the bottom form, fill it with test data, submit. Should swap to the green-check success state: *"Thanks — Jake will call you within one business day."*
- **Confirm lead in logs:** dashboard → **old-american-pressure → Logs** (or `vercel logs --prod` from the CLI). You should see a line like `[lead] { receivedAt: '...', name: 'test', phone: '...', ... }`.
- **Lighthouse:** Chrome DevTools → Lighthouse → Mobile + Performance + Accessibility. Target ≥95 on both.
- **www redirect:** visit `https://www.oldamericanpressure.co` — should 301-redirect to the apex.

---

## 11. Replace the OG image (optional, do before sharing on social)

`metadataBase` in `app/layout.tsx` already points at `https://oldamericanpressure.co`, so OG previews will resolve. You just need to drop a real image:

```bash
# Create or download a 1200x630 PNG, then:
cp ~/Downloads/og.png ~/code/old-american-pressure/public/og.png
cd ~/code/old-american-pressure
git add public/og.png
git commit -m "Add OG image"
git push                       # auto-deploys via the GitHub→Vercel connection
```

Test the preview at https://www.opengraph.xyz/url/https%3A%2F%2Foldamericanpressure.co

---

## Troubleshooting cheat-sheet

| Symptom | Fix |
|---|---|
| `npm install` peer-dep error | `rm -rf node_modules package-lock.json && npm install` |
| `next build` crashes locally | `rm -rf .next && npm run build`; if persists, check Node version (need 18.18+) |
| `gh repo create` "name already exists" | Either delete the empty repo on GitHub or pick a different name |
| `vercel link` lands on wrong scope | `vercel switch` to pick the right team, re-run `vercel link` |
| Domain stuck on "Invalid Configuration" | DNS hasn't propagated; wait, then check `dig` output matches step 8 |
| Cert pending > 1 hour | Check CAA records at registrar — must allow `letsencrypt.org` |
| Form submits but no log appears | Check you're looking at **Production** logs, not preview; check the route handler at `app/api/lead/route.ts` |
| Auto-deploy not triggering on push | Settings → Git → confirm repo is connected and `main` is the production branch |

---

## What "done" looks like

- [ ] `https://github.com/graybfrank-cell/old-american-pressure` exists, public, main has all the code
- [ ] `https://old-american-pressure-<hash>.vercel.app` loads (the Vercel-assigned URL)
- [ ] `https://oldamericanpressure.co` loads over HTTPS with the site
- [ ] `https://www.oldamericanpressure.co` 301-redirects to the apex
- [ ] Tap-to-call works on a real iPhone/Android
- [ ] Form submission shows success state; lead appears in Vercel logs
- [ ] Nassau project in your Vercel dashboard is unchanged
- [ ] No other GitHub repos modified
