# Fonts

Another useful feature of CSS are [`@font-faces`](https://developer.mozilla.org/de/docs/Web/CSS/@font-face), which allow you to provide your own fonts.<br>
There are only seven different properties a `@font-face` rule accepts.

## Font Family & Source Files
The font family specifies a name which is later used to reference the font within other rules. The source files are basically relative or absolute paths pointing to a valid font file. Both are required to get a valid font face rendered.
Base64 font file is also supported. Just make sure you supply the mime type for the font.

## Font Properties
In addition to the required parameters, each font face accepts five other properties to customize the font. They all are standard CSS properties:

* `fontVariant`
* `fontStretch`
* `fontWeight`
* `fontStyle`
* `unicodeRange`
* `localAlias` - ```String or Array<String>``` - Provides way to reference locally installed system fonts by name, if available.

<br>

---

### Related
* [Rendering fonts](Renderer.md#renderfont)
* [API reference - `Renderer.renderFont` ](../api/fela/Renderer.md#renderfontfontfamily-files-properties)
* [FAQ - Fonts](../FAQ.md#fonts)
