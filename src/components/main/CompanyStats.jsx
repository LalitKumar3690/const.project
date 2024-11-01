import { useEffect, useState } from 'react';
import paralex1 from '../../assets/paralex1.png'; // Update this line

const CompanyStats = () => {
  const [year, setYear] = useState(0);
  const [projects, setProjects] = useState(0);
  const [employees, setEmployees] = useState(0);

  const targetYear = 1995;
  const targetProjects = 250;
  const targetEmployees = 500;

  const duration = 2000;

  useEffect(() => {
    const incrementYear = targetYear / (duration / 10);
    const incrementProjects = targetProjects / (duration / 10);
    const incrementEmployees = targetEmployees / (duration / 10);

    const interval = setInterval(() => {
      setYear((prev) => {
        if (prev < targetYear) return Math.ceil(prev + incrementYear);
        clearInterval(interval);
        return targetYear;
      });
      setProjects((prev) => {
        if (prev < targetProjects) return Math.ceil(prev + incrementProjects);
        clearInterval(interval);
        return targetProjects;
      });
      setEmployees((prev) => {
        if (prev < targetEmployees) return Math.ceil(prev + incrementEmployees);
        clearInterval(interval);
        return targetEmployees;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [duration, targetYear, targetProjects, targetEmployees]);

  return (
    <div
      className='min-h-full parallax-bg py-36 w-full px-4 sm:px-10 md:px-20 bg-cover bg-no-repeat bg-gray-100 flex flex-col items-center justify-center'
      style={{ backgroundImage: `url(${paralex1})` }} // Update this line
    >
      <h1 className='text-center new text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>Company Stats</h1>

      <div className="flex justify-center text-center items-center">
        <div className="grid new grid-cols-1 md:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8">
          {/* Card 1 */}
          <div className=" bg-white bg-opacity-25 backdrop-blur-lg border border-white border-opacity-25 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{year}</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">Established Year</p>
          </div>

          {/* Card 2 */}
          <div className=" bg-white bg-opacity-25 backdrop-blur-lg border border-white border-opacity-25 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{projects}+</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">Completed Projects</p>
          </div>

          {/* Card 3 */}
          <div className=" bg-white bg-opacity-25 backdrop-blur-lg border border-white border-opacity-25 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{employees}+</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">Employees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
