function shippingCost() 
{
    var report = "";


    // Collect the weight from html
    var weight = document.getElementById("weight").value;

    // Collect the distance from html
    var distance = document.getElementById("distance").value;

    
        if (weight <= 2) {
            report = "Your shipping cost is: $1:10";
        }else {
          if (weight > 2 && weight <= 6 ) {
            report = "Your Shipping cost is: $2:20";
          }else{
            if (weight > 6 && weight <= 10) {
            report = "Your Shipping cost is: $3:70";
          }else {
            (weight > 10) 
            report = "Your Shipping cost is: $3:80";
            }

          }

        // Insert the result into correct position on the HTML Page
        document.getElementById("report").innerHTML = report;
    }
}
