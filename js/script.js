function formValidation() {

    var first = document.getElementById('first').value;
    var middle = document.getElementById('middle').value;
    var last = document.getElementById('last').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var mobile = document.getElementById('mobile').value;
    var age = document.getElementById('age').value;
    var residintial = document.getElementById('residintial').value;
    var parmanent = document.getElementById('parmanent').value;
    var pinCode = document.getElementById('pinCode').value;
    var house = document.getElementById('house').value;
    var post = document.getElementById('post').value;
    var areaCode = document.getElementById('areaCode').value;

    if (first == "") {
        document.getElementById('firstSpan').innerHTML = "** Please fill your First Name **"
    }
    if ((first.length <= 1) || (first.length >= 20)) {
        document.getElementById('firstSpan').innerHTML = "** First Name should be less than 1 & more than 20 **"
    }
    if (!isNaN(first)) {
        document.getElementById('firstSpan').innerHTML = "** First Name should be the number **"
    }


    if (middle == "") {
        document.getElementById('middleSpan').innerHTML = "** Please fill your Middle Name **"
    }
    if (!isNaN(middle)) {
        document.getElementById('middleSpan').innerHTML = "** Middle Name should not be the number **"
    }
    if (middle.length <= 1) {
        document.getElementById('middleSpan').innerHTML = "** Middle Name should be more than **"
    }


    if (last == "") {
        document.getElementById('lastSpan').innerHTML = "** Please fill your Last Name **"
    }
    if (!isNaN(last)) {
        document.getElementById('lastSpan').innerHTML = "** Last Name should not be the number **"
    }
    if (last.length <= 1) {
        document.getElementById('lastSpan').innerHTML = "** Last Name should be more than **"
    }


    if (email == "") {
        document.getElementById('emailSpan').innerHTML = "** Please fill your Email-ID **"
    }
    if (email.indexOf('@') == 0) {
        document.getElementById('emailSpan').innerHTML = "** Invalid @ position **"
    }
    if ((email.charAt(email.length - 4) != ".") && (email.charAt(email.length - 3) != ".")) {
        document.getElementById('emailSpan').innerHTML = "** Invalid Email-ID **"
    }

    if (phone == "") {
        document.getElementById('phoneSpan').innerHTML = "** Please fill your Phone No. **"
    }
    if (isNaN(phone)) {
        document.getElementById('phoneSpan').innerHTML = "** Invalid Phone no. **"
    }
    if (phone.length != 10) {
        document.getElementById('phoneSpan').innerHTML = "** Phone No. should not be less than 10 **"
    }


    if (mobile == "") {
        document.getElementById('mobileSpan').innerHTML = "** Please fill your Mobile No. **"
    }
    if (isNaN) {
        document.getElementById('mobileSpan').innerHTML = "** Invalid Mobile No. **"
    }
    if (mobile.length != 10) {
        document.getElementById('mobileSpan').innerHTML = "** Mobile No. should not be less than 10 **"
    }

    if (age == "") {
        document.getElementById('ageSpan').innerHTML = "** Please fill your Age **"
    }
    if (age < 18) {
        document.getElementById('ageSpan').innerHTML = "** Your Age should be greater than 18 **"
    }

    if (residintial == "") {
        document.getElementById('residintialSpan').innerHTML = "** Please fill your Residiantial Address **"
    }
    if (residintial.length <= 15) {
        document.getElementById('residintialSpan').innerHTML = "** Residiantial Address should not be less than 15 **"
    }

    if (parmanent == "") {
        document.getElementById('parmanentSpan').innerHTML = "** Please fill your Parmanent Address **"
    }
    if (parmanent.length <= 15) {
        document.getElementById('parmanentSpan').innerHTML = "** Parmanent Address should not be less than 15**"
    }

    if (pinCode == "") {
        document.getElementById('pinCodeSpan').innerHTML = "** Please fill your Pin-Code **"
    }
    if (house == "") {
        document.getElementById('houseSpan').innerHTML = "** Please fill your House No. **"
    }
    if (post == "") {
        document.getElementById('postSpan').innerHTML = "** Please fill your Post **"
    }
    if (areaCode == "") {
        document.getElementById('areaCodeSpan').innerHTML = "** Please fill your Area Code **"
    }

}