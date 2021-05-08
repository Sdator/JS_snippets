{

    const e = $$("a[href*=github]")
    let 条目 =[]


    for ({text, href} of e) {
        条目+= `<tr><td><a href=${href}>${text}</a></td></tr>`
    }


    document.createElement("tb")

    
    let tab = `
    <table style="width:100%">
      <tr>
        <th>书签</th>
      </tr>
      <tr>
      ${条目}
      </tr>
    </table>
    `
    window.open("").document.write(tab);

}
