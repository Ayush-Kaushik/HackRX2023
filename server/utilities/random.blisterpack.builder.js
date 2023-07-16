const { faker } = require('@faker-js/faker');
const medicineData = require('./medicine.data.json');
const { dosageTemplate, blisterpackTemplate, prescriptionTemplate } = require('./blisterpack.template');

const DAYS_OF_WEEK = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
];

const TIME_OF_DAY = [
    "MORNING",
    "NOON",
    "EVENING",
    "NIGHT"
];

const build = () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-12-31');

    let blisterPack = blisterpackTemplate.build();

    blisterPack.data.patient.id = faker.string.uuid(),
    blisterPack.data.patient.name = faker.person.fullName();
    blisterPack.data.patient.address = faker.location.streetAddress();
    blisterPack.dateassigned = faker.date.between({ startDate, endDate });

    blisterPack.data.blisterpack.id = faker.string.uuid();
    const medicineCount = Math.floor(Math.random() * 22) + 1;

    for (let i = 0; i < medicineCount; i++) {
        let prescription = prescriptionBuilder();
        blisterPack.data.blisterpack.prescription.push(prescription);
    }

    return blisterPack;
}


const prescriptionBuilder = () => {
    let index = Math.floor(Math.random() * 22) + 1;

    let prescription = prescriptionTemplate.build();
    let mappedPrescription = Object.assign({}, prescription, medicineData[index]);

    mappedPrescription["entry_filled"] = false;
    mappedPrescription["dosage"] = dosageListBuilder();
    return mappedPrescription;
}


const dosageListBuilder = () => {

    let dosageList = [];
    const uniqueNumbers = new Set();
    let count = Math.floor(Math.random() * (6)) + 1;

    while (uniqueNumbers.size < count) {
        const randomNum = Math.floor(Math.random() * (6)) + 1;
        uniqueNumbers.add(randomNum);
    }

    let numbers = Array.from(uniqueNumbers);

    for (let i = 0; i < numbers.length; i++) {
        let dosage = dosageTemplate.build();
        dosage.day = DAYS_OF_WEEK[numbers[i]]
        dosage.quantity = Math.floor(Math.random() * (7)) + 1;

        let randTime = Math.floor(Math.random() * (3)) + 1
        dosage.time = TIME_OF_DAY[randTime];
        dosageList.push(dosage);
    }

    return dosageList;
}


module.exports = {
    build
};