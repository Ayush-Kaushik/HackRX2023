/* Copyright: Ayush Kaushik - HackRX2023 */

const express = require('express');
const blisterPackBuilder = require('../utilities/random.blisterpack.builder');
const router = express.Router();


router.get("/blisterpack", async (request, response, next) => {
    const { id } = request.query;

    try {
        const snapshot = await request.db.firestore().collection('blisterpacks').get();

        let data;
        if(id) {
            data = snapshot.doc(id).get()
        } else {
            data = snapshot.docs.map((doc) => doc.data());
        }
        
        return response.json(data);

    } catch (error) {
        next(error);
    }
});

router.post("/blisterpack", async (request, response, next) => {

    try {

        const collectionRef = request.db.firestore().collection('blisterpacks');
        const newDocRef = collectionRef.doc();
        let data = blisterPackBuilder.build();

        newDocRef.set(data)
            .then(() => {
                console.log('Document created successfully.');
            })
            .catch((error) => {
                console.error('Error creating document:', error);
            });
        
        return response.json(data);

    } catch (error) {
        next(error);
    }
});

router.put("/blisterpack", async (request, response, next) => {

    try {
    } catch (error) {
        next(error);
    }
});

module.exports = router;