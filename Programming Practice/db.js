
   let data= [
        {
            "id": 2,
            "gateway_id": 12,
            "user_id": 9,
            "key": "Mobile number",
            "value": "91589239629",
            "type": 2,
            "status": 0,
            "date_added": null,
            "date_modified": "2022-02-22T13:37:02.000Z",
            "unique_id": 1,
            "first_name": "imran",
            "last_name": "Rehmata"
        },
        {
            "id": 3,
            "gateway_id": 10,
            "user_id": 9,
            "key": "Account Number",
            "value": "9158929565656",
            "type": 2,
            "status": 0,
            "date_added": null,
            "date_modified": "2022-02-22T15:16:21.000Z",
            "unique_id": 1,
            "first_name": "imran",
            "last_name": "Rehmata"
        },
        {
            "id": 4,
            "gateway_id": 10,
            "user_id": 9,
            "key": "Mobile number",
            "value": "915892329",
            "type": 2,
            "status": 0,
            "date_added": null,
            "date_modified": "2022-02-22T15:16:27.000Z",
            "unique_id": 2,
            "first_name": "imran",
            "last_name": "Rehmata"
        },
        {
            "id": 5,
            "gateway_id": 12,
            "user_id": 9,
            "key": "Account Number",
            "value": "91529565656",
            "type": 2,
            "status": 0,
            "date_added": null,
            "date_modified": "2022-02-22T13:48:36.000Z",
            "unique_id": 2,
            "first_name": "imran",
            "last_name": "Rehmata"
        },
        {
            "id": 6,
            "gateway_id": 12,
            "user_id": 9,
            "key": "Pay Tm",
            "value": "91523295643634",
            "type": 2,
            "status": 0,
            "date_added": null,
            "date_modified": "2022-02-22T13:49:25.000Z",
            "unique_id": 3,
            "first_name": "imran",
            "last_name": "Rehmata"
        },
        {
            "id": 7,
            "gateway_id": 12,
            "user_id": 9,
            "key": "Pay Tm",
            "value": "9152329534",
            "type": 2,
            "status": 0,
            "date_added": null,
            "date_modified": "2022-02-22T13:49:32.000Z",
            "unique_id": 4,
            "first_name": "imran",
            "last_name": "Rehmata"
        }
    ]

    let arr = data.map(ele => ele.unique_id)
    let sortedArray = [...new Set(arr)]
    console.log(sortedArray)
    for(let i=0 ; i<sortedArray.length; i++){
        let obj = {}
        let paymentDetails = []
        let flag = true
        for(let j=0; j<data.length; j++){
            if(data[j].unique_id == sortedArray[i]){
                if(flag){
                    obj.gateway_id = data[j].gateway_id
                    obj.unique_id = data[j].unique_id
                    obj.user_information = {
                        user_id : data[j].user_id,
                        first_name : data[j].first_name,
                        last_name : data[j].last_name 
                    }
                }
                paymentDetails.push({
                    "key": data[j].key,
                    "value": data[j].value,
                    "type": data[j].type,
                    "status": data[j].status,
                    "date_added": data[j].date_added,
                    "date_modified": data[j].date_modified,
                })
                flag = false
            }
        }
        obj.paymentDetails = paymentDetails
        
        console.log(obj)
    }
