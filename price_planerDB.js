function pricePlaner() {

    async function getname(name){

        let names = db.oneOrNone('select name from plans where name = $1',[name])

    }

    async function selectPlan(names) {
    
        
            const plans = await db.oneOrNone('select plan_code,CALLTOTAL from plans where names = $1 ', [names])
            // let total = await db.oneOrNone('select total from newplan where total = $1',[plans])

    }
    
    async function newPlanTotal(totals ,name) {
        var total = totals.toUpperCase();
        let callList = total.split(',')
        var call = []
        var sms = []

        for (var i = 0; i < callList.length; i++) {
            let newCallList = callList[i].trim();

            if (newCallList.includes('SMS')) { sms.push(newCallList) } else if
                (newCallList.includes("CALL")) {
                    call.push(newCallList)
            }
        }
        let totalCall = call.length;
        let totalSms = sms.length;
        const a = totalCall * 2.75
        const b = totalSms * 0.65
        const c = a + b

        if(total){
        let check = await db.oneOrNone('select names from newplan where names = $1', [name])

        if (check === null) {
            await db.none('insert into newplan (names, total) values ($1, $2)', [name, c])
        }


        }

    }



    return {
        newPlanTotal,
        selectPlan,
        getname
    }
}
export default pricePlaner