// Create <style> element
var style = document.createElement("style")
style.innerHTML = ".text-part, #message {" +
                  "font-family: 'Noto Color Emoji', \"Helvetica Neue\", Helvetica, Arial, sans-serif;" +
                  "}";
                   
// Insert style element before first <script> element
var ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);
