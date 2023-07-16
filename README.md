# HackRX2023 - Project Documentation


## No-SQL Document Design
[ ] Add details about sanity check for each entry verification

```JSON
{
    "entryid": "1234",
    "assigndate": "",
    "createdate": null,
    "data": {
        "patient": {
            "id": 01234,
            "name": "James Test",
            "address": ""
        },
        "blisterpack": {
            "id": 0,
            "prescription": [
                {
                    "drug_code":225,
                    "class_name":"Human",
                    "drug_identification_number":"00000019",
                    "brand_name":"PLACIDYL CAP 200MG",
                    "descriptor":"",
                    "number_of_ais":"1",
                    "ai_group_no":"0107593001",
                    "company_name":"ABBOTT LABORATORIES, LIMITED",
                    "last_update_date":"2008-07-23",
                    "dosage": [
                        {
                            "day": "MONDAY",
                            "time": "EVENING",
                            "quantity": 2
                        },
                        {
                            "day": "TUESDAY",
                            "time": "EVENING",
                            "quantity": 2
                        },
                        {
                            "day": "WEDNESDAY",
                            "time": "EVENING",
                            "quantity": 2
                        }
                    ]
                },
                {
                    "drug_code":226,
                    "class_name":"Human",
                    "drug_identification_number":"00000027",
                    "brand_name":"PLACIDYL CAP 500MG",
                    "descriptor":"",
                    "number_of_ais":"1",
                    "ai_group_no":"0107593002",
                    "company_name":"ABBOTT LABORATORIES, LIMITED",
                    "last_update_date":"2008-07-23",
                    "dosage": [
                        {
                            "day": "MONDAY",
                            "time": "EVENING",
                            "quantity": 2
                        },
                        {
                            "day": "TUESDAY",
                            "time": "EVENING",
                            "quantity": 2
                        },
                        {
                            "day": "WEDNESDAY",
                            "time": "EVENING",
                            "quantity": 2
                        }
                    ]
                }
            ]
        }
    }
}
```



## TO DO

- [ ] Create a firebase database
- [ ] Insert some temporay documents in the table
- [ ] Create and deploy sample API on Fly.io using Github actions
- [ ] Add GET endpoint to get the single blisterpack entry
- [ ] Add PUT endpoint to make updates to the blisterpack entry



