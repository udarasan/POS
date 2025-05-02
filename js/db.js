const db={
    customers:[]
};

function saveCustomer(customer) {
    db.customers.push(customer);
}
function updateCustomer() {

}
function getCustomers() {
    return db.customers;
}
function getCustomerById(id) {
    return db.customers.find((c)=>c.id===id);
}
function removeCustomer(id) {

}