function changeColors(){
    const paras =
    document.querySelectorAll(".myPara");
    paras[0].style.color = "#007bff"
    // blue
    paras[1].style.color ="#28a745"
    // green color
    paras[2].style.color = "#f1c40f"
    // yellow color
    // smoth transition effect
    paras.forEach(p => p.style.transition = "color 0.6s ease");
}
