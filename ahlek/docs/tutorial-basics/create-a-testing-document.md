# Create a Testing Document

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

1. a **sidebar**
2. **previous/next navigation**
3. **versioning**

## Create a Testing Document

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http;//localhost:3000/docs/hello.](http://localhost:3000/docs/hello.)

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md"
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"

export default {
    tutorialSidebar: [
        'intro',
        'hello',
        {
            type: 'categpry',
            label: 'Tutorial',
            items: ['tutorial-basic/create-a-document'],
        },
    ],
};
```
