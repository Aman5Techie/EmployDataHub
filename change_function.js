
const replacetemp = (temp, product,a=1) => {
  let output = temp.replace(/{%first%}/g, product.firstName);
  output = output.replace(/{%last%}/g, product.lastName);
  output = output.replace(/{%Department%}/g, product.department);
  output = output.replace(/{%salary%}/g, product.salary);
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%number%}/g, a);
  if (product.gender == "male") {
    output = output.replace(/{%gender%}/g, "👦");
    output = output.replace(/{%product_imagee%}/g, "👦");
  } else {
    output = output.replace(/{%gender%}/g, "👧");
    output = output.replace(/{%product_imagee%}/g, "👧");
  }
  output = output.replace(/{%FROM%}/g, product.address["city"]);
  output = output.replace(/{%FROM2%}/g, product.address["state"]);
  output = output.replace(/{%email%}/g, product.email);
  output = output.replace(/{%postion%}/g, product.position);
  output = output.replace(/{%phnumber%}/g, product.phoneNumber);
  output = output.replace(/{%Description%}/g, product.description);
  output = output.replace(/{%joined%}/g, product.startDate);

  // if (!product.organic) { output = output.replace(/{%not_organic%}/g, 'not-organic') }
  return output;

};

module.exports = { replacetemp };
