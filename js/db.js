const db={
    customers:[]
};

function saveCustomer(customer) {
    db.customers.push(customer);
}
function updateCustomer(updateCustomer) {
    const index=db.customers.findIndex(
        (c)=>c.id===updateCustomer.id);
    if (index !== -1){
        db.customers[index]=updateCustomer;
    }
}
function getCustomers() {
    return db.customers;
}
function getCustomerById(id) {
    return db.customers.find((c)=>c.id===id);
}
function removeCustomer(id) {

}