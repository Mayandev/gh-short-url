# gh-short-url

A command line tool that use github pages to convert short url.

## How to use

```bash
# install package
npm install gh-short-url -g
# config your url database repository and github user name and github pages domain
shorten config --database=${repo-name} --user=${username} --pages=${domain}
# shorten it
shorten https://en.wikipedia.org/wiki/Kobe_Bryant#Basketball_legacy/
# you can also use surl
surl https://en.wikipedia.org/wiki/Kobe_Bryant#Basketball_legacy
```

## How does this work

Thank to [gh-pages-url-shortener](https://github.com/Mayandev/gh-pages-url-shortener#-how-does-this-work) for the  ideas.