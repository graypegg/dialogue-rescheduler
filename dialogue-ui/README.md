# dialogue-ui

This is just your run-of-the-mill viteJS app! I'm using Vite's proxy feature to connect over to the backend, but that would be the only "odd" thing going on.

A couple of new things I wanted to try, just because I thought it would be interesting:

- All styling is done in CSS modules. Vite supports 'em out of the box, and I'm honestly quite impressed how the ergonomics of CSS modules have improved.
- No framework, just react-router in declarative mode. I use nextjs every day, wanted to see how "frameworkless" was doing now-a-days.

### What's done:

- Basic UI library in /src/ui/*
  - This is where I sunk most of my time this weekend 😅
  - Input + Form are built to work with react-hook-forms, and auto-register. Easy pattern to expand with other form elements.
  - Quite a few little DX features on many of the components, trying to make something I wouldn't hate using haha.
- react-query + an extensible API layer.
  - There's a clear DTO/local state divide, and I've got mappers to jump between them.
  - All network requests have a useQuery/useMutation hook, with an addressable key.

### What I would do if I had some more time this weekend:

- Rescheduling an appointment has the start of the backend going, but no UI.
  - Had some ideas how the UI for this, but just didn't get to that point during the free time I've had this weekend.
- The appointment view is crap, mostly just a bit exhausted at the moment, but I think we have a ton to look at + discuss together!

---

You can start it as you normally would any other ViteJS app, so just:

```shell
npm install
npm run dev
```

- http://localhost:5173 is the UI
- http://localhost:5173/api is a proxy over to port 3000, which hosts the rails API service.

> **If you just want to take a peek at the typescript, and not have to run the rails app** (I wouldn't blame you haha) this should be at least interesting enough to interact with minus the API. **Just know, you won't be able to sign up/log in obviously without the API running.**
