const free = [];

async function deleteID() {

    console.log("0");
    let data;
    const res = await fetch(link0)
    .then((res) => res.json())
    .then((res) => data = res)
    console.log(res);
    let length = res.length;
    console.log(`Lenght: ${length}`);
    let user = res[length - 1];
    console.log(user);

    let idMax = length;

    const clearID = document.getElementById("deleteById").value;
    console.log(`clearID: ${clearID}`);
    console.log(`type: ${typeof(clearID)}`);

    async function takeID() {
        let deleteUrl = `${link0}/${clearID}`; 
        console.log(deleteUrl);

        let options = { method: 'DELETE' };

        chosenId = await fetch(deleteUrl, options)
        .then(response => response.json)
        .then(response => data = response)

        console.log(response)
    }

    if (clearID <= idMax) {
        takeID();
    }
    else{
        console.log('U enter id greater than exist');
    }
    
}

function clearApi() {
    console.log('HUILO');
}
