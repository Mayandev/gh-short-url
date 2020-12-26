# gh-short-url

A command line tool that use github pages to convert short url.

## Before Use


1. Fork the [gh-pages-url-shortener](https://github.com/nelsontky/gh-pages-url-shortener), if you don't have your own domain name, I recommend you fork this [link repository](https://github.com/Mayandev/link) I created.


2. Fork the [gh-pages-url-shortener-db](https://github.com/Mayandev/gh-pages-url-shortener-db), it's an empty repository, you can also just create a repository like this, the name doesn't have to be the same.

3. Open the repository you forked in step 1, and modify the 404.html file.

```diff
- var GITHUB_ISSUES_LINK = "https://api.github.com/repos/nelsontky/gh-pages-url-shortener-db/issues/";
+ var GITHUB_ISSUES_LINK = "https://api.github.com/repos/${your name}/${your db repo}/issues/";
```

4. Now, try to open an issue in the repository you created in step 2. The issue title should be a valid url, the body can be empty. Then you can use `${username}.github.io/${link repo}/1` to access the url you entered in the issue title. Mabye the link is still too long and you should use your own domain name.

More Detail: [gh-pages-url-shortener](https://github.com/nelsontky/gh-pages-url-shortener#-this-is-so-cool-how-can-i-use-this-with-my-own-domain)

## How to use

Almost forgot, you need to install the [GitHub CLI](https://cli.github.com/) before you use this command line tool.

Let do it!

```bash
# install package
npm install gh-short-url -g
# config your url database repository and github user name and github pages domain
# example: shorten config --database="gh-pages-url-shortener-db" --user="mayandev" --pages="mayandev.github.io/link/"
shorten config --database=${db-repo-name} --user=${username} --pages=${domain/url-repo/}
# shorten it
shorten https://en.wikipedia.org/wiki/Kobe_Bryant#Basketball_legacy/
# you can also use surl
surl https://en.wikipedia.org/wiki/Kobe_Bryant#Basketball_legacy
```

![image](https://user-images.githubusercontent.com/28648715/102714280-719f5980-4308-11eb-9996-7e39e91ce712.png)



## How does this work

Thank to [gh-pages-url-shortener](https://github.com/Mayandev/gh-pages-url-shortener#-how-does-this-work) for the  ideas.
