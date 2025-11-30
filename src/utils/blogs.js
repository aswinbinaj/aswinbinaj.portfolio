import firstblog from "../../public/firstblog.jpg";
import secondblog from "../../public/woocommerce.jpg";
import thirdblog from "../../public/php.jpg";

export const blogPosts = [
  {
    id: 1,
    image: firstblog,
    title: "Why Choose React for Front-End Development",
    description:
      "React has become one of the most popular JavaScript libraries because of its component-based architecture, fast rendering, and robust ecosystem. Here's why developers prefer it for modern front-end development.",
    content: `
React is currently the most widely used front-end library for building user interfaces.

 🔹 1. Virtual DOM for Faster Rendering
React uses a Virtual DOM mechanism that boosts performance significantly. Instead of updating the whole UI, React only updates the part that changes.

🔹 2. Component-Based Architecture
React apps are built using reusable components. This makes development faster, cleaner, and easier to maintain.

 🔹 3. Huge Community & Ecosystem
The ecosystem includes:
- React Router
- Redux / Zustand
- Next.js
- Tailwind / MUI

 🔹 4. Strong Job Market
Companies like Meta, Netflix, Discord, Airbnb, etc., all use React.

If you're starting front-end development, React continues to be the best option in 2025.
    `,
  },

  {
    id: 2,
    image: secondblog,
    title: "Creating a WooCommerce Store with Custom Features",
    description:
      "WooCommerce is a powerful e-commerce platform for WordPress, allowing developers to create highly customized and scalable online stores. Here's how I approach building WooCommerce stores for clients.",
    content: `
WooCommerce powers more than **5 million online stores** globally. It's flexible, open-source, and highly customizable.

🔹 1. Why I Prefer WooCommerce
- SEO-friendly  
- Easy to manage for clients  
- Works perfectly with Elementor  
- Supports plugins for everything (shipping, payments, tracking)

 🔹 2. My Development Workflow
1. Setup WordPress & WooCommerce  
2. Create or customize theme  
3. Configure shipping, payment, tax  
4. Add product filtering, variations, wishlist  
5. Optimize speed (cache, CDN, image compression)  
6. Add security plugins & hardening  

 🔹 3. Custom Features I Often Build
- Custom checkout design  
- Advanced product filtering  
- WhatsApp inquiry instead of add-to-cart  
- Regional pricing control  
- Custom shipping rules  

If you're planning to build an e-commerce store, WooCommerce remains one of the most flexible platforms.
    `,
  },

  {
    id: 3,
    image: thirdblog,
    title: "What Is PHP and Why It's Still Relevant in 2025",
    description:
      "Many assume PHP is outdated, but in reality, PHP powers over 70% of the web, including WordPress, Facebook (early days), and major enterprise systems.",
    content: `
PHP has been around for more than **25 years** and is still incredibly relevant.

🔹 1. PHP Powers WordPress
Over **43% of all websites** run on WordPress — and WordPress is built entirely on PHP.

No PHP → No WordPress.

 🔹 2. Frameworks Like Laravel Are Booming
Laravel made PHP modern:
- Clean MVC structure  
- Authentication scaffolding  
- Queues, jobs, caching  
- Blade templating  
- Eloquent ORM  

 🔹 3. PHP 8 Made Big Improvements
- JIT compiler  
- Faster performance  
- Strong typing improvements  

 🔹 4. Job Market Still Strong
Because companies always need:
- WordPress developers  
- Laravel developers  
- Custom PHP backend engineers  

PHP is not dying — it is evolving.
    `,
  },
];
