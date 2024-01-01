import React from 'react';

const LearnPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Understanding Diabetes</h1>

      {/* Section 1: Introduction to Diabetes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Here, you can introduce what diabetes is, its types, and how it affects the body.
        </p>
        {/* You can add more detailed content, images, or videos here */}
      </section>

      {/* Section 2: Managing Diabetes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Managing Diabetes</h2>
        <p className="mb-4">
          Discuss how diabetes can be managed, including lifestyle changes, medications, etc.
        </p>
        {/* More detailed content, tips, and images can go here */}
      </section>

      {/* Section 3: Diet & Nutrition */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Diet & Nutrition</h2>
        <p className="mb-4">
          Explain the importance of diet in managing diabetes and offer dietary guidelines.
        </p>
        {/* Tips, infographics, or videos related to diet & nutrition */}
      </section>

      {/* Additional sections for exercise, medications, etc., can follow */}

      {/* Resource Downloads or CTAs */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <p className="mb-4">
          Download our free diabetes management guide and stay informed!
        </p>
        {/* Download buttons or links for resources */}
      </div>
    </div>
  );
};

export default LearnPage;
