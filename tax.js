

// Filling Status
const filingStatus = document.createElement('div');
filingStatus.className = "filing-status";
document.body.appendChild(filingStatus); 

// Create options of filling status
const menuStatus = {
    'single': function (income) {
        if (income >= 721314) {
            return 70116.38 + (income - 721314) * 0.123; 
        } else if (income >= 432787) {
            return 37512.83 + (income - 432787) * 0.113;
        } else if (income >= 360659) {
            return 30083.65 + (income - 360659) * 0.103;
        } else if (income >= 70606) {
            return 3108.72 + (income - 70606) * 0.093;
        } else if (income >= 55866) {
            return 1929.52 + (income - 55866) * 0.08;
        } else if (income >= 40245) {
            return 992.26 + (income - 40245) * 0.06;
        } else if (income >= 25499) {
            return 402.42 + (income - 25499) * 0.04;
        } else if (income >= 10756) {
            return 107.56 + (income - 10756) * 0.02;
        } else if (income >= 0) {
            return 0.01 * income;
        }
    },

    'married': function (income) {
        if (income >= 1442628) {
            return 140232.77 + (income - 1442628) * 0.123; 
        } else if (income >= 865574) {
            return 75025.67 + (income - 865574) * 0.113;  
        } else if (income >= 721318) {
            return 60167.30 + (income - 721318) * 0.103;  
        } else if (income >= 141212) {
            return 6217.44 + (income - 141212) * 0.093;  
        } else if (income >= 111732) {
            return 3859.04 + (income - 111732) * 0.08;  
        } else if (income >= 80490) {
            return 1984.52 + (income - 80490) * 0.06;  
        } else if (income >= 50998) {
            return 804.84 + (income - 50998) * 0.04; 
        } else if (income >= 21512) {
            return 215.12 + (income - 21512) * 0.02; 
        } else if (income >= 0) {
            return 0.01 * income;
        }
    },

    'household': function (income) {
        if (income >= 980987) {
            return 94633.85  + (income - 980987) * 0.123; 
        } else if (income >= 588593) {
            return 50293.33 + (income - 588593) * 0.113;  
        } else if (income >= 490493) {
            return 40189.03 + (income - 490493) * 0.103;  
        } else if (income >= 96107) {
            return 3511.13 + (income - 96107) * 0.093;  
        } else if (income >= 81364) {
            return 2331.69  + (income - 81364) * 0.08;  
        } else if (income >= 65744) {
            return 1394.49  + (income - 65744) * 0.06;  
        } else if (income >= 51000) {
            return 804.73  + (income - 51000) * 0.04; 
        } else if (income >= 21527) {
            return 215.27 + (income - 21527) * 0.02; 
        } else if (income >= 0) {
            return 0.01 * income;
        }
    },
}

filingStatus.innerHTML += 
    `<h1>FILING STATUS</h1>
    <div><input type = "checkbox" class = "options-filling-status-single"> Single or Married / RDP Filing Separately</div>
    <div><input type = "checkbox" class = "options-filling-status-married">Married/RDP Filing Jointly or Qualifying Surviving Spouse / RDP</div>
    <div><input type = "checkbox" class = "options-filling-status-household">Head of Household</input></div>`

// Digital Assets
const digitalAssets = document.createElement('div');
digitalAssets.className = "digital-assets";
document.body.appendChild(digitalAssets);

digitalAssets.innerHTML += 
    `<h1>DIGITAL ASSETS</h1>
        <p>At any time during this year, did you: (a) receive (as a reward, award, or payment for property or services); or (b) sell,
exchange, or otherwise dispose of a digital asset (or a financial interest in a digital asset)? (See instructions.)</p>
            <div><input type = "checkbox" class = "options-digital-assets-yes"> Yes</div>
            `

