# Safe Rides of Redding and Easton (SRRE)

`safe-rides-redding-easton` (beta 1.0.1) @ [https://www.saferideser9.org][0]. Also available at [https://safe-rides-redding-easton.herokuapp.com][1], or [bit.do/srre][2].

---

### Description

Safe Rides of Redding and Easton (SRRE) provides safe, volunteer drivers for students who feel unsafe in the ER9 region. If you feel unsafe at a party, need an emergency ride home, or feel intimidated by your friends' insane driving, SRRE is there for you!

SRRE was created by Mike Klein-Wassink and Luca Cerbin. The web-app was created by Jonathan Lam.

![Screenshot of tabs][3]

Download and save as a web-app on iOS for easier access. [See instructions here][4] if you do not know how to do so.

---

## Build 1.0.1

### Changes from build 0.0.1

- Consistent usage for secure websockets (`wss`) for client-server interaction (as opposed to mixing it with secure HTTP)
- Use of Angular 5 for robust front-end structure (see the [README.md][5] for more information)
- Use of Bootstrap for responsive, clean front-end design
- Cleaner, better-commented code
- Addition of information page and privacy policy
- Improved error reporting
- More dynamic maps and mission page

### Build progress

Because this build is brand-new, not all of the features have been implemented yet. Here is what is fully functional (but perhaps not complete):

- Page template
- Sign in (w/ error reporting) and out
- Home page (w/ profile, sign-in and sign-up forms)
- Request page (w/ improved map)
- Request page server handling
- Volunteer page (w/ tables w/ improved usability)
- Mission page (w/ multiple expandable cards)
- Volunteer page server handling
- Mission page server handling
- Sign up (w/ error reporting)
- Chat for mission page
- Show volunteer dates
- Update maps, resize and center appropriately
- Allow users to make changes to details or add volunteer key

Here are the major features going into development next (in order):

- Add start time, drivee phone number to missions
- Allow mass dumping of information for official records
- Show when users are on-duty
- Minor bug handling
- Potential PANIC button?

### Current Bugs
- Signing out during a session may cause some inconsistencies if you're signed in on another tab (easy but tedious).
- Error handling syntax for db usage is inconsistent (easy but tedious).

---

## Build 0.0.1 (for old times' sake)

### Features

- Free sign up with your name, email, phone address, and home address. Details will be verified.
- Sign up for volunteer hours. Volunteers must be authorized before being allowed to ride.
- Request a safe ride.
- Text messages sent out to remind users of volunteer times, contact volunteers when cases

(Verifications and text messaging still a work in progress.)

### (Potential) Future Updates

- Implement verification of users and driving ability for volunteers.
- Finish implementing text messaging.
- Logging of all safe ride info.
- Higher site reliability.

---

Please file bug reports under the "Issues" tab above or contact Jonathan Lam.

[0]: https://www.saferideser9.org
[1]: https://safe-rides-redding-easton.herokuapp.com
[2]: http://bit.do/srre
[3]: https://s26.postimg.org/o51o8mkrt/srre.png
[4]: https://www.maketecheasier.com/save-web-page-as-home-screen-app-ios/
[5]: ./public/README.md
