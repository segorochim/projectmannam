function fn_joinMember() {

    var joinForm = document.joinForm;
    var id = joinForm.id.value;
    var password = joinForm.password.value;
    var email = joinForm.email.value;

    if (id.length==0 || id=="") {
        alert("아이디 및 닉네임을 설정해주세요.")
        joinForm.id.focus();
    } else if (joinForm.idDuplication.value!="idCheck") {
        alert("아이디 및 닉네임 중복체크를 해주세요.");
    } else if (password.length==0 || password=="") {
        alert ("비밀번호를 입력해주세요.");
        joinForm.password.focus();
    } else if (rePassword.length==0 || rePassword =="") {
        alert ("비밀번호를 입력해주세요.");
        joinForm.rePassword.focus();
    } else if (rePassword!=password) {
        alert ("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
        joinForm.rePassword.focus();
    } else if (email.length==0 || email=="") {
        alert ("이메일 주소를 입력해주세요.");
        joinForm.email.focus();
    } else {
        joinForm.method = "post";
        joinForm.action = ""
    }
}

//MySQL에서 가져오는 데이터라는데 확인을 해 봐야 할 것 같음. 자료출처: https://kang-james.tistory.com/entry/JSP-아이디-중복-체크-기능-구현-동기-방식

function fn_dbCheckID() {
    var joinForm = document.joinForm;
    var id = joinForm.id.value;
    if (id.length ==0 || id =="") {
        alert ("아이디를 입력해주세요.");
        joinForm.id.focus();
    } else {
        window.open()
    }
}