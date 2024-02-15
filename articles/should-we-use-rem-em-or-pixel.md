---
title: "Should We Use Rem, Em, or Pixel?"
date: "February 15 2024"
tags:
  - "Front-End"
  - "CSS"
overview: "Differences between rem, em, and px unit, and some use cases."
---

## Introduction

> Using Rem and Em units is better than using px.

When we use px, it means that we hardcode the font-size to all of the users. The user can't change the value whatsoever. This actually troubles the user that wants to have a bigger font-size from the default `16px`.

## How do rem works?

Rem and Em is a relative unit that many developers use to preserve accessibility.

> Using Rem and Em units is better than using px.

Usually, the default root font-size is 16px. So, if we see a font-size that is 1rem, we are looking at 16px

Because Rem means root element's font-size, we can also override the default value by using CSS like this:

```css
:root {
  font-size: 20px;
}
```

Because we changed the root font-size, now `1rem = 20px`.
