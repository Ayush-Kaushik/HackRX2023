let blisterpackTemplate = {
    build: () => {
        return new Object({
            "dateassigned": null,
            "datecreated": null,
            "data": {
                "patient": {
                    "id": null,
                    "name": null,
                    "address": null
                },
                "blisterpack": {
                    "id": null,
                    "prescription": []
                }
            }
        });
    }
}

let prescriptionTemplate = {
    build: () => {
        return new Object({
            "drug_code": null,
            "class_name": "",
            "drug_identification_number": "",
            "brand_name": "",
            "descriptor": "",
            "number_of_ais": "",
            "ai_group_no": "",
            "company_name": "",
            "last_update_date": "",
        });
    }
};

let dosageTemplate = {
    build: () => {
        return new Object({
            "day": "",
            "time": "",
            "quantity": -1
        });
    }
};

module.exports = {
    blisterpackTemplate,
    prescriptionTemplate,
    dosageTemplate
}