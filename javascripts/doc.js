var scripts = [
    "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",
];

for(i = 0; i < scripts.length; i++) {
    document.write("<script src='" + scripts[i] + "'></script>");
}
