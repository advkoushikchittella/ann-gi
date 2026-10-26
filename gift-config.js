/*
 * ANNIVERSARY GIFT CONTENT
 * Edit the text, dates, names and photo paths in this file.
 * Keep JavaScript strings inside quotes. Keep commas between items.
 * Dates should use ISO format with a timezone, e.g. 2026-10-28T00:00:00+05:30.
 */
window.GIFT_CONFIG = {
  from: "Koushu",
  to: "Gnani",
  years: 2,
  displayDate: "28 October 2026 · 12:00 AM",
  since: "2024-10-28T00:00:00+05:30",        // the day you became a couple
  miles: "430 km between U and Me, and none at all between us.",                                  // e.g. "7,990 km apart, 0 apart in my head"
  title: "To my cutie",
  message: "Another year of good mornings that arrive at midnight, of dinners eaten on opposite sides of a screen, and of counting the days between visits. Distance has never made us smaller. It has only made every call, every message and every goodbye matter more. Thank you for choosing this with me.",
  reasons: [
    "You make a two-inch screen feel like the same room.",
    "You remember the small things and make them feel large.",
    "You turned waiting into something I look forward to."
  ],
  surprise: { title: "A tiny surprise", instruction: "Scratch to reveal", message: "Two years down. Forever to go." },
  nextMeet: "2026-10-28T00:00:00+05:30",      // when you next see each other
  nextTitle: "Until our second anniversary",
  nextNote: "28 October · 12:00 AM",
  closing: "Distance is just a number. You are my always.",
  firstPlace: "Bareilly, Uttar Pradesh",
  story: [   // name your photos 01.jpg to 09.jpg in assets/images, or change the paths
    { date: "The day we met", caption: "Bareilly, where it all began", photo: "./assets/images/01.jpg" },
    { date: "Our first trip", caption: "Lost, happy, together", photo: "./assets/images/02.jpg" },
    { date: "Late-night calls", caption: "Ten minutes that became three hours", photo: "./assets/images/03.jpg" },
    { date: "Your favourite smile", caption: "The one I replay all day", photo: "./assets/images/04.jpg" },
    { date: "A day I won’t forget", caption: "Add the story here", photo: "./assets/images/05.jpg" },
    { date: "Pure silliness", caption: "Us at our best", photo: "./assets/images/06.jpg" },
    { date: "Little moments", caption: "The tiny things that stayed", photo: "./assets/images/07.jpg" },
    { date: "Celebrations", caption: "Every one is better with you", photo: "./assets/images/08.jpg" },
    { date: "Almost there", caption: "Two years and counting", photo: "./assets/images/09.jpg" }
  ],
  openWhen: [
    { t: "Open when you miss me", m: "Look up. Same moon, same sky, same me thinking about you." },
    { t: "Open when you can’t sleep", m: "Close your eyes. I’m right there, humming something off-key." },
    { t: "Open when you need a smile", m: "Remember the time we laughed until neither of us could breathe? Do that again in your head." }
  ],
  hugReply: "Felt that. Wrapped around you from here.",
  nightLabel: "The night of 27–28 October 2024",
  moonLine: "Whatever the sky was doing, you were the brightest thing in it.",
  ui: {
      "pageTitle": "An Anniversary, Just for You",
      "openingLabel": "Something is tied up for you",
      "openingHint": "Tap the heart to unravel it",
      "openButtonLabel": "Tap the heart to open your gift",
      "soundOnLabel": "Turn sound off",
      "soundOffLabel": "Turn sound on",
      "soundTitle": "Toggle background music",
      "anniversaryLabel": "Happy Anniversary",
      "messageLabel": "For you",
      "nightLabel": "That night",
      "nightHeading": "The sky when it began",
      "moonImageAlt": "The moon on the night it began, with stars around it",
      "storyLabel": "Our story",
      "storyHeading": "Moments I keep",
      "storyTimelineLabel": "Photo timeline, scroll sideways",
      "distanceLabel": "Across the distance",
      "daysHeading": "Days I’ve been yours",
      "daysSubheading": "and every one of them felt closer with you in it",
      "reasonsLabel": "Why I’d choose you again",
      "reasonsHeading": "A few reasons",
      "openWhenLabel": "Keep these close",
      "openWhenHeading": "Open when…",
      "hugLabel": "Right now",
      "hugHeading": "Send me a hug",
      "hugButtonLabel": "Press and hold to send a hug",
      "surpriseLabel": "One more thing",
      "revealButton": "or tap to reveal",
      "momentLabel": "The moment",
      "daysUnit": "Days",
      "hoursUnit": "Hours",
      "minutesUnit": "Min",
      "secondsUnit": "Sec",
      "placeLink": "Where it began",
      "pagesLabel": "Pages",
      "backButton": "Back",
      "continueButton": "Continue",
      "restartButton": "Start again",
      "yearLabel": "Year {years} together",
      "signature": "Forever yours, {from}",
      "anniversaryReached": "Happy anniversary, my love",
      "holdToHug": "Press and hold",
      "missingPhoto": "Add a photo for this memory",
      "memoryAlt": "A memory together",
      "newMoon": "new moon",
      "waxingCrescent": "waxing crescent",
      "firstQuarter": "first quarter",
      "waxingGibbous": "waxing gibbous",
      "fullMoon": "full moon",
      "waningGibbous": "waning gibbous",
      "lastQuarter": "last quarter",
      "waningCrescent": "waning crescent",
      "moonPhaseFormat": "{phase} · about {percent}% lit",
      "soundFallbackLabel": "Use the built-in ambient music",
      "scratchAriaLabel": "Scratch to reveal the hidden message"
  },
  youtube: { id: "lY_IMTsz-1s", start: 14, volume: 25 }   // YouTube audio when available; local ambient fallback while it loads
};
