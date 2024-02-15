---
title: "How to Create Fully Reusable React Components"
date: "February 14 2024"
tags:
  - "Front-End"
  - "React"
overview: "Creating a component is fairly easy, but doing them correctly is a different story."
---

## Introduction

Creating a React component is fairly easy, just a function like this.

```jsx
export default function Card() {
  return <div>card</div>;
}
```

Then you can call them using JSX like `<Card />`, and it’s done.

However, **to do them correctly** is the reason that I write this blog. I’ve been wanting to write this for quite some time.

Doing them correctly may come naturally to developers who have been writing React for quite a while, but not for beginners. This is something that I learned the hard way over experience, nobody really taught me this. I want you who are currently reading to get them quickly.

## The Common Flow

If you look at the Card component that I created above, it has one crucial flaw: it’s not fully reusable.

> But wait, it is reusable?! I can use them multiple times in different files.

Well yes, you can.

```jsx
// order page
<Card />;

// product list page
<div>
  {products.map((product) => (
    <Card />
  ))}
</div>;
```

But they are not fully reusable.

A fully reusable component is what I call a component that is enjoyable to use. While the flawed ones frustrate you every time you need to customize them. It’s something that actually helps you code quickly by being fully reusable.

First, let's see how the flawed component looks like.
