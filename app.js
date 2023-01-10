class Article {
    constructor(title, src, desc, name, parent) {
        this.title = title;
        this.src = src;
        this.desc = desc;
        this.name = name;
        this.parent = document.querySelector(parent);
    }

    render() {
        let article = document.createElement("article");
        article.classList.add("col-6");
        article.innerHTML = `
        <div class="article">
        <h2>${this.title}</h2>
        <img src=${this.src} alt="">
        <p>${this.desc}</p>
        <div class="author">Author: ${this.name}</div>
        </div>
        `;
        this.parent.append(article);
    }
}

fetch("2.json")
.then((res) => res.json())
.then((data) => {
    data.map(({title, src, desc, name, parent}) =>
    new Article(
        title,
        src,
        desc,
        name,
        parent
    ).render()
    );
});