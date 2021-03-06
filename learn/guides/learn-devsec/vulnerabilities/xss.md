---
title: Cross Site Scripting (XSS)
---

## What Is It?

XSS vulnerabilities occur in web applications that render remote input as part of an HTML document or script.
The result of XSS is often execution of an attacker's JavaScript in the client's browser, in the protection domain of the site. This can steal client information such as cookies.

## When Can It Affect My Application?

XSS affects server backends that generate HTML pages, or client front-ends that render remote input directly as HTML (or a virtual DOM).

## How Do I Know If and Where I Have This Vulnerability?

Contrast Scan can detect XSS vulnerabilities in many applications by scanning code.

Contrast Assess can detect XSS vulnerabilities as they are tested by watching HTML output and encoding.

## How Do I Fix It?

XSS can be fixed by applying proper sanitization for the HTML context: sanitizing data to appear on a page (as text), in an HTML tag as an attribute or value, or in JavaScript.

## How Do People Attack Using This Flaw?

The most common XSS attack is to submit an alert box into parameters or a custom script that would inform an attacker't detection tool.
It is extremely difficult to block XSS through a deny-list.

```javascript
<script>alert('XSS worked')</script>
```