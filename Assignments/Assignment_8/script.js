function calculateTotal() {
    // Get the number of tickets entered by the user
    let adults = document.getElementById("adultTickets").value;
    let children = document.getElementById("childTickets").value;

    // Convert input values to numbers
    let adultCount = parseInt(adults) || 0;
    let childCount = parseInt(children) || 0;

    // Calculate total amount
    let total = (adultCount * 10) + (childCount * 5);

    // Display the total in the textbox
    document.getElementById("totalAmount").value = "₹" + total;
}
