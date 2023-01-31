function domHTML()
{
    let $nav  = document.getElementById("header");
    $nav.innerHTML = `
    <div class="navCenterLeft">
    <h1>API pokemon JavaScript</h1>
    </div>
    <div class="navCenterRight">
    <h1>Grupo: webFT35a</h1>
    </div>
    `;
}
domHTML();