// Tax rate of digital assets
const menuTaxDigitalAssets = {
    'single': function (income) {
        if (income >= 1000000) {
            return 104988.54 + (income - 1000000) * 0.133; 
        } else if (income >= 698272) {
            return 67876.00 + (income - 698272) * 0.123;
        } else if (income >= 418962) {
            return 36314.08 + (income - 418962) * 0.113;
        } else if (income >= 349138) {
            return 29122.31 + (income - 349138) * 0.103;
        } else if (income >= 68350) {
            return 3009.12 + (income - 68350) * 0.093;
        } else if (income >= 54082) {
            return 1867.76 + (income - 54082) * 0.08;
        } else if (income >= 38960) {
            return 960.50 + (income - 38960) * 0.06;
        } else if (income >= 24685) {
            return 389.54 + (income - 24685) * 0.04;
        } else if (income >= 10413) {
            return 104.12 + (income - 10413) * 0.02;
        } else if (income >= 0) {
            return 0.01 * income;
        }
    },

    'married': function (income) {
        if (income >= 2000000) {
            return 209977.71 + (income - 2000000) * 0.133; 
        } else if (income >= 1396543) {
            return 135752.50 + (income - 1396543) * 0.123;
        } else if (income >= 837923) {
            return 72628.56 + (income - 837923) * 0.113;
        } else if (income >= 698275) {
            return 58244.92 + (income - 698275) * 0.103;
        } else if (income >= 136699) {
            return 6018.44 + (income - 136699) * 0.093;
        } else if (income >= 108163) {
            return 3735.64 + (income - 108163) * 0.08;
        } else if (income >= 49369) {
            return 1921.06 + (income - 49369) * 0.06;
        } else if (income >= 20825) {
            return 779.10 + (income - 20825) * 0.04;
        } else if (income >= 20824) {
            return 208.24 + (income - 20824) * 0.02;
        } else if (income >= 0) {
            return 0.01 * income;
        }
    },

    'household': function (income) {
        if (income >= 2000000) {
            return 220819.67 + (income - 2000000) * 0.133; 
        } else if (income >= 948039) {
            return 91428.47 + (income - 948039) * 0.123;
        } else if (income >= 569791) {
            return 48686.56 + (income - 569791) * 0.113;
        } else if (income >= 474825) {
            return 38905.16 + (income - 474825) * 0.103;
        } else if (income >= 93034) {
            return 3398.69 + (income - 93034) * 0.093;
        } else if (income >= 78766) {
            return 2257.33 + (income - 78766) * 0.08;
        } else if (income >= 63643) {
            return 1350.01 + (income - 63643) * 0.06;
        } else if (income >= 49368) {
            return 779.05 + (income - 49368) * 0.04;
        } else if (income >= 20828) {
            return 208.27 + (income - 20828) * 0.02;
        } else if (income >= 0) {
            return 0.01 * income;
        }
    }
}

// Create options of digital assets
var digitalAssetsIncome = 0;
var digitalTax = 0;

document.querySelector('.options-digital-assets-yes').addEventListener('change', function() {
    // input the income of digital assets
    const inputDiv = document.querySelector('.enter'); // Find existing input div

        if (this.checked) {
            // If inputDiv doesn't exist, add it
            if (!inputDiv) {
                const newDiv = document.createElement('div');
                newDiv.className = 'enter';
                newDiv.innerHTML = `Please enter your digital assets: <input type="text" class="digital-assets-income">`;
                digitalAssets.appendChild(newDiv);
            }
        } else {
            // If inputDiv exists, remove it
            if (inputDiv) {
                inputDiv.remove();
            }
        }
    // get the value of digital assets
    document.querySelector('.digital-assets-income').addEventListener('input', function(event) {
        digitalAssetsIncome = parseFloat(event.target.value) || 0;
    });
    


    // add the the tax of the digital assets
    document.querySelector('.options-filling-status-single').addEventListener('change', function() {
        digitalTax = menuTaxDigitalAssets['single'](digitalAssetsIncome)
    })

    document.querySelector('.options-filling-status-married').addEventListener('change', function() {
        digitalTax = menuTaxDigitalAssets['married'](digitalAssetsIncome)
    })

    document.querySelector('.options-filling-status-household').addEventListener('change', function() {
        digitalTax = menuTaxDigitalAssets['household'](digitalAssetsIncome)
    })
})



// Standard Deduction
const standardDeduction = document.createElement('div');
standardDeduction.className = "standard-deduction";
document.body.appendChild(standardDeduction);


standardDeduction.innerHTML +=
    `<h1>STANDARD DEDUCTION</h1>
    <div><input type = "checkbox" class = "options-deduction-dependent">You as a dependent</div>
    <div><input type = "checkbox" class = "options-deduction-spouse-dependent">Your spouse as a dependent</div>
    <div><input type = "checkbox" class = "options-deduction-none-dependent">Spouse itemizes on a separate return or you were a dual-status alien</div>`

