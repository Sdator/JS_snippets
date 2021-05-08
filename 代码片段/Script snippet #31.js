{
    async function dbFuc(db) {
        let docs = [{}, {}, {}];
        let promises = docs.map((doc)=>db.post(doc));

        let results = await Promise.all(promises);
        console.log(results);
    }

    abc = dbFuc([11, 22])
    console.log(abc,"abc");

}
