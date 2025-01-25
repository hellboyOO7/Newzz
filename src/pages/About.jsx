import React from "react";

const About = () => {
  return (
    <div className="mx-10">
      <h1 className="text-4xl font-semibold mb-3">About us</h1>
      <h2 className="text-1xl font-semibold mb-3">
        Welcome to <strong>Newzz</strong>, your go-to destination for the latest
        news and updates from around the world. Our platform is designed to
        provide you with reliable, timely, and engaging content, ensuring you
        stay informed about current events, trends, and stories that matter most
        to you.
      </h2>
      <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
      <p className="mb-6">
        We believe in delivering news with a seamless user experience. Our
        website leverages modern technologies to ensure speed, reliability, and
        accessibility. Here are some of the key features that set us apart:
      </p>

      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          <strong>React Router:</strong> We use React Router to provide a smooth
          and dynamic browsing experience. Navigate effortlessly between
          categories, articles, and pages without unnecessary reloads, making
          your experience faster and more efficient.
        </li>
        <li className="mb-2">
          <strong>Context API:</strong> Our website uses Context API to manage
          state across the application efficiently. This ensures consistent and
          personalized experiences, such as saving your preferences and
          enhancing the overall usability.
        </li>
        <li className="mb-2">
          <strong>Axios Integration:</strong> We rely on Axios for seamless
          communication with external APIs, ensuring real-time updates and a
          steady stream of accurate news content.
        </li>
        <li className="mb-2">
          <strong>Modern Design with ShadCN & Tailwind CSS:</strong> Our website
          is built with ShadCN and styled using Tailwind CSS to create a
          visually appealing, responsive, and modern interface. Whether you are
          on a desktop, tablet, or mobile device, our design adapts flawlessly
          to your screen.
        </li>
        <li className="mb-2">
          <strong>GNews API:</strong> The heart of our platform lies in the
          GNews API, which provides us with verified and up-to-date news
          articles. This ensures you get trusted and relevant information,
          curated just for you.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
      <p className="mb-6">
        Our mission is to keep you informed by delivering news that is fast,
        accurate, and accessible. We are committed to empowering our readers
        with information that helps them make better decisions and stay
        connected with the world.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Feedback & Support</h2>
      <p>
        We value your input and strive to improve every day. If you have any
        suggestions, questions, or feedback, feel free to reach out to us. Your
        opinions help us grow and serve you better.
      </p>

      <p className="mt-6">
        Thank you for choosing <strong>Newzz</strong>. Together, let's stay
        informed and inspired!
      </p>
    </div>
  );
};

export default About;
