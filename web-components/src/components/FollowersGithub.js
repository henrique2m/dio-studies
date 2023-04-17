class FollowersGithub extends HTMLElement {
  constructor() {
    super();

    this._root = this.attachShadow({ mode: "closed" });
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.connectedCallback();
  }

  connectedCallback() {
    this._root.innerHTML = `${this.build()}${this.style()}`;
  }

  disconnectedCallback() {
    this._root.innerHTML = "";
  }

  static get observedAttributes() {
    return ["name", "avatar-url", "html-url"];
  }

  build() {
    let login = this.getAttribute("login");
    let avatarUrl = this.getAttribute("avatar-url");
    let htmlUrl = this.getAttribute("html-url");

    return `
    <div class="container-followers">
      <img  src="${avatarUrl}" class="avatar">
      <div class="infos">
        <a href="${htmlUrl}" target="self">  
          <span>${login}</span>
        </a>
    
      </div>
    </div>
    `;
  }

  style() {
    return `
    <style>
      .container-followers {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #fff;
        padding: 12px;
      }

      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .infos {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 8px;
      }

      .info a {
        text-decoration: none;
      }
      .infos a, span {
        color: #fff;
        font-weight: bold;
      }
    </style>
    `;
  }
}

customElements.define("followers-github", FollowersGithub);