// Create options of standard deduction
// add the deduction of standard deduction
var stanDeduction = 0;

document.querySelector('.options-deduction-dependent').addEventListener('change', function() {
    stanDeduction = 1300;
    document.querySelector('.subtract-2').textContent = '12. Standard deduction or itemized deductions (from Schedule A):' + 1300;
    document.querySelector('.add-lines-3').textContent = 'ADD LINE: ' +  stanDeduction ;
})

document.querySelector('.options-filling-status-married').addEventListener('change',function () {
    stanDeduction = 29200;
    document.querySelector('.subtract-2').textContent = '12. Standard deduction or itemized deductions (from Schedule A):' + 29200;
    document.querySelector('.add-lines-3').textContent = 'ADD LINE: ' +  stanDeduction ;
})

document.querySelector('.options-filling-status-single').addEventListener('change', function() {
    stanDeduction = 14600;
    document.querySelector('.subtract-2').textContent = '12. Standard deduction or itemized deductions (from Schedule A):' + 14600;
    document.querySelector('.add-lines-3').textContent = 'ADD LINE: ' +  stanDeduction ;
})

document.querySelector('.options-filling-status-household').addEventListener('change', function() {
    stanDeduction = 21900;
    document.querySelector('.subtract-2').textContent = '12. Standard deduction or itemized deductions (from Schedule A):' + 21900;
    document.querySelector('.add-lines-3').textContent = 'ADD LINE: ' +  stanDeduction ;
})



// Dependents
const dependents = document.createElement('div');
dependents.className = "dependents";
document.body.appendChild(dependents);

dependents.innerHTML +=
    `<h1>DEPENDENTS</h1>
    <div>The number of child tax credit: <input type = "number" class = "dependent-child"></div>
    <div>The number of credit for other dependents: <input type = "number" class = "dependent-adult"></div>`

// add the deduction of dependents
var dependentTax = 0;
var addline5 = 0;

document.querySelector('.dependent-child').addEventListener('input', function(event) {
    dependentTax = parseFloat(event.target.value) * 1600 || 0;

    var schedule8812 = dependentTax;
        document.querySelector('.schedule-8812').textContent = '19. Child tax credit or credit for other dependents from Schedule 8812: ' + schedule8812;

     addline5 = dependentTax;
        document.querySelector('.add-lines-5').textContent = 'ADD LINE: ' + addline5;
});


document.querySelector('.dependent-adult').addEventListener('input', function(event) {
    dependentTax = parseFloat(event.target.value) * 500 || 0;
})

// Filling the form
const form = document.createElement('div');
form.className = "form";
document.body.appendChild(form);

form.innerHTML += `<h1>FILLING THE FORM</h1>`

// The income
const income = document.createElement('div');
income.className = "income";
document.body.appendChild(income);

income.innerHTML += `<h1>INCOME</h1>`

