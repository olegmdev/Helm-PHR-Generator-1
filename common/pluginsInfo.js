module.exports = {
    'TopThreeThings' : {
        clientsUrl : {
            name: 'TOP_THREE_THINGS',
            url: 'topThreeThings'
        },
        plugins: {
            getTitle: 'topThreeThingsTitle',
            title: 'Top Three Things',
            url: 'topThreeThings',
            import: 'topThreeThings',
            pluginDirectory: '../plugins/TopThreeThings/index',
            imageImport: 'topThreeThingsPrevImage',
            imageSource: '../plugins/TopThreeThings/ImageSource',
            forTest: 'patientsTopThreeThings',
        },
        synopsisRequests: {
            duckUrl: '../plugins/TopThreeThings/ducks/fetch-patient-top-three-things.duck',
            requestSynopsis: 'fetchPatientTopThreeThingsSynopsisRequest',
            requestDetails: 'fetchPatientTopThreeThingsDetailRequest',
            request: 'fetchPatientTopThreeThingsRequest',
            onMount: 'fetchPatientTopThreeThingsOnMount',
            onMountDetails: 'fetchPatientTopThreeThingsDetailOnMount',
        },
        themeSelectors: {
            selector: 'patientTopThreeThingsSelector',
            store: 'patientsTopThreeThings',
            url: 'topThreeThings',
        },
    },
    'Vaccinations' : {
        clientsUrl : { name: 'VACCINATIONS', url: 'vaccinations' },
        plugins: {
            getTitle: 'vaccinationsTitle',
            title: 'Vaccinations',
            url: 'vaccinations',
            import: 'vaccinations',
            pluginDirectory: '../plugins/Vaccinations/index',
            imageImport: 'vaccinationsPrevImage',
            imageSource: '../plugins/Vaccinations/ImageSource',
            forTest: 'patientsVaccinations',
        },
        synopsisRequests: {
            duckUrl: '../plugins/Vaccinations/ducks/fetch-patient-vaccinations.duck',
            requestSynopsis: 'fetchPatientVaccinationsSynopsisRequest',
            requestDetails: 'fetchPatientVaccinationsDetailRequest',
            request: 'fetchPatientVaccinationsRequest',
            onMount: 'fetchPatientVaccinationsOnMount',
            onMountDetails: 'fetchPatientVaccinationsDetailOnMount',
        },
        themeSelectors: {
            selector: 'patientVaccinationsSelector',
            store: 'patientsVaccinations',
            url: 'vaccinations',
        },
    }
};