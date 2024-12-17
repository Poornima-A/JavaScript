let full_name="Poornima";
let age="28";
let city="Karaikudi";
let role="Tester";

let output = "";
output="<table border='1'><tr><th>Name</th><td>"+full_name+"</td></tr><tr><th>Age</th><td>"+age+"</td></tr><tr><th>City</th><td>"+city+"</td></tr><tr><th>Role</th><td>"+role+"</td></tr></table>";
document.body.innerHTML=output;

//es5

output ="<hr><table border='1'>"+
"<tr><th>Name</th><td>"+full_name+"</td></tr>"+
"<tr><th>Age</th><td>"+age+"</td></tr>"+
"<tr><th>City</th><td>"+city+"</td></tr>"+
"<tr><th>Role</th><td>"+role+"</td></tr>"+
"</table>";

//es6
output =`<hr><table border='1'>
<tr><th>Name</th><td>${full_name}</td></tr>
<tr><th>Age</th><td>${age}</td></tr>
<tr><th>City</th><td>${city}</td></tr>
<tr><th>Role</th><td>${role}</td></tr>
</table>`;
document.body.innerHTML=output;