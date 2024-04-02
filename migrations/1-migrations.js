const Counter = artifacts.require('Counter');
module.exports = async function(deployer){
    deployer.deploy(Counter);
}