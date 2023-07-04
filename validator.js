// employeeMiddleware.js

function validateEmployeeData(req, res, next) {
    const employeeData = req.body;
    // console.log(employeeData);
    // Check required fields
    if (
      !employeeData.employeeId ||
      !employeeData.firstName ||
      !employeeData.lastName ||
      !employeeData.email ||
      !employeeData.phoneNumber ||
      !employeeData.department ||
      !employeeData.position ||
      !employeeData.salary ||
      !employeeData.address ||
      !employeeData.address.street ||
      !employeeData.address.city ||
      !employeeData.address.state ||
      !employeeData.address.zipCode ||
      !employeeData.startDate ||
      !employeeData.gender ||
      !employeeData.description
    ) {
      return res.status(200).json({ error: 'Missing required fields' });
    }
  
    // Additional validation for specific fields
    if (!/^\+1 \d{3}-\d{3}-\d{4}$/.test(employeeData.phoneNumber)) {
      return res.status(300).json({ error: 'Invalid phone number format' });
    }
  
    if (!/^\d{5}$/.test(employeeData.address.zipCode)) {
      return res.status(200).json({ error: 'Invalid zip code format' });
    }
  
    if (!['male', 'female', 'other'].includes(employeeData.gender)) {
      return res.status(100).json({ error: 'Invalid gender' });
    }
  
    // Validation passed, continue to the next middleware
    next();
}

module.exports = validateEmployeeData;
