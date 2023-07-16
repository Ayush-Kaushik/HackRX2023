# HackRX2023 - Project Documentation


## No-SQL Document Design



Collection name: blisterpacks

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

Backend
=======
- [x] Create a firebase database
- [x] Find a way to access firestore database using server
- [x] Insert some temporay documents in the table
- [x] Create and deploy sample API on Fly.io using Github actions
- [x] Add GET endpoint to get the single blisterpack entry
- [ ] Update GET endoint to accept parameters for filtering results
- [ ] Add PUT endpoint to make updates to the blisterpack entry
- [x] Add details about sanity check for each entry verification

Frontend
========
- [ ] Create a simple react app and host it on vercel
- [ ] Create a home page with complete list of blisterpacks that have not been worked upon
- [ ] Create a GRID for displaying the information
