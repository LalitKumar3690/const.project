const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full flex justify-center items-center text-white p-4 sm:p-5 md:p-6 z-50">
      <div className="container mx-auto max-w-screen-lg px-3">
        <div className="flex flex-col md:flex-row md:justify-around gap-4 sm:gap-5 md:gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-base sm:text-lg md:text-xl font-bold">QUICK LINKS</h2>
            <ul className="text-xs sm:text-sm md:text-base">
              <li>Our Projects</li>
              <li>Sustainability</li>
              <li>Services</li>
              <li>News</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-base sm:text-lg md:text-xl font-bold">UAE - DUBAI</h2>
            <p className="text-xs sm:text-sm md:text-base">000 xyz,</p>
            <p className="text-xs sm:text-sm md:text-base">Country_Name,</p>
            <p className="text-xs sm:text-sm md:text-base">P.O. Box: 0000</p>
            <p className="text-xs sm:text-sm md:text-base">Tel: +99999999</p>
            <p className="text-xs sm:text-sm md:text-base">Fax: +999999999</p>
            <p className="text-xs sm:text-sm md:text-base">E-mail: info@versai.in/About-us</p>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-base sm:text-lg md:text-xl font-bold">JAIPUR INDIA</h2>
            <p className="text-xs sm:text-sm md:text-base">000 xyz,</p>
            <p className="text-xs sm:text-sm md:text-base">Country_Name,</p>
            <p className="text-xs sm:text-sm md:text-base">P.O. Box: 0000</p>
            <p className="text-xs sm:text-sm md:text-base">Tel: +99999999</p>
            <p className="text-xs sm:text-sm md:text-base">Fax: +999999999</p>
            <p className="text-xs sm:text-sm md:text-base">E-mail: info@versai.in/About-us</p>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-base sm:text-lg md:text-xl font-bold">XYZ INDIA</h2>
            <p className="text-xs sm:text-sm md:text-base">000 xyz,</p>
            <p className="text-xs sm:text-sm md:text-base">Country_Name,</p>
            <p className="text-xs sm:text-sm md:text-base">P.O. Box: 0000</p>
            <p className="text-xs sm:text-sm md:text-base">Tel: +99999999</p>
            <p className="text-xs sm:text-sm md:text-base">Fax: +999999999</p>
            <p className="text-xs sm:text-sm md:text-base">E-mail: info@versai.in/About-us</p>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-8">
          <p className="text-center text-xs sm:text-sm md:text-base">
            Copyright 2022 Versai. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
