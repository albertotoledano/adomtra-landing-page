# Hero background photos

`config.js` → `heroMedia.strip` (used now): whole photos shown side by side and
sliding slowly — two rows on desktop, one vertical column on phones. Nothing is
cropped or enlarged, so square photos ~1000 px work well. Bump `?v=` when a
file changes.

Alternatives: `heroMedia.video` (MP4 loop + poster) or `heroMedia.slides`
(crossfade, photos get cropped to fill). Strip wins over video, video over slides.
