const startInstance = (req, res) => {
    // Logic to start an instance
    res.send('Instance started');
  };
  
  const stopInstance = (req, res) => {
    // Logic to stop an instance
    res.send('Instance stopped');
  };
  
  const getInstanceStatus = (req, res) => {
    // Logic to get instance status
    res.send('Instance status');
  };
  
  module.exports = {
    startInstance,
    stopInstance,
    getInstanceStatus
  };
  