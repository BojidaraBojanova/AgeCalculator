function calculate() {

    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    const labelDay = document.getElementById('labelDay');
    const labelMonth = document.getElementById('labelMonth');
    const labelYear = document.getElementById('labelYear');

    const errorMsgD = document.getElementById('errorMsgD');
    const errorMsgM = document.getElementById('errorMsgM');
    const errorMsgY = document.getElementById('errorMsgY');



    const dayInputValue = document.getElementById('day').value;
    const monthInputValue = document.getElementById('month').value;
    const yearInputValue = document.getElementById('year').value;

    const yearsH = document.getElementById('years');
    const yearsTextH = document.getElementById('textY');
    const monthsH = document.getElementById('months');
    const monthsTextH = document.getElementById('textM');
    const daysH = document.getElementById('days');
    const daysTextH = document.getElementById('textD');


    if (isNaN(dayInputValue) || isNaN(monthInputValue) || isNaN(yearInputValue) || dayInputValue < 1 || dayInputValue > 31 || monthInputValue < 1 || monthInputValue > 12 ||
        yearInputValue < 1900 || yearInputValue > new Date().getFullYear()) {
        dayInput.style.border = "1px solid #d35958";
        monthInput.style.border = "1px solid #d35958";
        yearInput.style.border = "1px solid #d35958";

        labelDay.style.color = "#d35958";
        labelMonth.style.color = "#d35958";
        labelYear.style.color = "#d35958";

        if (dayInputValue && (dayInputValue < 1 || dayInputValue > 31)) {
            errorMsgD.style.display = "block";
            errorMsgD.textContent = 'Must be a valid day';
        }else if(!dayInputValue){
            errorMsgD.style.display = "block";
            errorMsgD.textContent = 'This field is required';
        }else if(dayInputValue > 1 || dayInputValue < 31){
            errorMsgD.style.display = "none";
        }

        if (monthInputValue && (monthInputValue < 1 || monthInputValue > 12)) {
            errorMsgM.style.display = "block";
            errorMsgM.textContent = 'Must be a valid month';
        }else if(!monthInputValue){
            errorMsgM.style.display = "block";
            errorMsgM.textContent = 'This field is required';
        }else{
            errorMsgM.style.display = "none";
        }

        if (yearInputValue && (yearInputValue < 1900 || yearInputValue > new Date().getFullYear())) {
            errorMsgY.style.display = "block";
            errorMsgY.textContent = 'Must be in the past';
        }else if(!yearInputValue){
            errorMsgY.style.display = "block";
            errorMsgY.textContent = 'This field is required';
        }else{
            errorMsgY.style.display = "none";
        }


        errorMsgD.style.color = "#d35958";
        errorMsgM.style.color = "#d35958";
        errorMsgY.style.color = "#d35958";
        return;
    }else{
        errorMsgD.style.display = "none";
        errorMsgM.style.display = "none";
        errorMsgY.style.display = "none";
    
        dayInput.style.border = "1px solid #e4e4e4";
        monthInput.style.border = "1px solid #e4e4e4";
        yearInput.style.border = "1px solid #e4e4e4";
    
        labelDay.style.color = "#717171";
        labelMonth.style.color = "#717171";
        labelYear.style.color = "#717171";
    }
   

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    let resYears = year - yearInputValue;
    let resMonth = month - monthInputValue;
    let resDays = day - dayInputValue;

    if (resDays < 0) {
        const lastDayOfLastMont = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        const newDays = lastDayOfLastMont + resDays;
        resDays = newDays
    }

    if (resMonth === 0) {
        resMonth = month;
    }

    if (resMonth < 12) {
        if (resMonth < 0) {
            resMonth += 11;
        }
    }

    console.log(resMonth);
    if(month <= monthInputValue && day < dayInputValue){
        resYears--;
    }

    if(month == monthInputValue && day > dayInputValue){
        resMonth = 0;
    }

    console.log(typeof(day));
    console.log(typeof(dayInputValue));

    if(month == monthInputValue && day == dayInputValue){
        resMonth = 0;
        resDays = 0;
    }


    yearsH.textContent = resYears;
    yearsTextH.textContent = ' years';

    monthsH.textContent = resMonth;
    monthsTextH.textContent = ' months';

    daysH.textContent = resDays;
    daysTextH.textContent = ' days';

    yearsH.style.color = "#864cff";
    yearsTextH.style.color = "#151515"
    monthsH.style.color = "#864cff";
    monthsTextH.style.color = "#151515";
    daysH.style.color = "#864cff";
    daysTextH.style.color = "#151515";

}

