const registerForm=document.getElementById("registerForm"),loginForm=document.getElementById("loginForm");
const registerMessage=document.getElementById("registerMessage"),loginMessage=document.getElementById("loginMessage");
const authContainer=document.getElementById("authContainer"),profileCard=document.getElementById("profileCard"),profileEmail=document.getElementById("profileEmail"),profileMessage=document.getElementById("profileMessage");
function showMessage(element,message,isError=false){element.textContent=message;element.classList.toggle("error",isError);}
registerForm.addEventListener("submit",async event=>{
 event.preventDefault();const email=document.getElementById("registerEmail").value,password=document.getElementById("registerPassword").value;showMessage(registerMessage,"Creating your account...");
 try{const response=await fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})});const data=await response.json();if(!response.ok)throw new Error(data.message||"Registration failed.");showMessage(registerMessage,data.message);registerForm.reset();document.getElementById("loginEmail").value=email;}
 catch(error){showMessage(registerMessage,error.message,true);}
});
loginForm.addEventListener("submit",async event=>{
 event.preventDefault();const email=document.getElementById("loginEmail").value,password=document.getElementById("loginPassword").value;showMessage(loginMessage,"Logging in...");
 try{const response=await fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})});const data=await response.json();if(!response.ok)throw new Error(data.message||"Login failed.");sessionStorage.setItem("authToken",data.token);loginForm.reset();await loadProfile();}
 catch(error){showMessage(loginMessage,error.message,true);}
});
async function loadProfile(){
 const token=sessionStorage.getItem("authToken");if(!token)return;
 try{const response=await fetch("/profile",{method:"GET",headers:{"Authorization":"Bearer "+token}});const data=await response.json();if(!response.ok)throw new Error(data.message||"Could not load profile.");profileEmail.textContent="Logged in as: "+data.email;authContainer.classList.add("hidden");profileCard.classList.remove("hidden");}
 catch(error){sessionStorage.removeItem("authToken");showMessage(loginMessage,error.message,true);}
}
document.getElementById("logoutButton").addEventListener("click",async()=>{
 const token=sessionStorage.getItem("authToken");try{await fetch("/logout",{method:"POST",headers:token?{"Authorization":"Bearer "+token}:{}});}catch(error){}
 sessionStorage.removeItem("authToken");profileCard.classList.add("hidden");authContainer.classList.remove("hidden");showMessage(profileMessage,"You have logged out.");
});
document.getElementById("showLogin").addEventListener("click",event=>{event.preventDefault();document.getElementById("loginEmail").focus();});
document.getElementById("showRegister").addEventListener("click",event=>{event.preventDefault();document.getElementById("registerEmail").focus();});
loadProfile();
