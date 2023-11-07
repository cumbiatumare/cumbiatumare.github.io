# Cumbia Tu Mare

This README will guide you on how to make updates to the Cumbia Tu Mare website and add translations for different languages. You can also learn how to test the website locally before deploying any changes.

Access the website at https://cumbiatuma.re/

## What do we need to do with this repo?

It's important to keep the tour section (i.e the `<div id="tour>` element) up to date.

This will involve removing old dates and creating new ones, and then updating the translations and the photos accordingly.

## Adding Translations with i18n

We use the i18n (internationalization) library to manage translations for different languages. Follow these steps to add translations:

**Access Language Files**: in [docs/translations](docs/translations/), you'll find language files for different languages (e.g., `en.json`` for English). Inside these files, you'll see keys and their corresponding translations. For example:

```json
{
  "contact-intro": "Want us to play at your party? Have a question?"
}
```

Here, `"contact-intro"` is a key that will be the same for each language, and `"Want us to play at your party? Have a question?"` is the translation. You can add or modify translations for each language.

**Reference Keys in HTML**: In your HTML files, you can reference these keys using the `data-i18n` attribute. For example:

```html
<p data-i18n="contact-intro">Default Value</p>
```

The i18n library will replace this placeholder with the correct translation based on the selected language.

## Adding photos

Please add any photos under [docs/assets](docs/assets/) and reference them accordingly, e.g. `<img src="docs/assets/edgar.jpg">`.

Remember to test locally that the photos look all right before pushing!

### Converting JPG to WEBP

We use webp instead of jpg because of the size of the images. If you've got a jpg photo, first install `cwebp`:

```bash
brew install webp
```

Put your photo in [docs/assets](docs/assets/) and run

```bash
bash converter.sh
```

This will convert all the `.jpg` files into `.webp`. Remember to remove the jpg files before committing your changes.

### Cropping the image maintaining the aspect ratio

Sometimes photos don't look exactly the same size so some elements get distorted.

Install image magick:

```bash
brew install imagemagick
```

First check the size of the image.

```bash
file <image_file>
```

Edit the file `cropper.sh` with the size of the image you want to have and then run:

```
bash cropper.sh <image_file>
```

It'll be stored in [docs/assets/](docs/assets/) with a `-crop` suffix.

## Testing Locally Using Python's HTTP Server

To test the website locally before deploying changes, you can use Python's built-in HTTP server. Here's how:

```bash
# in project's root directory
python -m http.server
```

This command will start a local web server, and you'll see output indicating the server's address (usually http://localhost:8000). Open your browser and check it out.

## Deploying Changes

Once you're satisfied with your changes and translations, you can deploy them to our website by pushing to master. It will be ready in a couple minutes.

## Notes on contributing

Since the website is so small and serves a single purpose, I'm all right with you guys pushing to master. Just remember to test locally beforehand.

I use a mixture of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [gitmojis](https://gitmoji.dev/), which I'll consider a nice-to-have but not necessarily mandatory.

Love, Juani.
