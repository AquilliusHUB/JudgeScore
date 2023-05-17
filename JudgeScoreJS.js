//get the current elements inside the form 
const formitems = document.getElementById("form").innerHTML;

//generic template to make the proper score select of 1 to 10 into html element
function scoreSelection(Id)
{
	// Get the dropdown element
    var dropdown = document.getElementById(Id);

    // Generate options from 1 to 10
    for (var i = 0; i <= 10; i++) {
      // Create an option element
      var option = document.createElement('option');
      option.text = i; // Set the text content of the option
      option.value = i; // Set the value of the option

      // Add the option to the dropdown
      dropdown.add(option);
    }
}

function onSelect() {
  alert("You selected a number!");
}
/*
Each function below here really repeats the same thing of grabbing the right values from the right
dropdown tables, so the script has potential to be generalized further.
*/
function moWeightUpdate() {
  // Get the dropdown element(s)
  var dropdown1 = document.getElementById('mo1');
  var dropdown2 = document.getElementById('mo2');
  // Calculated the weighted value from the dropdowns
  var weightedValue = parseFloat((Number(dropdown1.value) + Number(dropdown2.value))*0.2/2*10).toFixed(2);
  // Get the paragraph element to display the selected value
  var display = document.getElementById('moWeighted');
  // Update the input box with the selected value
  display.value = weightedValue;
  totalScoreUpdate();
}
function psWeightUpdate() {
  var dropdown1 = document.getElementById('ps1');
  var dropdown2 = document.getElementById('ps2');
  var weightedValue = parseFloat((Number(dropdown1.value) + Number(dropdown2.value))*0.2/2*10).toFixed(2);
  var display = document.getElementById('psWeighted');
  display.value = weightedValue;
  totalScoreUpdate();
}
function caWeightUpdate() {
  var dropdown1 = document.getElementById('ca1');
  var weightedValue = parseFloat(Number(dropdown1.value)*0.1/1*10).toFixed(2);
  var display = document.getElementById('caWeighted');
  display.value = weightedValue;
  totalScoreUpdate();
}
function saWeightUpdate() {
  var dropdown1 = document.getElementById('sa1');
  var weightedValue = parseFloat(Number(dropdown1.value)*0.1/1*10).toFixed(2);
  var display = document.getElementById('saWeighted');
  display.value = weightedValue;
  totalScoreUpdate();
}
function fuWeightUpdate() {
  var dropdown1 = document.getElementById('fu1');
  var dropdown2 = document.getElementById('fu2');
  var weightedValue = parseFloat((Number(dropdown1.value) + Number(dropdown2.value))*0.1/2*10).toFixed(2);
  var display = document.getElementById('fuWeighted');
  display.value = weightedValue;
  totalScoreUpdate();
}
function teWeightUpdate() {
  var dropdown1 = document.getElementById('te1');
  var dropdown2 = document.getElementById('te2');
  var weightedValue = parseFloat((Number(dropdown1.value) + Number(dropdown2.value))*0.1/2*10).toFixed(2);
  var display = document.getElementById('teWeighted');
  display.value = weightedValue;
  totalScoreUpdate();
}
function ipWeightUpdate() {
  var dropdown1 = document.getElementById('ip1');
  var dropdown2 = document.getElementById('ip2');
  var weightedValue = parseFloat((Number(dropdown1.value) + Number(dropdown2.value))*0.1/2*10).toFixed(2);
  var display = document.getElementById('ipWeighted');
  display.value = weightedValue;
  totalScoreUpdate();
}
function pqWeightUpdate() {
  var dropdown1 = document.getElementById('pq1');
  var dropdown2 = document.getElementById('pq2');
  var dropdown3 = document.getElementById('pq3');
  var weightedValue = parseFloat((Number(dropdown1.value) + Number(dropdown2.value) + Number(dropdown3.value))*0.1/3*10).toFixed(2);
  var display = document.getElementById('pqWeighted');
  display.value = weightedValue;
  totalScoreUpdate();
}
//total score update
function totalScoreUpdate() {
  var summation = 0;
  var moWeightedVal = Number(document.getElementById('moWeighted').value);
  var psWeightedVal = Number(document.getElementById('psWeighted').value);
  var caWeightedVal = Number(document.getElementById('caWeighted').value);
  var saWeightedVal = Number(document.getElementById('saWeighted').value);
  var fuWeightedVal = Number(document.getElementById('fuWeighted').value);
  var teWeightedVal = Number(document.getElementById('teWeighted').value);
  var ipWeightedVal = Number(document.getElementById('ipWeighted').value);
  var pqWeightedVal = Number(document.getElementById('pqWeighted').value);
  summation = (moWeightedVal + psWeightedVal + caWeightedVal + saWeightedVal + fuWeightedVal + teWeightedVal + ipWeightedVal + pqWeightedVal).toFixed(2);
  var display = document.getElementById('Total Score');
  display.value = summation;
}
//Update all the weighted values on start
moWeightUpdate()
psWeightUpdate()
caWeightUpdate()
saWeightUpdate()
fuWeightUpdate()
teWeightUpdate()
ipWeightUpdate()
pqWeightUpdate()
//Fill all the score dropdown tables
scoreSelection("mo1");
scoreSelection("mo2");

