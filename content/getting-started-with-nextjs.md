---
title: "My Honest Journey into Next.js 🚀"
author: "Sakshi Singh"
slug: "getting-started-with-nextjs"
date: "2025-08-12"
description: "A candid journey of learning Next.js, facing silly mistakes, and understanding core concepts as a beginner."
image: "nextjs.jpeg"
---

# **Introduction**

Getting started with **Next.js** was both exciting and... well, mildly chaotic. As someone who's been exploring web development, Next.js sounded like this magical framework that everyone was using for serious frontend work.

So, I finally decided to try it — this blog is a raw, human look at my early steps with it, the “oops” moments, and everything I learned that I wish I had known earlier.  

---

# **First Steps (and First Facepalms 😅)**

I started with:

```bash
npx create-next-app@latest my-nextjs-project
````

Smooth. But here’s the first silly mistake — I **forgot to `cd` into the folder** and ran `pnpm run dev` right away. Result?
` ERR_PNPM_NO_SCRIPT  Missing script: dev`

I panicked. Googled. Repeated commands. Only to realize... I wasn’t even inside the project folder.

> **Lesson 1:** Don't blame the framework. Sometimes it's just you in the wrong directory.

---

# **Understanding Basic Workflow**

Once inside the project, the folder structure was quite clean. Pages go inside the `app/` or `pages/` folder (I was using the App Router). Here’s what I got comfortable with:

* `app/page.js` — Your landing page
* `app/about/page.js` — About route
* `app/blog/[slug]/page.js` — Dynamic routes using square brackets!

---

## **Creating Routes**

Creating a new route? Just create a folder with the route name inside `/app` and add a `page.js` file. No React Router config needed. Simple as that!

```bash
app/
├── page.js         → Home (/)
├── about/
│   └── page.js     → About (/about)
├── blog/
│   └── [slug]/     → Dynamic Route (/blog/my-first-post)
│       └── page.js
```

---

# **Reusable Components**

I built a `<Header />` and `<Footer />` component inside a `/components` folder and used them like:

```jsx
import Header from "@/components/Header";
```

Yes, the **@/** alias is amazing. No more `../../../` headache.

---

# **The "use client" Moment**

In the App Router, all files are **server components by default**, which means you can't use hooks like `useState` or `useEffect` unless you mark the file with:

```js
"use client";
```

I forgot to add `"use client"` in my component and kept wondering why `useState` was throwing errors.
It was frustrating until I realized the difference between **Server** and **Client** components in Next.js.

> **Lesson 2:** If you're using hooks like `useState` or `useEffect`, remember to add `"use client"` at the top!

---

# **Using `useState` and `useEffect`**

Here’s a basic example I built for testing:

```jsx
"use client";

import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count changed:", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
```

I learned how:

* `useState` lets you create reactive variables.
* `useEffect` runs when component mounts or dependencies change.

Also, your component won't work unless it's marked as client-side with `"use client"`.

---

# **Styling and UI Libraries**

I integrated **Tailwind CSS** and **shadcn/ui** to make the UI beautiful without writing too much CSS.

> `npx shadcn-ui@latest init` — worked like a charm!

Used it for cards, buttons, and layout. Learning to style with utility classes was super empowering.

---

# **Debugging & Mistakes I Made**

* Forgetting `"use client"` in client components
* Misunderstanding file-based routing (I accidentally created `.js` files instead of `page.js`)
* Used wrong import paths (`import from '../../Header'` instead of `@/components/Header`)
* Didn't restart dev server after installing new dependencies 😅

> **Lesson 3:** Read errors. Read slowly. Most of them *actually tell you* what’s wrong.

---

# **Final Thoughts**

Getting started with Next.js felt like shifting from city roads to expressways — smooth once you’re in the flow, but confusing in the beginning.

If you're new, here’s what I’d say:

* Don’t skip reading the official docs.
* Practice routing and components before going for advanced topics.
* Mistakes are part of the journey — laugh at them, learn from them.

---

# **Conclusion**

Next.js made me rethink how modern web apps should be built. With routing, client/server components, and performance out of the box — it's a powerful tool for any web developer.

The journey is ongoing, and I’ll continue sharing my learnings, experiments, and debugging tales. Until then...

> **Happy coding** and remember: the silly mistakes often teach you the smartest lessons. ❤️

````

