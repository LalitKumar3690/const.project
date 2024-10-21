import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white p-10 z-50">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-10">
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold">QUICK LINKS</h2>
            <ul>
              <li>Our Projects</li>
              <li>Sustainability</li>
              <li>Services</li>
              <li>News</li>
            </ul>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold">UAE - DUBAI</h2>
            <p>000 xyz,</p>
            <p>Country_Name,</p>
            <p>P.O. Box: 0000</p>
            <p>Tel: +99999999</p>
            <p>Fax: +999999999</p>
            <p>E-mail: info@versai.in/About-us</p>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold">JAIPUR INDIA</h2>
            <p>000 xyz,</p>
            <p>Country_Name,</p>
            <p>PO. Box: 0000</p>
            <p>Tel: +99999999</p>
            <p>Fax: +999999999</p>
            <p>E-mail: info@versai.in/About-us</p>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold">XYZ INDIA</h2>
            <p>000 xyz,</p>
            <p>Country_Name,</p>
            <p>P.O. Box: 0000</p>
            <p>Tel: +99999999</p>
            <p>Fax: +999999999</p>
            <p>E-mail: info@versai.in/About-us</p>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <p class="text-lg">Copyright 2022 Versai. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;