scoreSelection("ps1");
scoreSelection("ps2");

scoreSelection("ca1");

scoreSelection("sa1");

scoreSelection("fu1");
scoreSelection("fu2");

scoreSelection("te1");
scoreSelection("te2");

scoreSelection("ip1");
scoreSelection("ip2");

scoreSelection("pq1");
scoreSelection("pq2");
scoreSelection("pq3");

//validateForm checks if all the dropdown tables are scored (do not have 0s)
function validateForm(event) {
  event.preventDefault();
  
    var cname = document.getElementById('cname').value;
    var jname = document.getElementById('jname').value;
    
    var mo1 = Number(document.getElementById('mo1').value);
    var mo2 = Number(document.getElementById('mo2').value);
    var ps1 = Number(document.getElementById('ps1').value);
    var ps2 = Number(document.getElementById('ps2').value);
    var ca1 = Number(document.getElementById('ca1').value);
    var sa1 = Number(document.getElementById('sa1').value);
    var fu1 = Number(document.getElementById('fu1').value);
    var fu2 = Number(document.getElementById('fu2').value);
    var te1 = Number(document.getElementById('te1').value);
    var te2 = Number(document.getElementById('te2').value);
    var ip1 = Number(document.getElementById('ip1').value);
    var ip2 = Number(document.getElementById('ip2').value);
    var pq1 = Number(document.getElementById('pq1').value);
    var pq2 = Number(document.getElementById('pq2').value);
    var pq3 = Number(document.getElementById('pq3').value);
    
    if (cname === '') {
    	alert('Please fill out the company name.');
    }
    if (jname === '') {
    	alert('Please fill out your judge name.');
    }

    if (mo1 === 0 || mo2 === 0 || ps1 === 0 || ps2 === 0 || ca1 === 0 || sa1 === 0 || fu1 === 0 || fu2 === 0 || te1 === 0 || te2 === 0 || ip1 === 0 || ip2 === 0 || pq1 === 0 || pq2 === 0 || pq3 === 0) {
        alert('Please select a value other than 0 for all scores.');
    return;
    }
    
  var moWeightedVal = Number(document.getElementById('moWeighted').value);
  var psWeightedVal = Number(document.getElementById('psWeighted').value);
  var caWeightedVal = Number(document.getElementById('caWeighted').value);
  var saWeightedVal = Number(document.getElementById('saWeighted').value);
  var fuWeightedVal = Number(document.getElementById('fuWeighted').value);
  var teWeightedVal = Number(document.getElementById('teWeighted').value);
  var ipWeightedVal = Number(document.getElementById('ipWeighted').value);
  var pqWeightedVal = Number(document.getElementById('pqWeighted').value);
  var totalScore = Number(document.getElementById('Total Score').value);
  
  var mo1c = document.getElementById('mo1Comments').value;
  var mo2c = document.getElementById('mo2Comments').value;
  var ps1c = document.getElementById('ps1Comments').value;
  var ps2c = document.getElementById('ps2Comments').value;
  var ca1c = document.getElementById('ca1Comments').value;
  var sa1c = document.getElementById('sa1Comments').value;
  var fu1c = document.getElementById('fu1Comments').value;
  var fu2c = document.getElementById('fu2Comments').value;
  var te1c = document.getElementById('te1Comments').value;
  var te2c = document.getElementById('te2Comments').value;
  var ip1c = document.getElementById('ip1Comments').value;
  var ip2c = document.getElementById('ip2Comments').value;
  var pq1c = document.getElementById('pq1Comments').value;
  var pq2c = document.getElementById('pq2Comments').value;
  var pq3c = document.getElementById('pq3Comments').value;
  
  var cname = document.getElementById('cname').value;
  var jname = document.getElementById('jname').value;
  var subject = 'Company Name: ' + cname + ' Judge Name: ' + jname;
  var mailtoLink = 'mailto:incubator@aquillius.com';
  mailtoLink += '?subject=' + encodeURIComponent(subject);
  mailtoLink += '&body=' + encodeURIComponent('Company Name: ' + cname + '\n');
  mailtoLink += encodeURIComponent('Market Opportunity 1: ' + mo1 + '\n');
  mailtoLink += encodeURIComponent('Market Opportunity Comments 1: ' + mo1c + '\n');
  mailtoLink += encodeURIComponent('Market Opportunity 2: ' + mo2 + '\n');
  mailtoLink += encodeURIComponent('Market Opportunity Comments 1: ' + mo2c + '\n');
  mailtoLink += encodeURIComponent('Market Opportunity Weighted: ' + moWeightedVal + '\n');
  mailtoLink += encodeURIComponent('Product/Solution 1: ' + ps1 + '\n');
  mailtoLink += encodeURIComponent('Product/Solution Comments 1: ' + ps1c + '\n');
  mailtoLink += encodeURIComponent('Product/Solution 2: ' + ps2 + '\n');
  mailtoLink += encodeURIComponent('Product/Solution Comments 2: ' + ps2c + '\n');
  mailtoLink += encodeURIComponent('Product/Solution Weighted: ' + psWeightedVal + '\n');
  mailtoLink += encodeURIComponent('Competitive Advantage 1: ' + ca1 + '\n');
  mailtoLink += encodeURIComponent('Competitive Advantage Comments 1: ' + ca1c + '\n');
  mailtoLink += encodeURIComponent('Competitive Advantage Weighted: ' + caWeightedVal + '\n');
  mailtoLink += encodeURIComponent('Scalability 1: ' + sa1 + '\n');
  mailtoLink += encodeURIComponent('Scalability 1: ' + sa1 + '\n');
  mailtoLink += encodeURIComponent('Scalability Weighted: ' + saWeightedVal + '\n');
  mailtoLink += encodeURIComponent('Financial Understanding 1: ' + fu1 + '\n');
  mailtoLink += encodeURIComponent('Financial Understanding Comments 1: ' + fu1c + '\n');
  mailtoLink += encodeURIComponent('Financial Understanding 2: ' + fu2 + '\n');
  mailtoLink += encodeURIComponent('Financial Understanding Comments 2: ' + fu2c + '\n');
  mailtoLink += encodeURIComponent('Financial Understanding Weighted: ' + fuWeightedVal + '\n');
  mailtoLink += encodeURIComponent('Team 1: ' + te1 + '\n');
  mailtoLink += encodeURIComponent('Team Comments 1: ' + te1c + '\n');
  mailtoLink += encodeURIComponent('Team 2: ' + te2 + '\n');
  mailtoLink += encodeURIComponent('Team Comments 2: ' + te2c + '\n');
  mailtoLink += encodeURIComponent('Team Weighted: ' + teWeightedVal + '\n');
  mailtoLink += encodeURIComponent('Investment Potential 1: ' + ip1 + '\n');
  mailtoLink += encodeURIComponent('Investment Potential Comments 1: ' + ip1c + '\n');
  mailtoLink += encodeURIComponent('Investment Potential 2: ' + ip2 + '\n');
  mailtoLink += encodeURIComponent('Investment Potential Comments 2: ' + ip2c + '\n');
  mailtoLink += encodeURIComponent('Investment Potential Weighted: ' + ipWeightedVal + '\n');
  mailtoLink += encodeURIComponent('Presentation Quality 1: ' + pq1 + '\n');
  mailtoLink += encodeURIComponent('Presentation Quality Comments 1: ' + pq1c + '\n');
  mailtoLink += encodeURIComponent('Presentation Quality 2: ' + pq2 + '\n');
  mailtoLink += encodeURIComponent('Presentation Quality Comments 2: ' + pq2c + '\n');
  mailtoLink += encodeURIComponent('Presentation Quality 3: ' + pq3 + '\n');
  mailtoLink += encodeURIComponent('Presentation Quality Comments 3: ' + pq3c + '\n');
  mailtoLink += encodeURIComponent('Presentation Quality Weighted: ' + pqWeightedVal + '\n');
  mailtoLink += encodeURIComponent('Total Score: ' + totalScore + '\n');
  

  window.location.href = mailtoLink;
}