income.innerHTML += 
`<fieldset>
    <div class="total-income-w2">1a. Total amount from Form(s) W-2, box 1 (see instructions): <input type="number"></div>
    <div class="household-employee-wages">1b. Household employee wages not reported on Form(s) W-2: <input type="number"></div>
    <div class="tip-income">1c. Tip income not reported on line 1a (see instructions): <input type="number"></div>
    <div  class="medicaid-waiver-payments"v>1d. Medicaid waiver payments not reported on Form(s) W-2 (see instructions): <input type="number"></div>
    <div class="dependent-care-benefits">1e. Taxable dependent care benefits from Form 2441, line 26: <input type="number" ></div>
    <div class="adoption-benefits">1f. Employer-provided adoption benefits from Form 8839, line 29: <input type="number" ></div>
    <div class="form-8919-wages">1g. Wages from Form 8919, line 6: <input type="number" ></div>
    <div class="other-earned-income">1h. Other earned income (see instructions): <input type="number" ></div>
    <div class="combat-pay-election">1i. Nontaxable combat pay election (see instructions): <input type="number" ></div> 
    <div class="add-lines-1">ADD LINE:</div>
    <div  class="tax-exempt-interest">2a. Tax-exempt interest: <input type="number"></div> 
    <div class="taxable-interest">2b. Taxable interest: <input type="number" ></div>
    <div class="qualified-dividends">3a. Qualified dividends: <input type="number" ></div>
    <div  class="ordinary-dividends">3b. Ordinary dividends: <input type="number"></div>
    <div  class="ira-distributions">4a. IRA distributions: <input type="number"></div>
    <div  class="ira-taxable-amount">4b. Taxable amount: <input type="number"</div>
    <div class="pensions-annuities">5a. Pensions and annuities: <input type="number" ></div>
    <div class="pensions-taxable-amount">5b. Taxable amount: <input type="number"></div>
    <div class="social-security-benefits">6a. Social security benefits: <input type="number" ></div> 
    <div class="social-security-taxable-amount">6b. Taxable amount: <input type="number" ></div>
    <div class="lump-sum-election">6c. If you elect to use the lump-sum election method, check here (see instructions): <input type="number" ></div>
    <div  class="capital-gain-loss">7. Capital gain or (loss). Attach Schedule D if required. If not required, check here: <input type="number"></div> 
    <div class="additional-income">8. Additional income from Schedule 1, line 10: <input type="number" ></div>
    <div class ="add-lines-2">ADD LINE: </div> 
    <div class="adjustments-income">10. Adjustments to income from Schedule 1, line 26: </div> 
    <div class="subtract-1">11. Subtract line 10 from line 9. This is your adjusted gross income: </div> 
    <div class="subtract-2">12. Standard deduction or itemized deductions (from Schedule A): </div>
    <div class="business-deduction">13. Qualified business income deduction from Form 8995 or Form 8995-A: <input type="number"> </div>
    <div class="add-lines-3">ADD LINE: </div>
    <div class="subtract-3">15. Subtract line 14 from line 11. If zero or less, enter -0-. This is your taxable income: </div>
</fieldset>`

// total imcome + tip income
var totalIncome = 0;
var tipIncome = 0;

document.querySelector('.total-income-w2').style.display = "none";
document.querySelector('.tip-income').style.display = "none";

document.querySelectorAll('.options-filling-status-single, .options-filling-status-married').forEach(element => {
    element.addEventListener('change', function () {
        if (this.checked) {
            document.querySelector('.total-income-w2').style.display = "block";
            document.querySelector('.tip-income').style.display = "block";
        }
    })
})

// get the value of total income + tip income
document.querySelector('.total-income-w2').addEventListener('input', function(event) {
    totalIncome = parseFloat(event.target.value) || 0;
})

document.querySelector('.tip-income').addEventListener('input', function(event) {
    tipIncome = parseFloat(event.target.value) || 0;
});

//household income
var householdIncome = 0;

document.querySelector('.household-employee-wages').style.display = "none";


document.querySelector('.options-filling-status-household').addEventListener('change', function () {
        if (this.checked) {
            document.querySelector('.household-employee-wages').style.display = "block";
        }
    })


// get the value of household income
document.querySelector('.household-employee-wages').addEventListener('input', function(event) {
    householdIncome = parseFloat(event.target.value) || 0;
});



//medical waiver
var medicalWaiver = 0
document.querySelector('.medicaid-waiver-payments').addEventListener('input', function(event) {
    medicalWaiver = parseFloat(event.target.value) || 0;
});

//dependent care benifits
var dependentCare = 0
document.querySelector('.dependent-care-benefits').addEventListener('input', function(event) {
    dependentCare = parseFloat(event.target.value) || 0;
});

//employer-provided adoption benefits 
var adoptionBenefits = 0;
document.querySelector('.adoption-benefits').addEventListener('input', function (event) {
    adoptionBenefits = parseFloat(event.target.value) || 0;
})


//wages from Form 8919
var wagesF8919 = 0;
document.querySelector('.form-8919-wages').addEventListener('input', function(event) {
    wagesF8919 = parseFloat(event.target.value) || 0;
})

//other income
var otherIncome = 0;
document.querySelector('.other-earned-income').addEventListener('input', function(event) {
    otherIncome = parseFloat(event.target.value) || 0;
})

//nontaxable combat pay election
var nontaxableElection = 0;
document.querySelector('.combat-pay-election').addEventListener('input', function(event){
    nontaxableElection = parseFloat(event.target.value) || 0;
})



