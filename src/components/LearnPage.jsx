import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LearnPage = () => {
  const diabetesTypes = [
    {
      title: 'Type 1 Diabetes',
      description:
        'Type 1 diabetes, once known as juvenile diabetes or insulin-dependent diabetes, is a chronic condition. The pancreas makes little or no insulin. Insulin is a hormone the body uses to allow sugar (glucose) to enter cells to produce energy. Different factors, such as genetics and some viruses, may cause type 1 diabetes. Although type 1 diabetes usually appears during childhood or adolescence, it can develop in adults. Treatment is directed toward managing the amount of sugar in the blood using insulin, diet, and lifestyle to prevent complications.',
      backgroundColor: 'bg-blue-50',
    },
    {
      title: 'Type 2 Diabetes',
      description:
        "Type 2 diabetes affects the body's sugar utilization, hindering insulin efficacy and potentially leading to high blood sugar levels if untreated. It can cause significant harm to nerves and blood vessels over time. Often preventable, it's influenced by factors like obesity, inadequate exercise, and genetics. Early detection is crucial to mitigate its severe effects. More than 95% of individuals with diabetes have type 2 diabetes. It was previously known as non-insulin-dependent or adult-onset diabetes, increasingly occurring in children today.",
      backgroundColor: 'bg-blue-50',
    },
    {
      title: 'Gestational Diabetes',
      description:
        "Gestational diabetes occurs during pregnancy when the placenta-produced hormone affects insulin usage, leading to elevated blood sugar levels. Symptoms typically resolve post-delivery.",
      backgroundColor: 'bg-blue-50',
    },
    {
      title: 'Type 1 Diabetes',
      description:
        "In prediabetes, blood sugar levels are elevated but not high enough to be classified as diabetes. People with repeated high fasting glucose tests are at increased risk of developing diabetes.",
      backgroundColor: 'bg-blue-50',
    },
    
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjust based on your design, e.g., slidesToShow: 2 for 2 slides at once
    slidesToScroll: 1, // Keep this consistent with slidesToShow for uniformity
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Diabetes Education</h1>

      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="md:pr-8 md:w-1/2">
            <div className="card bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:bg-blue-100 hover:border-transparent hover:shadow-lg transition duration-300 p-4">
              <h2 className="text-3xl font-semibold mb-4">Understanding Diabetes</h2>
              <p className="text-lg leading-relaxed mb-4">
                Diabetes is a chronic health condition affecting how the body processes food into energy. It occurs when the pancreas doesn't produce enough insulin or the body can't use it effectively. This leads to high blood sugar levels, causing potential health issues like heart disease, vision loss, and kidney disease.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="src/assets/diabetes.png" // Replace with relevant image
              alt="Understanding Diabetes"
              className="w-50 h-auto rounded-lg shadow-md"
              style={{ height: '300px' }} // Adjust the height here
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="src/assets/statistics.png" // Replace with relevant image
              alt="Statistics from WHO"
              className="w-50 h-auto rounded-lg shadow-md"
              style={{ height: '350px' }} // Adjust the height here
            />
          </div>
          <div className="md:pl-8 md:w-1/2">
            <div className="statistics-card rounded-lg overflow-hidden border border-gray-200 shadow-md hover:bg-blue-100 hover:border-transparent hover:shadow-lg transition duration-300 p-4">
              <h2 className="text-3xl font-semibold mb-4 md:text-left">Statistics from WHO</h2>
              <p className="text-lg leading-relaxed mb-4">
                In 2019, diabetes was directly responsible for 1.5 million deaths, with 48% occurring before age 70. Kidney disease accounted for 460,000 diabetes-related deaths, and raised blood glucose contributed to about 20% of cardiovascular deaths.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Between 2000 and 2019, age-standardized mortality rates from diabetes increased by 3%, with a 13% rise in lower-middle-income countries. However, the global probability of dying from major noncommunicable diseases decreased by 22% between 2000 and 2019.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Types of Diabetes</h2>
        <div className="max-w-3xl mx-auto">
          <Slider {...sliderSettings}>
            {diabetesTypes.map((type, index) => (
              <div key={index} className={`border rounded-lg p-6 ${type.backgroundColor}`} style={{ height: '400px' }}>
                <h3 className="text-2xl font-semibold mb-4">{type.title}</h3>
                <p className="text-lg leading-relaxed mb-4">{type.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>



      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Symptoms of Diabetes</h2>
        <p className="text-lg leading-relaxed mb-4">
          Symptoms of diabetes may manifest suddenly or take years to notice, especially in type 2 diabetes, often starting mildly. Common symptoms include increased thirst, frequent urination, blurred vision, fatigue, and unintentional weight loss. Diabetes can severely damage blood vessels and nerves, leading to an elevated risk of heart attacks, strokes, kidney failure, and vision loss.
        </p>
      </section>

      <section className="mb-12 flex flex-wrap justify-center">
        {/* Diabetes Diagnosis */}
        <div className="card bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:bg-blue-100 hover:border-transparent hover:shadow-lg transition duration-300 p-4 mb-6 w-5/12 md:mr-4">
          <h2 className="text-3xl font-semibold mb-4">Diabetes Diagnosis</h2>
          <p className="text-lg leading-relaxed mb-4">
            A doctor can diagnose diabetes through various blood tests:
          </p>
          <ul className="list-disc pl-6">
            <li>Random blood sugar test: Can be taken at any time regardless of eating.</li>
            <li>A1C test: Evaluates blood sugar levels over several months.</li>
            <li>Fasting blood sugar test: Measures blood sugar after an overnight fast.</li>
            <li>Glucose tolerance test: Shows how your body metabolizes glucose over several hours after consuming a special liquid.</li>
          </ul>
        </div>

        {/* Diabetes Treatment */}
        <div className="card bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:bg-blue-100 hover:border-transparent hover:shadow-lg transition duration-300 p-4 mb-6 w-5/12 md:ml-4">
          <h2 className="text-3xl font-semibold mb-4">Diabetes Treatment</h2>
          <p className="text-lg leading-relaxed mb-4">
            Treatment for diabetes is based on type and severity and may involve:
          </p>
          <ul className="list-disc pl-6">
            <li>Frequent blood glucose monitoring.</li>
            <li>Lifestyle modifications, including diet and exercise.</li>
            <li>Oral medication or daily insulin injections.</li>
            <li>
              Routine physical exams are crucial for diabetes management, allowing the monitoring and treatment of potential complications like eye issues, kidney disease, cardiovascular problems, and neuropathy (nerve damage).
            </li>
          </ul>
        </div>
      </section>


      {/* References */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">References</h2>
        <ol className="list-disc pl-6">
          <li className="mb-2">
            Global Burden of Disease Collaborative Network. Global Burden of Disease Study 2019. Results. Institute for Health Metrics and Evaluation. 2020. 
          </li>
          <li className="mb-2">
            Diabetes mellitus, fasting blood glucose concentration, and risk of vascular disease: a collaborative meta-analysis of 102 prospective studies. Emerging Risk Factors Collaboration. Sarwar N, Gao P, Seshasai SR, Gobin R, Kaptoge S, Di Angelantonio et al. Lancet. 2010; 26;375:2215-2222.
          </li>
          <li className="mb-2">
            Causes of blindness and vision impairment in 2020 and trends over 30 years, and prevalence of avoidable blindness in relation to VISION 2020: the Right to Sight: an analysis for the Global Burden of Disease Study GBD 2019 Blindness and Vision Impairment Collaborators* on behalf of the Vision Loss Expert Group of the Global Burden of Disease Study† Lancet Global Health 2021;9:e141-e160.
          </li>
          <li>
            2014 USRDS annual data report: Epidemiology of kidney disease in the United States. United States Renal Data System. National Institutes of Health, National Institute of Diabetes and Digestive and Kidney Diseases, Bethesda, MD, 2014:188–210.
          </li>
          <li>Hopkins Medicine</li>
          <li>Center for Disease Control and Prevention</li>
          <li>World Health Organization</li>
        </ol>
      </section>
    </div>
  );
};

export default LearnPage;