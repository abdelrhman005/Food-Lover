function valid(e) {
	e.preventDefault();
    let name1 = document.getElementById("name").value;
    let nameP = document.getElementById("nameP");

    let email = document.getElementById("email").value;
	let emailP = document.getElementById("emailP");

    let subject = document.getElementById("Subject").value;
	let subjectP = document.getElementById("SubjectP");
	
    let textArea = document.getElementById("textArea").value;
    let textAreaP = document.getElementById("textAreaP");

    if (name1 === "") {
        nameP.innerText = "Please enter your name";
    } 

	else if (name1.length < 5){
		nameP.innerText = "THe Name is Too short";
	}

    if (email === "") {
        emailP.innerText = "Please enter your email";
    } 

    if (subject === "") {
        subjectP.innerText = "Please enter a subject";
    }

    if (textArea === "") {
        textAreaP.innerText = "Please write your message";
    } else if (textArea.length < 10){
		textAreaP.innerText = "The massage must be Over 10 words";
	}
}