//add line 1
var addline1 = 0;
document.querySelectorAll('.total-income-w2, .tip-income, .household-employee-wages, .medicaid-waiver-payments, .dependent-care-benefits, .adoption-benefits, .form-8919-wages, .other-earned-income').forEach(input => {
    input.addEventListener('input', function() {
        addline1 = totalIncome + tipIncome + householdIncome + medicalWaiver + dependentCare + adoptionBenefits + wagesF8919 + otherIncome;
        document.querySelector('.add-lines-1').textContent = 'ADD LINE: ' +  addline1 ;
    })
})


//tax-exempt interest
var taxExempt = 0
document.querySelector('.tax-exempt-interest').addEventListener('input', function(event) {
    taxExempt = parseFloat(event.target.value) || 0;
});

//taxable interest
var taxableInterest = 0
document.querySelector('.taxable-interest').addEventListener('input', function(event) {
    taxableInterest = parseFloat(event.target.value) || 0;
});

//qualified dividends
var qualifiedDividends = 0;
document.querySelector('.qualified-dividends').addEventListener('input', function (event) {
    qualifiedDividends = parseFloat(event.target.value) || 0;
})


//ordinary dividends
var ordinaryDividends = 0;
document.querySelector('.ordinary-dividends').addEventListener('input', function(event) {
    ordinaryDividends = parseFloat(event.target.value) || 0;
})


//ira distribute
var iraDistribute = 0;
document.querySelector('.ira-distributions').addEventListener('input', function(event) {
     iraDistribute = parseFloat(event.target.value) || 0;
})

//ira taxable amount
var iraTax = 0;
document.querySelector('.ira-taxable-amount').addEventListener('input', function(event) {
    iraTax = parseFloat(event.target.value) || 0;
})

//pensions and annuities
var pensionsAnnuities = 0;
document.querySelector('.pensions-annuities').addEventListener('input', function(event){
    pensionsAnnuities = parseFloat(event.target.value) || 0;
})

//pensions taxable amount
var pensionsTax = 0;
document.querySelector('.pensions-taxable-amount').addEventListener('input', function(event){
    pensionsTax = parseFloat(event.target.value) || 0;
})

//social security benefits
var socialSecurity= 0;
document.querySelector('.social-security-benefits').addEventListener('input', function(event){
    socialSecurity = parseFloat(event.target.value) || 0;
})


//social security benefits tax
var socialTax= 0;
document.querySelector('.social-security-taxable-amount').addEventListener('input', function(event){
    socialTax = parseFloat(event.target.value) || 0;
})


//capital gain or (loss)
var gainLoss= 0;
document.querySelector('.capital-gain-loss').addEventListener('input', function(event){
    gainLoss = parseFloat(event.target.value) || 0;
})


//additional income
var additionalIncome= 0;
document.querySelector('.additional-income').addEventListener('input', function(event){
    additionalIncome = parseFloat(event.target.value) || 0;
})

//add line 2
var addline2 = 0;

document.querySelectorAll('.taxable-interest, .ordinary-dividends, .ira-taxable-amount, .pensions-taxable-amount, .capital-gain-loss, .additional-income, .total-income-w2, .tip-income, .household-employee-wages, .medicaid-waiver-payments, .dependent-care-benefits, .adoption-benefits, .form-8919-wages, .other-earned-income').forEach(input => {
    input.addEventListener('input', function() {
         addline2 = addline1 + taxableInterest + ordinaryDividends + iraTax + pensionsTax + gainLoss + additionalIncome;
        document.querySelector('.add-lines-2').textContent = 'ADD LINE: ' +  addline2 ;
    })
})



// business deduction
var businessDeduction = 0;

document.querySelector('.business-deduction').addEventListener('input', function(event) {
    businessDeduction = parseFloat(event.target.value) || 0;
})

// addline 3
var addline3 = 0;
document.querySelector('.business-deduction').addEventListener('input', function() {
    addline3 = stanDeduction + businessDeduction;
    document.querySelector('.add-lines-3').textContent = 'ADD LINE: ' +  addline3 ;
})



// The tax and credits
const tax = document.createElement('div');
tax.className = "tax";
document.body.appendChild(tax)

tax.innerHTML += `<h1>TAX AND CREDITS</h1>`

