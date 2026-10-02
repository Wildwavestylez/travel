# travel

Germany-first postcode road-trip simulator.

## Core rules

- Start at **01067 Dresden**.
- Visit every real geographic German postcode in ascending order.
- Never skip, reorder, or optimize the postcode sequence.
- Use a representative point for each postcode and a separate legally routable access point when needed.
- Calculate road routes using a routing engine and cache reusable route data.
- Simulation speed is fixed at **80 km/h**; live traffic, congestion, lights, and incidents do not affect simulated travel time.
- Persist the local simulation state in the browser for the first version.
- Future/community features are intentionally outside the first version.

## Repository layout

- `app/` — application code
- `data/germany/` — canonical German postcode/location data
- `routes/` — cached route data
- `assets/` — static assets
