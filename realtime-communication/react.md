# 30 Advanced & Modern React Interview Questions & Answers (2026)

### 1. What are the key differences between React 18 and React 19 (if released) or latest features?
**Answer:**  
React 18 brought automatic batching, concurrent rendering, and Transitions. In modern React (18+), we focus heavily on Server Components, Streaming SSR, and better Suspense integration. The biggest shift is moving from pure client-side to hybrid server-client architecture.

### 2. Explain React Server Components (RSC) in detail.
**Answer:**  
React Server Components allow you to write components that run only on the server. They can directly access databases, file systems, etc., without exposing sensitive logic to the client. They are async by nature and help reduce bundle size dramatically.

### 3. What is the difference between Server Components and Client Components?
**Answer:**  
- Server Components: Run on server, no state, no effects, smaller bundle.  
- Client Components: Run on client (`"use client"`), can have state, hooks, interactivity.

### 4. How does React's Concurrent Rendering work?
**Answer:**  
Concurrent Rendering allows React to work on multiple tasks at the same time without blocking the main thread. It can interrupt low-priority renders to handle user interactions first (using `startTransition`).

### 5. Explain `useTransition` hook with a practical example.
**Answer:**  
`useTransition` marks state updates as non-urgent. Useful for search inputs, tab switching, etc.

```tsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setTab('settings');  // This won't block UI
});
```

### 6. What are Actions in React 19?
**Answer:**  
Actions are async functions that can be used directly in forms and with `useActionState`. They simplify mutation handling with built-in pending, error, and optimistic states.

### 7. Explain `useActionState` hook.
**Answer:**  
New hook in React 19 that manages form actions with loading, error, and data states automatically.

### 8. What is the difference between `useEffect` and `useLayoutEffect`?
**Answer:**  
`useEffect` runs after browser paint. `useLayoutEffect` runs synchronously before paint — useful for measuring DOM elements.

### 9. How do you optimize a large list in React?
**Answer:**  
Use `React.memo`, `useMemo`, `useCallback`, and virtualization libraries like `react-window` or `tanstack-virtual`.

### 10. Explain React's new Compiler (React Forget).
**Answer:**  
React Forget is an automatic memoization compiler. It automatically wraps components with memo and optimizes hooks so developers don't have to manually use `useMemo`/`useCallback` everywhere.

### 11. What are TanStack Query (React Query) advantages over useEffect + fetch?
**Answer:**  
Caching, background refetching, optimistic updates, pagination, infinite queries — all built-in. Much cleaner than manual state management.

### 12. How does Zustand differ from Redux?
**Answer:**  
Zustand is much simpler, has less boilerplate, uses hooks directly, and has great devtools. Redux is still powerful for very large apps with complex middleware needs.

### 13. What is the purpose of `useDeferredValue`?
**Answer:**  
It lets you defer rendering of non-urgent UI parts (like search suggestions) to avoid blocking the main render.

### 14. Explain Server Actions vs API routes.
**Answer:**  
Server Actions are functions you can call directly from client components. No need to create separate API endpoints. More secure and simpler DX.

### 15. How do you handle streaming SSR in Next.js 15 / React 19?
**Answer:**  
Using `<Suspense>` boundaries. React streams HTML as components finish rendering on server.

### 16. What are Partial Prerendering (PPR)?
**Answer:**  
New rendering strategy where static parts are prerendered and dynamic parts are streamed. Best of both static and dynamic worlds.

### 17. How does `useOptimistic` hook work?
**Answer:**  
Used for optimistic UI updates. Shows the expected new state immediately before the server confirms.

### 18. Explain Form handling in modern React (without external libraries).
**Answer:**  
Use native `<form>` + Server Actions + `useActionState` + progressive enhancement.

### 19. What is the significance of `React.memo`, `useMemo`, and `useCallback` in 2026?
**Answer:**  
Still important, but with React Forget compiler, their manual usage is reducing. Still crucial to understand for performance bottlenecks.

### 20. How do you manage global state in large React apps in 2026?
**Answer:**  
Popular choices: Zustand, Jotai, Recoil, or TanStack Store. Redux is less dominant now.

### 21. What are React Compiler rules you should know?
**Answer:**  
- Components must be pure  
- Hooks must be called in same order  
- No side effects in render  
- Dependencies should be stable

### 22. Explain `use` hook in React.
**Answer:**  
New `use` hook can read resources (like promises) directly in components. Used heavily with Server Components and Suspense.

### 23. How do you implement infinite scrolling efficiently?
**Answer:**  
Use `Intersection Observer` + TanStack Query infinite query or `react-window` with virtualization.

### 24. What is the difference between `next/dynamic` and React.lazy?
**Answer:**  
`React.lazy` is for client-side code splitting. `next/dynamic` is more powerful in Next.js with SSR options.

### 25. How do you debug performance issues in React?
**Answer:**  
- React DevTools Profiler  
- Why Did You Render  
- Lighthouse  
- `why-did-you-render` library

### 26. What are the best practices for folder structure in large React apps?
**Answer:**  
Feature-based or domain-driven structure instead of type-based (components, utils, etc.).

### 27. Explain Error Boundaries vs React 19 error handling.
**Answer:**  
Error Boundaries still work for class components. In modern React, we prefer `ErrorBoundary` from libraries or global error handlers with Server Actions.

### 28. How does hydration work and what are common hydration errors?
**Answer:**  
Hydration is when React makes static HTML interactive. Common errors: different content on server vs client (dates, random values, browser APIs).

### 29. What is the future direction of React according to you?
**Answer:**  
Moving towards full-stack React with Server Components as default, better compiler, simpler data fetching, and seamless client-server boundary.

### 30. Design a scalable dashboard using modern React patterns.
**Answer:**  
- Use Server Components for data fetching  
- TanStack Query for client state  
- Zustand for UI state  
- TanStack Table + Virtualized lists  
- Proper error + loading states with Suspense