tax.innerHTML += 
`<fieldset>
    <div class="other-form-tax"> 16. Tax form other forms <input type="number"></div>
    <div class="schedule-2-line-3">17. Amount from Schedule 2, line 3 <input type="number"></div>
    <div class="add-lines-4">ADD LINE: </div>
    <div class="schedule-8812">19. Child tax credit or credit for other dependents from Schedule 8812: </div>
    <div class="schedule-3-line-8">20. Amount from Schedule 3, line 8: <input type="number" ></div>
    <div class="add-lines-5">ADD LINE: </div>
    <div  class="subtract-4">22. Subtract line 21 from line 18. If zero or less, enter -0-: </div>
    <div  class="schedule-2-line-21">23. Other taxes, including self-employment tax, from Schedule 2, line 21: <input type="number"></div>
    <div class="add-lines-6">ADD LINE: </div>
</fieldset>`


// schedule 2 line 3
var schedule2line3 = 0;

document.querySelector('.schedule-2-line-3').addEventListener('input', function(event) {
    schedule2line3 = parseFloat(event.target.value) || 0;
})

// other form tax
var otherTax = 0;

document.querySelector('.other-form-tax').addEventListener('input', function(event) {
    otherTax = parseFloat(event.target.value) || 0;
})

//add line 4
var addline4 = 0;
document.querySelectorAll('.other-form-tax, .schedule-2-line-3').forEach(input => {
    input.addEventListener('input', function() {
        addline4 = schedule2line3 + otherTax;
        document.querySelector('.add-lines-4').textContent = 'ADD LINE: ' + addline4;
    })
})


// schedule 3 line8
var schedule3line8 = 0;

document.querySelector('.schedule-3-line-8').addEventListener('input', function(event) {
    schedule3line8 = parseFloat(event.target.value) || 0;
})
    

//add line 5

document.querySelector('.schedule-3-line-8').addEventListener('input', function() {
    addline5 = dependentTax + schedule3line8;
    document.querySelector('.add-lines-5').textContent = 'ADD LINE: ' +  addline5 ;
})


// subtract 4
var subtract4 = 0;

document.querySelectorAll('.other-form-tax, .schedule-2-line-3, .schedule-3-line-8, .dependent-child').forEach(input => {
    input.addEventListener('input', function() {
var subtract4 = 0;
         subtract4 = addline5 - addline4;
        document.querySelector('.subtract-4').textContent = 'Subtract line 21 from line 18. If zero or less, enter -0-: ' + subtract4;
    })
})

//schedule 2 line 21
var schedule2line21 = 0;

document.querySelector('.schedule-2-line-21').addEventListener('input', function(event) {
    schedule2line21 = parseFloat(event.target.value) || 0;
})

//add line 6
var addline6 = 0;
document.querySelectorAll('.other-form-tax, .schedule-2-line-3, .schedule-3-line-8, .dependent-child, .schedule-2-line-21').forEach(input => {
    input.addEventListener('input', function() {
         addline6 = subtract4 + schedule2line21;
        document.querySelector('.add-lines-6').textContent = 'ADD LINE: ' + addline6;
    })
})



// The payments
const payments = document.createElement('div');
payments.className = "payments";
document.body.appendChild(payments);


payments.innerHTML += `<h1>PAYMENTS</h1>`

payments.innerHTML += 
`<fieldset>
<div>25. Federal income tax withheld from:</div>
<div class="forms-w2">25a. Form(s) W-2: <input type="number" ></div>
<div class="forms-1099">25b. Form(s) 1099: <input type="number" ></div>
<div class="other-forms">25c. Other forms (see instructions): <input type="number" ></div>
<div class="add-lines-7">ADD LINE: </div>
<div class="estimated-tax-payments">26. 2024 estimated tax payments and amount applied from 2023 return: <input type="number" ></div>
<div class="earned-income-credit">27. Earned income credit (EIC): <input type="number" ></div>
<div class="additional-child-tax-credit">28. Additional child tax credit from Schedule 8812: <input type="number"></div>
<div class="american-opportunity-credit">29. American opportunity credit from Form 8863, line 8: <input type="number" ></div>
<div  class="reserved-future-use">30. Reserved for future use: <input type="number"></div> 
<div  class="schedule-3-line-15">31. Amount from Schedule 3, line 15: <input type="number"></div>
<div class="add-lines-8">ADD LINE: </div> 
<div class="add-lines-9">ADD LINE: </div>
</fieldset>`


