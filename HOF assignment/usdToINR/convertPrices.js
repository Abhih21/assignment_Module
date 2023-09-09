// Sample object containing items and their prices in USD
const itemsInUSD = {
    item1: 10,   // Price in USD
    item2: 25,
    item3: 30,
  };
  
  // Function to convert USD to INR using an exchange rate of 1 USD to 80 INR
  function convertToINR(priceInUSD) {
    const exchangeRate = 80;
    return priceInUSD * exchangeRate;
  }
  
  // Use the map function to create a new object with prices in INR
  const itemsInINR = Object.keys(itemsInUSD).reduce((acc, key) => {
    acc[key] = convertToINR(itemsInUSD[key]);

    return acc;
  },{});
  
  console.log("Items in INR:", itemsInINR);
  