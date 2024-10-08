document.getElementById("resumeForm")?.addEventListener("submit", function(event){
    event.preventDefault();
   
    // Type assertion
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
   
    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
   
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
   
    // Picture element
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
   
    // Generate and Edit Resume Output
    const resumeOutput = `
    <h2>Editable Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profilePicture" class="profilePicture">` : ''}
    <p><strong>Name:</strong><span contenteditable="true"> ${name}</span></p>
    <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
    <p><strong>Phone:</strong><span contenteditable="true"> ${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;
   
    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput;
    } else {
    console.error("The resume output element is missing");
    }
   
    } else {
    console.error("One or more input elements are missing");
    }
   });