//forms w2
var formsw2 = 0;

document.querySelector('.forms-w2').addEventListener('input', function(event) {
    formsw2 = parseFloat(event.target.value) || 0;
})

//forms 1099
var forms1099 = 0;

document.querySelector('.forms-1099').addEventListener('input', function(event) {
    forms1099 = parseFloat(event.target.value) || 0;
})

//other forms
var otherforms = 0;

document.querySelector('.other-forms').addEventListener('input', function(event) {
    otherforms = parseFloat(event.target.value) || 0;
})



//add line 7
var addline7 = 0;

document.querySelectorAll('.forms-w2, .forms-1099, .schedule-3-line-8, .other-forms').forEach(input => {
    input.addEventListener('input', function() {
    addline7 = formsw2 + forms1099 + otherforms;
    document.querySelector('.add-lines-7').textContent = 'ADD LINE: ' + addline7;
    })
})



//estimated tax payments
var estimateTaxPayments = 0;
document.querySelector('.estimated-tax-payments').addEventListener('input', function(event) {
    estimateTaxPayments = parseFloat(event.target.value) || 0;

    //adjustments income
    document.querySelector('.adjustments-income').textContent = '10. Adjustments to income from Schedule 1, line 26: ' + estimateTaxPayments;

    //subtract 1
    var subtract1 = 0;
    subtract1 = addline2 - estimateTaxPayments;
    document.querySelector('.subtract-1').textContent = '11. Subtract line 10 from line 9. This is your adjusted gross income: ' + subtract1;

    //subtract 3
    var subtract3 = 0;
    subtract3 = addline3 - estimateTaxPayments;
    if (subtract3 < 0) {
        subtract3 = 0;
    }
    document.querySelector('.subtract-3').textContent = '15. Subtract line 14 from line 11. If zero or less, enter -0-. This is your taxable income: ' + subtract3;
})



// earned income credit
var earnedIncomeCredit = 0;

document.querySelector('.earned-income-credit').addEventListener('input', function(event) {
    earnedIncomeCredit = parseFloat(event.target.value) || 0;
})

//additional child tax credit
var additionalChildTaxCredit = 0;

document.querySelector('.additional-child-tax-credit').addEventListener('input', function(event) {
    additionalChildTaxCredit = parseFloat(event.target.value) || 0;
})

//american-opportunity-credit
var americanOpportunityCredit = 0;

document.querySelector('.american-opportunity-credit').addEventListener('input', function(event) {
    americanOpportunityCredit = parseFloat(event.target.value) || 0;
})


//reserved-future-use
var reservedFutureUse = 0;

document.querySelector('.reserved-future-use').addEventListener('input', function(event) {
    reservedFutureUse = parseFloat(event.target.value) || 0;
})

//schedule-3-line-15
var schedule3line15 = 0;

document.querySelector('.schedule-3-line-15').addEventListener('input', function(event) {
    schedule3line15 = parseFloat(event.target.value) || 0;
})


//add line 8
var addline8 = 0;

document.querySelectorAll('.earned-income-credit, .additional-child-tax-credit, .american-opportunity-credit, .schedule-3-line-15').forEach(input => {
    input.addEventListener('input', function() {
    addline8 = earnedIncomeCredit + additionalChildTaxCredit + americanOpportunityCredit + schedule3line15;
    document.querySelector('.add-lines-8').textContent = 'ADD LINE: ' + addline8;
    })
})


//add line 9
var addline9 = 0;

document.querySelectorAll('.earned-income-credit, .additional-child-tax-credit, .american-opportunity-credit, .schedule-3-line-15, .forms-w2, .forms-1099, .schedule-3-line-8, .other-forms, .estimated-tax-payments').forEach(input => {
    input.addEventListener('input', function() {
    addline9 = addline7 + estimateTaxPayments +addline8;
    document.querySelector('.add-lines-9').textContent = 'ADD LINE: ' + addline9;
    })
})




//The refund
const refund = document.createElement('div');
refund.className = "refund";
document.body.appendChild(refund);


refund.innerHTML += `<h1>REFUND</h1>`

