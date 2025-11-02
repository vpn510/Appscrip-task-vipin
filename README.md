# 🛍️ E-Commerce Product Listing Page (Next.js + SSR)

A modern and fully responsive **Product Listing Page (PLP)** built using **Next.js** with **Server-Side Rendering (SSR)**.  
It displays products dynamically using data from the **DummyJSON API**, featuring a clean golden-themed UI, responsive layout, and reusable components.

🌐 **Live Demo:** [https://appscri.netlify.app/plp](https://appscri.netlify.app/plp)

---

## 🚀 Tech Stack

- ⚛️ **Next.js 14+** — for SSR and React-based rendering  
- 🎨 **CSS Modules** — for modular, scoped styles  
- 🌍 **DummyJSON API** — to fetch live product data  
- ☁️ **Netlify** — for deployment and hosting  

---

## ✨ Features

✅ **Server-Side Rendering (SSR)** for SEO & faster load  
✅ **Responsive Design** — adjusts beautifully across all screen sizes  
✅ **Dynamic Product Grid** — loads data from API at runtime  
✅ **Modern UI** — clean golden theme with subtle hover effects  
✅ **Reusable Components** — modular and maintainable  
✅ **Deployed on Netlify** — quick CI/CD setup  

---

## 🗂️ Folder Structure

```
📦 appscrip-task-vipin
 ┣ 📂 components
 ┃ ┗ 📜 ProductCard.jsx
 ┣ 📂 pages
 ┃ ┣ 📜 index.js
 ┃ ┗ 📜 _app.js
 ┣ 📂 styles
 ┃ ┗ 📜 plp.module.css
 ┣ 📜 next.config.mjs
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 .gitignore
```

---

## ⚙️ Setup & Installation

Follow these steps to run it locally 👇

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/appscri-plp.git
cd appscri-plp
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```

> Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment (on Netlify)

### Steps to Deploy
1. Push your code to **GitHub**.  
2. Go to [https://app.netlify.com](https://app.netlify.com).  
3. Click **“New site from Git”** → Connect your GitHub repo.  
4. In the **build command**, set:
   ```
   npm run build
   ```
   and **publish directory** as:
   ```
   .next
   ```
5. Click **Deploy Site** 🚀

> ✅ Netlify automatically builds and deploys the SSR Next.js site.

---

## 🧩 API Used

All products are fetched from:  
🔗 **https://dummyjson.com/products**

Example endpoint:
```bash
GET https://dummyjson.com/products
```

---

## 🧠 Future Improvements

- [ ] Add filters & category sorting  
- [ ] Integrate real e-commerce backend  
- [ ] Add search & pagination  
- [ ] Add cart & checkout page  
- [ ] Improve SEO with metadata  

---

## 👨‍💻 Developer Info

**Developed by:** [Vipin Madheshiya](https://www.linkedin.com/in/vipinvpn)  
💻 **GitHub:** [vpn510](https://github.com/vpn510)  

---