const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('proto/middleware.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const middlewareProto = grpc.loadPackageDefinition(packageDefinition).middleware;

const startInstance = (call, callback) => {
  // Logic to start an instance
  callback(null, { message: 'Instance started' });
};

const stopInstance = (call, callback) => {
  // Logic to stop an instance
  callback(null, { message: 'Instance stopped' });
};

const getInstanceStatus = (call, callback) => {
  // Logic to get instance status
  callback(null, { message: 'Instance status' });
};

const server = new grpc.Server();
server.addService(middlewareProto.InstanceService.service, {
  startInstance,
  stopInstance,
  getInstanceStatus
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
console.log('gRPC server running at http://0.0.0.0:50051');
server.start();