refund.innerHTML += 
`<fieldset>
<div class="amount-overpaid">34. If line 33 is more than line 24, subtract line 24 from line 33. This is the amount you overpaid: </div>
<div class="amount-refunded">35. Amount of line 34 you want refunded to you <input type="number" ></div>
<div class="estimated-tax">36. Amount of line 34 you want applied to your 2025 estimated tax: <input type="number" ></div>
</fieldset>`

//amount-overpaid + amount-refunded + estimated-tax
var amountOverpaid = 0;
var amountRefunded = 0;
var estimatedTax = 0;
document.querySelector('.amount-refunded').style.display = 'none';
document.querySelector('.estimated-tax').style.display = 'none';

document.querySelectorAll('.earned-income-credit, .additional-child-tax-credit, .american-opportunity-credit, .schedule-3-line-15, .forms-w2, .forms-1099, .schedule-3-line-8, .other-forms, .estimated-tax-payments, .other-form-tax, .schedule-2-line-3, .schedule-3-line-8, .dependent-child').forEach(input => {
    input.addEventListener('input', function() {
        if (addline9 > subtract4) {
            amountOverpaid = addline9 - subtract4;
            document.querySelector('.amount-overpaid').textContent = '34. If line 33 is more than line 24, subtract line 24 from line 33. This is the amount you overpaid: ' + amountOverpaid;
            document.querySelector('.amount-refunded').style.display = 'block';
            document.querySelector('.estimated-tax').style.display = 'block';
        }
    })
})

document.querySelector('.amount-refunded').addEventListener('input', function(event) {
    amountRefunded = parseFloat(event.target.value) || 0;
    if (amountRefunded > amountOverpaid) {
        document.querySelector('.amount-refunded').textContent = '35. Amount of line 34 you want refunded to you: ' + amountOverpaid;
    }
})

document.querySelector('.amount-refunded').addEventListener('input', function() {
    estimatedTax = amountOverpaid - amountRefunded;
    if (estimatedTax < 0) {
        document.querySelector('.estimated-tax').textContent = '36. Amount of line 34 you want applied to your 2025 estimated tax: ' + 0;
    } else {
        document.querySelector('.estimated-tax').textContent = '36. Amount of line 34 you want applied to your 2025 estimated tax: ' + estimatedTax;
    }
})


//The owe
const owe = document.createElement('div');
owe.className = "owe";
document.body.appendChild(owe);


owe.innerHTML += `<h1>OWE</h1>`

owe.innerHTML += 
`<fieldset>
<div class="subtract-5">35. Subtract line 33 from line 24. This is the amount you owe: </div>
<div class="estimate-tax">36. Estimated tax penalty (see instructions) <input type="number" ></div>
</fieldset>`

//subtract 5
var subtract5 = 0;

document.querySelectorAll('.earned-income-credit, .additional-child-tax-credit, .american-opportunity-credit, .schedule-3-line-15, .forms-w2, .forms-1099, .schedule-3-line-8, .other-forms, .estimated-tax-payments, .other-form-tax, .schedule-2-line-3, .schedule-3-line-8, .dependent-child, .schedule-2-line-21').forEach(input => {
    input.addEventListener('input', function() {
    subtract5 = addline9 - addline6;
    document.querySelector('.add-lines-9').textContent = '35. Subtract line 33 from line 24. This is the amount you owe: ' + addline9;
    })
})


//estimate tax
var estimateTax = 0;

document.querySelector('.estimate-tax').addEventListener('input', function(event) {
    estimateTax = parseFloat(event.target.value) || 0;
})


//result
const result = document.createElement('div');
result.className = "result";
document.body.appendChild(result);

var calculateTax = 0;

document.querySelectorAll('.earned-income-credit, .additional-child-tax-credit, .american-opportunity-credit, .schedule-3-line-15, .forms-w2, .forms-1099, .schedule-3-line-8, .other-forms, .estimated-tax-payments, .other-form-tax, .schedule-2-line-3, .schedule-3-line-8, .dependent-child, .schedule-2-line-21, .estimate-tax').forEach(input => {
    input.addEventListener('input', function() {
    calculateTax = subtract5 + estimateTax;
    document.querySelector('.result').textContent = 'You must pay the tax of ' + calculateTax;
    })
})