const ProgressNavbar = ({ steps, currentStep, setCurrentStep }) => {
    const stepPercentage = (currentStep / (steps.length - 1)) * 100;
  
    const handleStepClick = (stepIndex) => {
      setCurrentStep(stepIndex);
    };
  
    return (
      <nav className="bg-[#0e0d1d] py-4">
        <div className="container mx-auto">
          <div className="flex pb-8 justify-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-10 h-10 mt-20 rounded-full mx-2 flex items-center  justify-center ${
                  index <= currentStep ? 'bg-[#77dd77] text-black' : 'bg-white'
                }`}
                style={{
                  transition: 'background-color 0.5s ease-in-out',
                  cursor: 'pointer',
                }}
                onClick={() => handleStepClick(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="relative pt-1 -mt-10">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xl text-center font-semibold inline-block py-1 px-2 uppercase text-[#77dd77]">
                  Step {currentStep + 1} 
                </span>
              </div>
              <div className="text-right">
                <span className="text-xl font-semibold inline-block text-[#77dd77]">
                  {stepPercentage.toFixed(0)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{
                  width: `${stepPercentage}%`,
                  transition: 'width 0.3s ease-in-out',
                  backgroundColor: '#77dd77', // Set the background color for the progress bar
                }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
              />
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default ProgressNavbar;
  