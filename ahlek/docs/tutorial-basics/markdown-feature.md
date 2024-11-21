# Markdown Features Testing

Docusaurus supports **[Mardown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Front Matter

Markdown documents have metadata at the top called **[Front Matter](https://jekyllrb.com/docs/front-matter/)**:

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [link](./hello.md)
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page](/create-a-page).
```
```md
Let's see how to [Create a page](./create-a-page.md).
```

**Result:** Let's see how to **[Create a page](http://localhost:3008/docs/tutorial-basics/create-a-page)**.

## Images

Regular Markdown images are supported.

You can use absolute paths to reference images in the static directory(`static/img/image.png`):

```md
![ChatGPT logo](/img/image.png)
```

![ChatGPT logo](/img/image.png)

<center><img src="https://www.uchi.net/wp-content/uploads/2022/10/uchi-logo-new-latest.png" alt="Sample Image" width="400" height="300"/></center>

<figcaption>I love UCHI!!❤️❤️</figcaption>

You can reference image relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:

```md
![ChatGPT logo](./img/image.png)
```

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

```` md
```jsx title= "src/components/HelloDocusaurus.js"
function HelloDocusaurus(){
    return <h1>Hello, Docusaurus!</h1>;
}
```
````

```js title="crc/components/HelloDocusaurus.js"
funtion HelloDocusaurus() {
    return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

```md
:::tip[My tip]

Use this awesome feature option

:::

:::dange[Take care]

This action is dangerous

:::
```

:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::

## Nested Blockquotes

Blockquotes can be nested. Add a >> in front of the paragraph you want to nest

> Dorothy followed her through many of the beautiful rooms in her castle
> 
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
>> Would you like to run the app on another port instead?

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever
>
> *Everything* is going according to **plan**.

## Order List

1. First Item
2. Second Item

## Unordered List

- First Item
- Second Item

* This is the first list item.
* This is the Second list item.

> A blockquote would look great below the second list item

## Tables

To add a table, use three or more hyphens (---) to create each column's hearder, and use pipes (|) to separate each column. For compatibility, you should also add a pipe on either end of the row.

|Syntax     |Description|
|-----------|-----------|
|Header     |Title      |
|Paragraph  |Text       |

## Alignment

You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row.

|Syntax     |Description|Test Text|
|:----------|:---------:|--------:|
|Header     |Title      |Here's this|
|Paragraph  |Text       |And More|

## Task Lists

Task lists (also referred to as checklists and todo lists) allow you to create a list of items with checkboxes. In Markdown applications that support task lists, checkboxes will be displayed next to the content. To create a task list, add dashes (-) and brackets with a space ([ ]) in front of task list items. To select a checkbox, add an x in between the brackets ([x]).

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

Some of these words <ins>will be underlined</ins>.

<center>This text is centered.</center>

<font color="red">This text is red!</font>

## Admonitions

Admonitions are frequently used in documentation to call attention to warnings, notes, and tips. Markdown doesn’t provide special syntax for admonitions, and most Markdown applications don’t provide support for admonitions (one exception is MkDocs).

However, if you need to add admonitions, you might be able to use blockquotes with emoji and emphasis to create something that looks similar to the admonitions you see on other websites.

> :warning: **Warning:** Do not push the big red button.

> :memo: **Note:** Sunrises are beautiful.

> :bulb: **Tip:** Remember to appreciate the little things in life.

## Symbols
Markdown doesn’t provide special syntax for symbols. However, in most cases, you can copy and paste whatever symbol you want to use into your Markdown document. For example, if you need to display Pi (π), just find the symbol on a webpage and copy and paste it into your document. The symbol should appear as expected in the rendered output.

Alternatively, if your Markdown application supports HTML, you can use the HTML entity for whatever symbol you want to use. For example, if you want to display the copyright sign (©), you can copy and paste the HTML entity for copyright (&copy;) into your Markdown document.

Here’s a partial list of HTML entities for symbols:

Copyright (©) — &copy;
Registered trademark (®) — &reg;
Trademark (™) — &trade;
Euro (€) — &euro;
Left arrow (←) — &larr;
Up arrow (↑) — &uarr;
Right arrow (→) — &rarr;
Down arrow (↓) — &darr;
Degree (°) — &#176;
Pi (π) — &#960;