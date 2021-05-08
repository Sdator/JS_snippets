!async function() {
    await import("https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js")


    let SkillGems=""
    let items=""

    $(".filter-container:eq(-2) .filter-text>div").text((k,v)=> {SkillGems += `"${v}" `})
    $(".filter-container:eq(1) .filter-text>div").text((k,v)=> {items += `"${v}" `})


    const mb =`
Show
	Class "Skill Gems"
	BaseType ${SkillGems}
Show
	BaseType ${items}
    `.trim()



     console.log(mb)

}()
