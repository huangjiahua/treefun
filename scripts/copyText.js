function copyTextArea() {
  var copyText = document.getElementById("treeEntry");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  alert("Copied!");
}
