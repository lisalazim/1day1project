 const remove1 = document.getElementById("file1")
 const remove2 = document.getElementById("file2")
 const remove3 = document.getElementById("file3")

 function removeFile1() {
    remove1.style.display = "none";
 }

 function removeFile2() {
    remove2.style.display = "none";
 }

 function removeFile3() {
    remove3.style.display = "none";
 }


 // Mendapatkan elemen "uploadBox"
 var uploadBox = document.getElementById("uploadBox");

 uploadBox.addEventListener("dragover", function(e) {
     e.preventDefault();
     uploadBox.style.borderColor = "#007bff";
 });


 uploadBox.addEventListener("dragleave", function(e) {
     e.preventDefault();
     uploadBox.style.borderColor = "#ccc";
 });

 uploadBox.addEventListener("drop", function(e) {
     e.preventDefault();
     uploadBox.style.borderColor = "#ccc";

     var droppedFiles = e.dataTransfer.files;
     for (var i = 0; i < droppedFiles.length; i++) {
         console.log("Anda telah menjatuhkan file: " + droppedFiles[i].name);
     }
 });
 
 document.getElementById("selectFileButton").addEventListener("click", function () {
    document.getElementById("fileInput").click();
 });
 