# <img src="dialogue-ui/src/assets/logo.svg" width="40"/> Hello Dialogue!

As a demo for our interview, I've set up this little web app for us to discuss! You have two parts to this, a vite app and a rails app (just for an API).

As for what this does, I'm aiming for a mini rescheduler-like thing, that could conceptually be part of dialogue. If an appointment had to be cancelled by the physician in dialogue, I could imagine this application swinging in as a link in an email to allow the user to select from a few other free time options/cancel the appointment.

- Users are handled in `dialogue-api`, but this would be dialogue's own auth in a "real" environment (Same applies to the backoffice UI that physicians use, that's just simply emulated here)
- I'm presuming only simple rescheduling cases for now, so only changes to the time + date, but not for example, letting a physician choose to swap out for another. 

> **Note:** I have a feeling the main focus will be on the vite app under `dialogue-ui`, so the rails app under `dialogue-api` will most likely be slightly undercooked for time's sake. Feel free to skim it, though just know tests + small hacks may be present in ruby-land! I tend to use Ruby/Rails as my "get shit done fast" language+framework.
