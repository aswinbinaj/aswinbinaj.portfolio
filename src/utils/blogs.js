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
React is one of the most widely used front-end libraries today because of its performance, flexibility, and large ecosystem. Its Virtual DOM system ensures faster rendering by updating only the parts of the UI that change, instead of reloading the entire page. This makes applications smoother and more efficient.

Another major advantage is React’s component-based architecture. It allows developers to build reusable components, making projects easier to maintain, scale, and update. The huge ecosystem around React also contributes to its popularity—tools like React Router, Redux, Zustand, Next.js, Tailwind CSS, and Material UI make development even more powerful.

With strong adoption from companies like Meta, Netflix, Airbnb, and Discord, the job market for React developers continues to grow. For anyone starting front-end development in 2025, React remains one of the best and most future-proof choices.
    `,
  },

  {
    id: 2,
    image: secondblog,
    title: "Creating a WooCommerce Store with Custom Features",
    description:
      "WooCommerce is a powerful e-commerce platform for WordPress, allowing developers to create highly customized and scalable online stores. Here's how I approach building WooCommerce stores for clients.",
    content: `
WooCommerce powers more than five million online stores worldwide, offering flexibility, scalability, and complete control over customization. It is SEO-friendly, easy for clients to manage, integrates smoothly with Elementor, and supports thousands of plugins for advanced features like payments, shipping, and product management.

My development workflow usually begins with setting up WordPress and WooCommerce, followed by creating or customizing the theme. I configure essential store settings such as shipping, tax, and payment gateways. Once the base is ready, I add features like product variations, filtering systems, wishlists, and performance optimization through caching and CDN integration. Security configurations are also a crucial part of every build.

I often develop custom features like WhatsApp inquiry-based checkout, advanced product filters, custom checkout layouts, regional pricing, and tailored shipping rules. With its flexibility and huge plugin ecosystem, WooCommerce remains one of the best platforms for building powerful e-commerce solutions.
    `,
  },

  {
    id: 3,
    image: thirdblog,
    title: "What Is PHP and Why It's Still Relevant in 2025",
    description:
      "Many assume PHP is outdated, but in reality, PHP powers over 70% of the web, including WordPress, Facebook (early days), and major enterprise systems.",
    content: `
PHP has been powering the web for more than 25 years and continues to remain highly relevant. One of the biggest reasons for its dominance is WordPress, which runs on PHP and powers over 43% of all websites globally. Without PHP, the entire WordPress ecosystem wouldn’t exist.

Modern PHP frameworks like Laravel have taken PHP to the next level with features such as a clean MVC architecture, authentication scaffolding, queues, caching, and a beautifully designed Blade templating engine. Laravel’s Eloquent ORM makes working with databases extremely easy, contributing to its rapid rise in popularity.

With PHP 8, the language has become faster and more efficient due to the JIT compiler and improved typing features. The job market for PHP developers remains strong because businesses constantly need WordPress experts, Laravel developers, and custom backend developers. PHP is far from dying—it's evolving and still powering the majority of the web.
    `,
  },
];
