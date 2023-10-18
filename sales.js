"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

// calculate totals by quarter, Define constant and use a for loop
const quarterTotals = [0, 0, 0, 0];

// display totals by quarter, document write and use a for loop
document.write("<h2>Sales by Quarter</h2>");

let quartersum = 0;

for(let i = 0; i < quarterTotals.length; i++) {
    quartersum = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
    quarterTotals[i] = quartersum;
    document.write("Q" + (i + 1) + ": $" + quartersum + "<br>");
}

// calculate totals by region, define constant and use a for loop
const regionTotals = [0, 0, 0, 0, 0];

// display totals by region, document write and use a for loop with a document write in the loop.
document.write("<h2>Sales by Region</h2>");

let regionsum = 0;

regionsum = region1[0] + region1[1] + region1[2] + region1[3];
document.write("Region 1: $" + regionsum + "<br>");

regionsum = region2[0] + region2[1] + region2[2] + region2[3];
document.write("Region 2: $" + regionsum + "<br>");

regionsum = region3[0] + region3[1] + region3[2] + region3[3];
document.write("Region 3: $" + regionsum + "<br>");

regionsum = region4[0] + region4[1] + region4[2] + region4[3];
document.write("Region 4: $" + regionsum + "<br>");

regionsum = region5[0] + region5[1] + region5[2] + region5[3];
document.write("Region 5: $" + regionsum + "<br>");

// calculate total sales, use a for loop to add all the quarter totals together.
let totalSales = 0;

for(let i = 0; i < quarterTotals.length; i++) {
    totalSales += quarterTotals[i];
}

// display total sales, use document write to display on html page
document.write("<h2>Total Sales</h2>");
document.write(`$${totalSales}`);
