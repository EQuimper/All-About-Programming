# CSS Movement

1. Transition Property
2. Animation Property + Keyframes

---

## transition Property

```css
.element {
    transition: [property] [duration] [ease] [delay];
}

/*Example*/

.element {
    transition: opacity 300ms ease-in-out 1s;
}
```

---

## Animatable Properties

- font-size
- background-color
- width
- position

## Cannot Animate

- display
- font-family
- position

## Perfomant Properties

- position
- scale
- rotation
- opacity

---

> If you animate anything else, it's at your own risk, and the chances
> are you're not going to hit a silky smooth 60fps.

---

## Triggering

- Hover pseudo class
- Class changes
- New Element

---

Translate: move thing

When we have problem with hover take a look
at the parent.

Google chrome have a option where you can see the
speed of the animation like ease-in-out etc.

---

## Keyframes

```css
@keyframes [name] {
    from {
        [styles];
    }
    to {
        [styles];
    }
}

/*Example*/

@keyframes myframes {
    from {
        height: 200px;
        background: orange;
    }
    to {
        height: 400px;
        background: pink;
    }
}
```

## Animation

```css
.element {
    animation: [name] [duration] [timing-function] [delay]
    [iteration-count] [direction] [fill-mode] [play-state];
}

/*Example*/

.element {
    animation: myframes 2s ease-in-out 0s infinite normal forwards paused;
}
```

---

# Using Animation in UX

## When to animate

- Orientation
    > Where am I now?
- Functional Change
    > What does this element do now?
- New Element
    > What should I look at?
- Highlight
    > What is important here?
- Visual Feedback
    > Is the layout understanding what I am asking it to do?
- System Status
    > Is this working? How long will it take?

---

## Codepen Link

- http://codepen.io/devtips/pen/xOdodB/
- http://codepen.io/devtips/pen/Krqrwq/
- http://codepen.io/devtips/pen/AXxGwO/
- http://codepen.io/devtips/pen/mEjOLg
