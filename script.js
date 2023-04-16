function volume_sphere() {
    //Write your code here
  let item = document.getElementById("radius").value;
  let vol = Math.pow(Number(item),3)* 4/3 * Math.PI;
  document.getElementById("volume").value = String(vol);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
