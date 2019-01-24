# Blob Emojis for PushBullet SMS

**This add-on replaces stock emojis with their Google "blobs" representation from Android 6.0.1, on the PushBullet SMS website**

![Display good ol' blobs !](resources/images/blob.jpg "Display good ol' blobs !")

## Prerequisites

The Noto Color Emoji font must be installed on the system, because a font cannot be loaded as an external resource by a Firefox Web Extension. It is available in "resources/NotoColorEmoji-SVGinOT-Win-1.1.5" on this repository, or on the Releases page.
For Windows, double-click on the .ttf file then select "Install". You must have administrator rights to do this.

## What it does

This extension includes a script "replace.js" that contains Noto emojis SVGinOT font in base64 format. The script injects a style element into the PushBullet SWS website page, including the font and enabling it for SMS pop-ups only.

