# Sidebar-01 

`sidebar01` is a modern documentation system built with **Next.js App Router** and **ShadCN UI**, designed to support multi-version content, dynamic sidebar navigation, and a clean, scalable layout system.

It's ideal for building documentation portals, design system sites, component libraries, or internal knowledge hubs.



## 1 Features

- **Multi-version structure**: Each version is fully isolated under `/vX.X.X`
- **Dynamic sidebar navigation**: Auto-generates from structured data per version
- **Version-aware search**: Keeps context while navigating between pages
- **Composable UI components**: Built with Tailwind CSS and ShadCN UI
- **SEO-friendly and static deployable**: Perfect for Vercel, Netlify, or GitHub Pages
- **Modular architecture**: Clean folder structure and reusable logic/hooks



## 2 Project Structure

```bash
/app
  /v1.0.1                  # Versioned pages
  /v1.1.0-alpha
  /v1.1.0-beta
  layout.tsx               # App layout shell

/components
  /ui/sidebar              # Sidebar components
  version-switcher.tsx
  search-form.tsx

/hooks
  use-version-prefix.ts    # Detects current version from URL

/public
  logo.svg

/globals.css              # Tailwind styles
```





## 3 Core Functionality

#### 3.1 Version Switching (via Path Prefix)

Supports navigating between versions using path prefixes like:

```
/v1.0.1/getting-started/installation
→ /v1.1.0-alpha/getting-started/installation
```

No page reloads – navigation is handled via `router.push()`.

#### 3.2 Sidebar Navigation

Each version has its own navigation config. The sidebar auto-renders based on the current version and path, with active item highlighting.

#### 3.3 Search with Version Context

Built-in search field allows keyword lookup. When navigating from search results, the URL is automatically prefixed with the correct version path.





## 4 Getting Started

Install dependencies:

```
npm install
# or
yarn install
```

Run the development server:

```
npm run dev
# or
yarn dev
```



## 5 Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)







----

### About Version Switcher

| Method                  | URL Example                   | Pros                                                         | Cons                                                         | Suitable For                                 |
| ----------------------- | ----------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| **Subdomain**           | `v1.example.com`              | 1. Fully isolated versions 2. Independent deployment 3. Flexible team collaboration | 1. DNS setup required 2. High DevOps cost 3. Complex version management | Enterprise docs, multilingual, multi-version |
| ✅**Path Prefix**        | `example.com/v1`              | 1. Easy to configure 2. Static-friendly 3. SEO-friendly      | Page reloads when switching versions                         | Most small-to-medium projects                |
| **Client-side Routing** | `example.com` + state control | 1. No page reload 2. Fast switch 3. Great UX                 | 1. URL doesn't change (not SEO-friendly) 2. Data managed on frontend | Internal docs, component previews            |

#### ✅ Why We Chose the Path Prefix Approach

**Path Prefix **= Simple + Efficient + SEO-Friendly + clear

1. **Simple Configuration**
   No need to configure DNS or manage subdomains — just add versioned paths (like `/v1`, `/v2`) under the same domain. Quick and easy to set up.
2. **Great for Static Deployment**
   Perfect for tools like Next.js, VitePress, etc. It supports efficient static page generation and works well with caching and CDNs.
3. **SEO-Friendly**
   Each version has its own URL path (e.g., `/v1/home`, `/v2/docs`), which helps search engines crawl and index content effectively — good for discoverability and ranking.
4. **Clear and Consistent URL Structure**
   All versions are served under the same domain, making the structure more organized and easier to manage.





