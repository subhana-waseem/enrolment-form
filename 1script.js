<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase ref ,set,get,child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCExEi1euBGjQ-cVtVRbHEzCfWN2ceIL7U",
    authDomain: "ragistration-form-b18e2.firebaseapp.com",
    projectId: "ragistration-form-b18e2",
    storageBucket: "ragistration-form-b18e2.appspot.com",
    messagingSenderId: "1081801065645",
    appId: "1:1081801065645:web:624dae5a68a528e28d7224"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //get ref to database services
  const db = getDatabase(app)
  document.getElementById("submit").addEventlistener('click',function(e){
    setImmediate(ref(db,'user/' + document.getElementById("enter your name").value),
    enter your name:document.getElementById("enter your name").value,
    enter your father's name:document.getElementById("enter your father's name").value,
    enter your mother's name:document.getElementById("enter your mother's name").value,
    enter your email:document.getElementById("enter your email").value,
    enter your mobile number:document.getElementById("enter your mobile number").value,
    enter your permanent address:document.getElementById("enter your permanent address").value,
    Enter your qualification:document.getElementById("Enter your qualification").value,
    martial status:document.getElementById("martial status").value,
    states:document.getElementById("states").value,
    yes i am intrested:document.getElementById("yes i am intrested").value
  });
  alert("ragister successful!")
})
</script>