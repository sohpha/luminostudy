// Handles booking logic

window.onload = function () {
    var service = ""
    var subject = ""
    var tutor = ""
    var date = ""
    var time = ""
    var firstName = ""
    var lastName = ""
    var email = ""
    var phoneNumber = ""

    if (document.getElementById("subject")) {
        var subjectOption = document.getElementById("subject")
        subjectOption.onchange = function () {
            var tutors = document.getElementById("tutor")
            var idris = tutors.options[3]
            var victor = tutors.options[2]
            if (subject.selectedIndex === 1 || subject.selectedIndex === 2) {

                victor.style.display = 'unset'
                tutors.selectedIndex = 2
                idris.style.display = 'none';
            } else if (subject.selectedIndex === 3 || subject.selectedIndex === 4) {

                idris.style.display = 'unset'
                tutors.selectedIndex = 3
                victor.style.display = 'none';
            }
        }

    }

    if (document.getElementById("step2Btn")) {
        var step2Btn = document.getElementById("step2Btn")
        step2Btn.onclick = function () {
            selected = document.getElementById("serviceType")
            service = selected.options[selected.selectedIndex].text;
            
            selected = document.getElementById("subject")
            subject = selected.options[selected.selectedIndex].text;

            selected = document.getElementById("tutor")
            tutor = selected.options[selected.selectedIndex].text;
        }

    } 

    if (document.getElementById("step3Btn")) {
        date = document.getElementById("step3Btn").value
        selected = document.getElementById("time")
        time = selected.options[selected.selectedIndex].text;
    }

    if (document.getElementById("bookSessionBtn")) {
        bookSessionBtn = document.getElementById("bookSessionBtn")

        element = document.getElementById("firstName")
        firstName = element.innerText

        element = document.getElementById("lastName")
        lastName = element.innerText

        element = document.getElementById("emailAddress")
        email = element.innerText

        element = document.getElementById("phoneNumber")
        phoneNumber = element.innerText

    }

    if (document.getElementById("bookingConfirmation")) {
        
    }


}