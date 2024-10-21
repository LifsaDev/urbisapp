const gradients = [
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fee2fe 0%, #ddefbb 100%)",
    "linear-gradient(135deg, #d3d3d3 0%, #a9a9a9 100%)",
    "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    "linear-gradient(135deg, #e8f5e9 0%, #4caf50 100%)",
    "linear-gradient(135deg, #ffffff 0%, #e8f5ff 100%)",
    "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    "linear-gradient(135deg, #e0f7fa 0%, #26c6da 100%)",
    "linear-gradient(135deg, #6D7585 0%, #2F343F 100%)"
  ];
  
const backgroupChoice = gradients[Math.floor(Math.random() * gradients.length)];
const reversebackgroundChoice = gradients[Math.floor(Math.random() * gradients.length)];
export { backgroupChoice, reversebackgroundChoice };